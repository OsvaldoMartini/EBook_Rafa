import React, { Component } from 'react';
import FloatingWindow from '../controlls/FloatingWindow';
//import DraggableComp from "../controlls/DraggableComp";
import { connect } from 'react-redux';
//import ScrollToBottom from 'react-scroll-to-bottom';
import '../AutomationBoard/css/grid_backlog.css';

//import DraggableComp from 'react-draggable'; // The default
//import {DraggableCore} from 'react-draggable'; // <DraggableCore>
//import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

//import Square from "../../components/controlls/Square";

// import "react-bootstrap/dist/react-bootstrap.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Grid, Row, Col } from "react-bootstrap";
import {
  // camelCase,
  // capitalCase,
  // constantCase,
  // dotCase,
  // headerCase,
  // noCase,
  // paramCase,
  pascalCase,
  // pathCase,
  // sentenceCase,
  // snakeCase
} from 'change-case';
import {
  RSocketClient,
  JsonSerializer,
  IdentitySerializer,
} from 'rsocket-core';
import RSocketWebSocketClient from 'rsocket-websocket-client';
//import { Flowable, Single } from 'rsocket-flowable';
import Message from '../controlls/Message';

let clientControl = {};

class AutomationReqRespBacklog extends Component {
  //constructor to handle errors
  constructor() {
    super();
    this.state = {
      errors: {},
      projectIdentifier: '',
      projectSequence: '',
      automation_tasks: {},
      last_requests: [],
      last_responses: [],
      isOpen: false,
      client: null,
    };
    //var intervalLoop = null;
    this.initRsocketWebSocket = this.initRsocketWebSocket.bind(this);
    this.addErrorMessage = this.addErrorMessage.bind(this);
    this.reloadMessages = this.reloadMessages.bind(this);
    this.toggle = this.toggle.bind(this);
    this.CloseOpenRSockets = this.CloseOpenRSockets.bind(this);
  }

  toggle() {
    //console.log('toggle', this.state.isOpen);
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  getParsedDate(date) {
    date = String(date).split(' ');
    return String(date[0]);
    // var days = String(date[0]).split('-');
    // var hours = String(date[1]).split(':');
    // //console.log([parseInt(days[0]), parseInt(days[1])-1, parseInt(days[2]), parseInt(hours[0]), parseInt(hours[1]), parseInt(hours[2])])
    // return [parseInt(days[0]),"-", parseInt(days[1]),"-",parseInt(days[2]), parseInt(hours[0]), parseInt(hours[1]), parseInt(hours[2])];
  }

  getParsedTime(date) {
    date = String(date).split(' ');
    return String(date[1]);
    //console.log([parseInt(days[0]), parseInt(days[1])-1, parseInt(days[2]), parseInt(hours[0]), parseInt(hours[1]), parseInt(hours[2])])
    //return [parseInt(hours[0]),":", parseInt(hours[1]),,":", parseInt(hours[2])];
  }

  reloadMessages(data) {
    this.props.automation_tasks_prop.map((automation_task, i) =>
      automation_task.projectSequence === data.projectSequence &&
      automation_task.status !== data.status
        ? this.props.updateRSocketAutomationTask(data)
        : null,
    );
  }

  CloseOpenRSockets(automation_tasks_prop) {
    automation_tasks_prop.map((automation_task) =>
      this.initRsocketWebSocket(automation_task.projectSequence),
    );
  }

  componentDidUpdate(prevState, nextProps) {
    //console.log('DidUpdate', prevState, nextProps);
    if (
      prevState.automation_tasks_prop &&
      this.state.automation_tasks &&
      prevState.automation_tasks_prop.length > 0 &&
      this.state.automation_tasks.length > 0
    ) {
      if (
        prevState.automation_tasks_prop[0].operationName !==
        this.state.automation_tasks[0].operationName
      ) {
        if (clientControl !== undefined) {
          prevState.automation_tasks_prop.forEach((item, i) => {
            if (clientControl[item.projectSequence]) {
              clientControl[item.projectSequence].close();
            }
          });
          clientControl = {};
          console.log('CloseOpenRSockets');
          this.CloseOpenRSockets(this.state.automation_tasks);
        }
      }
    }
  }

  componentDidMount() {
    //this.handleStartRefresh();
    const {
      automation_tasks_prop,
      // last_requests_prop,
      // last_responses_prop,
    } = this.props;
    this.CloseOpenRSockets(automation_tasks_prop);

    // console.log('DidMount');
    // console.log('last_requests_prop', last_requests_prop.length);
    //  console.log('last_responses_prop', last_responses_prop.length);
  }

  // componentWillUpdate() {
  //   //this.handleStartRefresh();
  //   const { automation_tasks_prop } = this.props;

  //   this.CloseOpenRSockets(automation_tasks_prop);
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    //console.log(
    //  'getDerived',
    //  nextProps.automation_tasks_prop !== prevState.automation_tasks,
    //);
    // return {
    //   errors: nextProps.errors,
    //   projectIdentifier: prevState.projectIdentifier,
    //   automation_tasks:
    //     nextProps.automation_tasks_prop !== prevState.automation_tasks
    //       ? nextProps.automation_tasks_prop
    //       : prevState.automation_tasks,
    //   last_requests:
    //     nextProps.last_requests_prop !== prevState.last_requests
    //       ? nextProps.last_requests_prop
    //       : prevState.last_requests,
    //   last_responses:
    //     nextProps.last_responses_prop !== prevState.last_responses
    //       ? nextProps.last_responses_prop
    //       : prevState.last_responses,
    // };
  }

  //use websocket wrapped by rsocket
  initRsocketWebSocket(nameOper) {
    if (clientControl[nameOper] !== undefined) {
      clientControl[nameOper].close();
      //   document.getElementById("messages").innerHTML = "";
    }
    // Create an instance of a client
    //nameOper = nameOper.toLowerCase();
    let client = new RSocketClient({
      serializers: {
        data: JsonSerializer,
        metadata: IdentitySerializer,
      },
      setup: {
        // ms btw sending keepalive to server
        keepAlive: 60000,
        // ms timeout if no keepalive response
        lifetime: 180000,
        // format of `data`
        dataMimeType: 'application/json',
        // format of `metadata`
        metadataMimeType: 'message/x.rsocket.routing.v0',
      },
      transport: new RSocketWebSocketClient({
        url: 'ws://localhost:8995/tweetsocket',
      }),
    });

    clientControl[nameOper] = client;
    //this.setState({ client });

    // Open the connection
    clientControl[nameOper].connect().subscribe({
      onComplete: (socket) => {
        // socket provides the rsocket interactions fire/forget, request/response,
        // request/stream, etc as well as methods to close the socket.
        // document.getElementById("author-filter").value
        socket
          .requestStream({
            data: {
              projectSequence: nameOper,
            },
            metadata:
              String.fromCharCode('tweets.by.author'.length) +
              'tweets.by.author',
          })
          .subscribe({
            onComplete: () => console.log('complete'),
            onError: (error) => {
              //console.log(error);
              this.addErrorMessage(
                nameOper,
                'Connection has been closed due to ',
                error,
              );
            },
            onNext: (payload) => {
              //console.log(payload.data);
              this.reloadMessages(payload.data);
            },
            onSubscribe: (subscription) => {
              subscription.request(2147483647);
            },
          });
      },
      onError: (error) => {
        //console.log(error);
        this.addErrorMessage(
          nameOper,
          'Connection has been refused due to ',
          error,
        );
      },
      onSubscribe: (cancel) => {
        /* call cancel() to abort */
      },
    });
  }

  addErrorMessage(nameOper, prefix, error) {
    //console.log(nameOper, prefix);
  }

  // In above method:
  // dataArray: Array to be converted
  // rowIndex: Index of column in array which is to be kept as first column
  // colIndex: Index of column whose values to be converted as columns in the output array.
  // dataIndex: Index of column whose values to be used as data (displayed in tabular/grid format).
  getPivotArray(dataArray, rowIndex, colIndex, dataIndex) {
    //Code from https://techbrij.com
    var result = {},
      ret = [];
    var newCols = [];
    for (var i = 0; i < dataArray.length; i++) {
      if (!result[dataArray[i][rowIndex]]) {
        result[dataArray[i][rowIndex]] = {};
      }
      result[dataArray[i][rowIndex]][dataArray[i][colIndex]] =
        dataArray[i][dataIndex];

      //To get column names
      if (newCols.indexOf(dataArray[i][colIndex]) == -1) {
        newCols.push(dataArray[i][colIndex]);
      }
    }

    newCols.sort();
    var item = [];

    //Add Header Row
    item.push('Item');
    item.push.apply(item, newCols);
    ret.push(item);

    //Add content
    for (var key in result) {
      item = [];
      item.push(key);
      for (var i = 0; i < newCols.length; i++) {
        item.push(result[key][newCols[i]] || '-');
      }
      ret.push(item);
    }
    return ret;
  }

  defineRequestHeaderData(
    arrayReqTrans,
    headerReqOutput,
    requestMounted,
  ) {
    // ####   GET Dynamic the Fields Names
    // headerReqOutput = Object.keys(
    //   Object.values(arrayReqTrans[0])[1][0],
    // );

    // Harded Coded
    headerReqOutput.push('id'); // To Be Hidden
    headerReqOutput.push('orderTest');
    headerReqOutput.push('testCaseName');
    headerReqOutput.push('create_At');
    headerReqOutput.push('lastSeqExecuted');
    headerReqOutput.push('projectSequence');
    headerReqOutput.push('operationName'); // To Be Hidden
    headerReqOutput.push('reqJsonPathField'); // To Be Hidden
    headerReqOutput.push('reqOrder'); // To Be Hidden

    let dynColumns = [];
    // Mounting Dynamic the Request Field and Data
    Object.keys(arrayReqTrans).forEach((key) => {
      //console.log(arrayReqTrans[key].key);
      dynColumns.push({ key: arrayReqTrans[key].key });
      arrayReqTrans[key].value.forEach((sub) => {
        //console.log(sub);

        if (arrayReqTrans[key].key === sub.reqFieldName) {
          const index = requestMounted.findIndex(
            (item) => item.projectSequence === sub.projectSequence,
          );

          if (index > -1) {
            requestMounted[index][sub.reqFieldName] =
              sub.reqFieldValue;
          } else {
            requestMounted.push(sub);
            requestMounted[requestMounted.length - 1][
              sub.reqFieldName
            ] = sub.reqFieldValue;
          }
        }
      });
    });

    dynColumns = dynColumns.sort(function (a, b) {
      if (a.key < b.key) {
        return -1;
      }
      if (a.key > b.key) {
        return 1;
      }
      return 0;
    });

    dynColumns.map((item) => {
      headerReqOutput.push(item.key);
    });

    // Object.keys(arrayReqTrans).forEach((key) => {
    //   arrayReqTrans[key].value.forEach((sub) => {
    //     console.log(sub);
    //     dataReqOutput.push(sub);
    //   });
    // });

    if (requestMounted) {
      requestMounted = requestMounted.sort(
        (a, b) => a.orderTest - b.orderTest,
      );
    }

    requestMounted.map((next, i) => {
      headerReqOutput.map((header) => {
        if (header === next.reqFieldName) {
          //console.log(next.reqFieldName, next.reqFieldValue);
          requestMounted[i][next.reqFieldName] = next.reqFieldValue;
          //return (next.reqFieldName, next.reqFieldValue);
        } else {
          if (header === next.value) {
            //console.log(header, next.reqFieldValue);
            //dataReqOutput.push({ header: next.reqFieldValue });
            //return (header, next.reqFieldValue);
          }
        }
        // if Not is Defined in this Line
        // It Defines as "#X#";
        // To Be CrossOut
        if (!requestMounted[i][header]) {
          requestMounted[i][header] = '#X#';
        }
      });
    });
  }

  defineResponseHeaderData(
    arrayRespTrans,
    headerRespOutput,
    responseMounted,
  ) {
    // ####   GET Dynamic the Fields Names
    // headerRespOutput = Object.keys(
    //   Object.values(arrayRespTrans[0])[1][0],
    // );

    // Harded Coded
    headerRespOutput.push('id'); // To Be Hidden
    headerRespOutput.push('orderTest');
    headerRespOutput.push('testCaseName');
    headerRespOutput.push('create_At');
    headerRespOutput.push('lastSeqExecuted');
    headerRespOutput.push('projectSequence');
    headerRespOutput.push('operationName'); // To Be Hidden
    headerRespOutput.push('respJsonPathField'); // To Be Hidden
    headerRespOutput.push('respOrder'); // To Be Hidden

    let dynColumns = [];
    // Mounting Dynamic the Response Field and Data
    Object.keys(arrayRespTrans).forEach((key) => {
      //console.log(arrayRespTrans[key].key);
      dynColumns.push({ key: arrayRespTrans[key].key });
      arrayRespTrans[key].value.forEach((sub) => {
        //console.log(sub);

        if (arrayRespTrans[key].key === sub.respFieldName) {
          const index = responseMounted.findIndex(
            (item) => item.projectSequence === sub.projectSequence,
          );

          if (index > -1) {
            responseMounted[index][sub.respFieldName] =
              sub.respFieldValue;
          } else {
            responseMounted.push(sub);
            responseMounted[responseMounted.length - 1][
              sub.respFieldName
            ] = sub.respFieldValue;
          }
        }
      });
    });

    dynColumns = dynColumns.sort(function (a, b) {
      if (a.key < b.key) {
        return -1;
      }
      if (a.key > b.key) {
        return 1;
      }
      return 0;
    });

    dynColumns.map((item) => {
      headerRespOutput.push(item.key);
    });

    // Object.keys(arrayRespTrans).forEach((key) => {
    //   arrayRespTrans[key].value.forEach((sub) => {
    //     console.log(sub);
    //     dataRespOutput.push(sub);
    //   });
    // });

    if (responseMounted) {
      responseMounted = responseMounted.sort(
        (a, b) => a.orderTest - b.orderTest,
      );
    }

    responseMounted.map((next, i) => {
      headerRespOutput.map((header) => {
        if (header === next.respFieldName) {
          //console.log(next.respFieldName, next.respFieldValue);
          responseMounted[i][next.respFieldName] =
            next.respFieldValue;
          //return (next.respFieldName, next.respFieldValue);
        } else {
          if (header === next.value) {
            //console.log(header, next.respFieldValue);
            //dataRespOutput.push({ header: next.respFieldValue });
            //return (header, next.respFieldValue);
          }
        }
        // if Not is Defined in this Line
        // It Defines as "#X#";
        // To Be CrossOut
        if (!responseMounted[i][header]) {
          responseMounted[i][header] = '#X#';
        }
      });
    });
  }

  render() {
    const {
      automation_tasks_prop,
      last_requests_prop,
      last_responses_prop,
    } = this.props;

    //console.log('Render');
    //console.log('last_requests_prop', last_requests_prop.length);
    //console.log('last_responses_prop', last_responses_prop.length);

    let allNewResponses = [];

    allNewResponses = last_responses_prop.reduce(function (r, a) {
      r[a.respFieldName] = r[a.respFieldName] || [];
      r[a.respFieldName].push(a);
      return r;
    }, Object.create(null));

    let allNewRequests = [];
    allNewRequests = last_requests_prop.reduce(function (r, a) {
      r[a.reqFieldName] = r[a.reqFieldName] || [];
      r[a.reqFieldName].push(a);
      return r;
    }, Object.create(null));

    //console.log('allNewRequests ', allNewRequests);
    // Tranform Object to Array
    var arrayReqTrans = Object.keys(allNewRequests).map((key) => {
      return {
        key: key,
        value: allNewRequests[key],
      };
    });

    let headerReqOutput = [];
    let requestMounted = [];

    if (arrayReqTrans.length > 0) {
      this.defineRequestHeaderData(
        arrayReqTrans,
        headerReqOutput,
        requestMounted,
      );
    }

    //console.log('allNewResponses ', allNewResponses);
    var arrayRespTrans = Object.keys(allNewResponses).map((key) => {
      return {
        key: key,
        value: allNewResponses[key],
      };
    });

    let headerRespOutput = [];
    let responseMounted = [];

    if (arrayRespTrans.length > 0) {
      this.defineResponseHeaderData(
        arrayRespTrans,
        headerRespOutput,
        responseMounted,
      );
    }

    //dataRespOutput = this.getPivotArray(dataRespOutput, 1, 3, 4);
    // var newCars = cars.reduce(function (r, a) {
    //   r[a.make] = r[a.make] || [];
    //   r[a.make].push(a);
    //   return r;
    // }, Object.create(null));

    // console.log(newCars);
    // // Tranform Object to Array
    // var arrayCarsTrans = Object.keys(newCars).map((key) => {
    //   return {
    //     key: key,
    //     value: newCars[key],
    //   };
    // });

    // headerOutput = Object.keys(
    //   Object.values(arrayCarsTrans[0])[1][0],
    // );

    // Object.keys(newCars).forEach((key) => {
    //   newCars[key].forEach((sub) => {
    //     console.log(sub);
    //     dataOutput.push(sub);
    //   });
    // });

    //console.log('Request headers ', headerReqOutput);
    //console.log('Request Mounted Data ', requestMounted);

    //console.log('Response headers ', headerRespOutput);
    //console.log('Response Mounted Data ', responseMounted);

    // if (allResponses) {
    //   allResponses = allResponses.sort(
    //     (a, b) => a.resp_field_name - b.resp_field_name,
    //   );
    // }

    let RenderReqHeaderGrid;
    let RenderReqDataGrid;
    let RenderRespHeaderGrid;
    let RenderRespDataGrid;
    // let RenderColGrp

    // const renderColGrp = (renderHeaderGrid) => {
    //   //let header = Object.keys(this.state.students[0])
    //   var firstElem = true;
    //   return renderHeaderGrid.map((key, index) => {
    //     if (firstElem) {
    //       firstElem = false;
    //       return <col/>;
    //     }else{
    //       return <col/>;
    //     }
    //   })
    // }

    const renderTableHeader = (header) => {
      //let header = Object.keys(this.state.students[0])
      //let header = Object.keys(firstAutoTask[0]);
      //let header = Object.keys(Object.values(firstAutoTask[0])[1][0]);

      // Object.values(firstAutoTask).forEach((item) => {
      //   console.log(item);
      // });

      return header.map((key, index) => {
        if (
          key != 'projectSequence' &&
          key != 'respOrder' &&
          key != 'respJsonPathField' &&
          key != 'reqOrder' &&
          key != 'reqJsonPathField' &&
          key != 'operationName' &&
          key != 'orderTest' &&
          key != 'id'
        ) {
          if (key === 'testCaseName') {
            return (
              <th key={index} className="test-case-name">
                {pascalCase(key)}
              </th>
            );
            {
              /* <div className="container" style = {{ marginLeft: 15 }}> */
            }
          } else {
            return <th key={index}>{pascalCase(key)}</th>;
          }
        } else {
          return null;
        }
      });

      // ## to Use as Dynamic
      // return header.map((key, index) => {
      //   if (
      //     key != 'projectSequence' &&
      //     key != 'respOrder' &&
      //     key != 'respJsonPathField' &&
      //     key != 'operationName' &&
      //     key != 'id' &&
      //     key != 'testCaseName'
      //   ) {
      //     return (
      //       <th key={index} className="test-case-name">
      //         {pascalCase(key)}
      //       </th>
      //     );
      //   } else {
      //     return null;
      //   }
      // });
    };

    const renderTableData = (allData, allHeaders) => {
      return allData.map((data, index) => {
        return (
          <tr key={index} className="other-cols">
            {allHeaders.map((key) => {
              if (
                key != 'projectSequence' &&
                key != 'respOrder' &&
                key != 'reqOrder' &&
                key != 'respJsonPathField' &&
                key != 'reqJsonPathField' &&
                key != 'operationName' &&
                key != 'orderTest' &&
                key != 'id'
              ) {
                if (key === 'testCaseName') {
                  return (
                    <td
                      className="test-case-name"
                      style={{ width: 100 }}
                    >
                      <div className="fill-td">{data[key]}</div>
                    </td>
                  );
                } else if (key === 'create_At') {
                  return (
                    <td style={{ width: 80 }}>
                      {data[key] && (
                        <>
                          {this.getParsedDate(data[key])}
                          <br />
                          {this.getParsedTime(data[key])}
                        </>
                      )}
                    </td>
                  );
                } else {
                  if (data[key] === '#X#') {
                    return (
                      <td className="td-some-cols background-x"></td>
                    );
                  } else {
                    return (
                      <td className="td-some-cols">{data[key]}</td>
                    );
                  }
                }
              } else {
                return null;
              }
            })}
          </tr>
        );
      });
    };

    RenderReqHeaderGrid = renderTableHeader(headerReqOutput);
    RenderReqDataGrid = renderTableData(
      requestMounted,
      headerReqOutput,
    );

    RenderRespHeaderGrid = renderTableHeader(headerRespOutput);
    RenderRespDataGrid = renderTableData(
      responseMounted,
      headerRespOutput,
    );
    //RenderColGrp = renderColGrp(RenderHeaderGrid);

    return (
      <>
        <FloatingWindow></FloatingWindow>
        <Message
          button_cap="Request Fields"
          header_grid_prop={RenderReqHeaderGrid}
          data_grid_prop={RenderReqDataGrid}
        />
        <hr />
        <Message
          button_cap="Response Fields"
          header_grid_prop={RenderRespHeaderGrid}
          data_grid_prop={RenderRespDataGrid}
        />
        <hr />
      </>
    );
  }
}

export default connect(null, {})(AutomationReqRespBacklog);
