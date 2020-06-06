import React, { Component } from 'react';
import AutomationTask from './AutomationTasks/AutomationTask';
import CreateButton from '../controlls/CreateButton';
import FloatingWindow from '../controlls/FloatingWindow';
//import DraggableComp from "../controlls/DraggableComp";
import {
  disputeAutomationTask,
  disputeAll_Tasks,
} from '../../actions/backlogActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScrollToBottom from 'react-scroll-to-bottom';
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
//import Message from '../controlls/Message';

let clientControl = {};

class AutomationGridBacklog extends Component {
  //constructor to handle errors
  constructor() {
    super();
    this.state = {
      errors: {},
      projectIdentifier: '',
      projectSequence: '',
      automation_tasks: {},
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
    const { automation_tasks_prop } = this.props;
    this.CloseOpenRSockets(automation_tasks_prop);
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

    return {
      errors: nextProps.errors,
      projectIdentifier: prevState.projectIdentifier,
      automation_tasks:
        nextProps.automation_tasks_prop !== prevState.automation_tasks
          ? nextProps.automation_tasks_prop
          : prevState.automation_tasks,
    };
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

  //Reset Only Act in the fields-Get... File
  // The First file that contains the Expected as Start
  onResetExpectedClick(projectIdentifier, operation_name, tokenTag) {
    // expectedObject[`#ExpectedToken#.${tokenTag}`] = `${fieldName}.${valueResponse}`;
    const expectedObject = {};
    // This It Accepts Multiple Values in the same Line
    // Special Case of its Algorithm
    expectedObject[
      `#ExpectedToken#.${tokenTag}`
    ] = `code.999,status.Gathering Responses,message.Change IT`;

    this.props.disputeAll_Tasks(
      projectIdentifier,
      null,
      operation_name,
      expectedObject,
    );
  }

  onDisputeClick(
    projectIdentifier,
    projectSequence,
    operation_name,
    tokenTag,
    fieldName,
    valueResponse,
  ) {
    // expectedObject[`#ExpectedToken#.${tokenTag}`] = `${fieldName}.${valueResponse}`;
    const expectedObject = {};
    // This It Accepts Multiple Values in the same Line
    // Special Case of its Algorithm
    expectedObject[
      `#ExpectedToken#.${tokenTag}`
    ] = `${fieldName}.${valueResponse}`;

    this.props.disputeAll_Tasks(
      projectIdentifier,
      projectSequence,
      operation_name,
      expectedObject,
    );
  }

  onDisputeAllClick(backlog_id, operation_name) {
    this.props.disputeAll_Tasks(
      backlog_id,
      null,
      operation_name,
      null,
    );
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

  render() {
    const { automation_tasks_prop } = this.props;

    const tasks = automation_tasks_prop.map((automation_task) => (
      <AutomationTask
        key={automation_task.id}
        automation_task={automation_task}
      />
    ));

    //var date = new Date("2016-01-04 10:34:23");
    //var formattedDate = format(date, "MMMM Do, yyyy H:mma");
    //console.log(formattedDate);

    let todoItems = [];
    let inProgressItems = [];
    let doneItems = [];
    let allTestCases = [];

    for (let i = 0; i < tasks.length; i++) {
      allTestCases.push(automation_tasks_prop[i]);
      if (tasks[i].props.automation_task.status === 'IN_HOLD') {
        todoItems.push(tasks[i]);
      }

      if (tasks[i].props.automation_task.status === 'FAILLED') {
        inProgressItems.push(tasks[i]);
      }

      if (tasks[i].props.automation_task.status === 'SUCCESS') {
        doneItems.push(tasks[i]);
      }
    }

    if (allTestCases) {
      allTestCases = allTestCases.sort(
        (a, b) => a.orderTest - b.orderTest,
      );
    }

    let RenderHeaderGrid;
    let RenderDataGrid;
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

    const renderTableHeader = (firstAutoTask) => {
      //let header = Object.keys(this.state.students[0])
      //let header = Object.keys(firstAutoTask[0])

      const { projectIdentifier, operationName } =
        firstAutoTask && firstAutoTask.length > 0
          ? firstAutoTask[0]
          : null;

      let header = [];

      //header.push("bodyResponse");
      header.push('testCaseName');
      //header.push('projectSequence');
      header.push('tokenTag');
      header.push('fieldName');
      header.push('expectedValue');
      header.push('valueResponse');
      header.push('succeeded');
      header.push('priority');
      header.push('dueDate');
      header.push('update_At');
      header.push('In Hold');
      header.push('Failled');
      header.push('Success');
      header.push('Reset-Expected');
      header.push('orderTest');
      header.push('Dispute');

      return header.map((key, index) => {
        if (key !== 'id') {
          if (key === 'testCaseName') {
            return (
              <th key={index} className="test-case-name">
                {pascalCase(key)}
              </th>
            );
          } else if (key === 'Dispute') {
            return (
              <th key={index} className="test-case-name">
                <button
                  className="btn border-dispute-all text-white ml-4"
                  onClick={this.onDisputeAllClick.bind(
                    this,
                    projectIdentifier,
                    operationName,
                  )}
                >
                  Dispute All
                </button>{' '}
              </th>
            );
          } else {
            return <th key={index}>{pascalCase(key)}</th>;
          }
        } else {
          return null;
        }
      });
    };

    const statusPriority = (priority) => {
      //PROJECT IDENTIFIER CHECK
      if (priority === 1) {
        return (
          // <div className="alert alert-danger text-center" role="alert">
          <div className="border border-high text-light">HIGH</div>
        );
      } else if (priority === 2) {
        return (
          // <div className="alert alert-danger text-center" role="alert">
          <div className="border border-medium text-light">
            MEDIUM
          </div>
        );
      }
      if (priority === 3) {
        return (
          // <div className="alert alert-info text-center" role="alert">
          <div className="border border-low text-light">LOW</div>
        );
      }
    };

    // const statusEmpty = (status) => {
    //   return (
    //     // <div className="alert alert-danger text-center" role="alert">
    //     <CreateButton
    //       link="#"
    //       caption="      X      "
    //       cssClass="btn btn-light"
    //     />
    //   );
    // };

    const spanStatusEmpty = (status) => {
      return (
        // <div className="alert alert-danger text-center" role="alert">
        <div className="border border-empty text-light">XXXXXXXX</div>
      );
    };

    const statusAlgorithm = (status) => {
      //PROJECT IDENTIFIER CHECK
      if (status === 'IN_HOLD') {
        return (
          // <div className="alert alert-danger text-center" role="alert">
          <CreateButton
            link="#"
            caption={status}
            cssClass="btn btn-in-hold-task text-white ml-4"
          />
        );
      } else if (status === 'FAILLED') {
        return (
          // <div className="alert alert-danger text-center" role="alert">
          <CreateButton
            link="#"
            caption={status}
            cssClass="btn btn-failled-task text-white ml-4"
          />
        );
      }
      if (status === 'SUCCESS') {
        return (
          // <div className="alert alert-info text-center" role="alert">
          <CreateButton
            link="#"
            caption={status}
            cssClass="btn btn-success-task text-white ml-4"
          />
        );
      } else {
        return (
          // <div className="alert alert-info text-center" role="alert">
          // <div className="alert alert-danger text-center" role="alert">
          <td>
            <CreateButton
              link="#"
              caption="      X      "
              cssClass="btn btn-light"
            />
          </td>
        );
      }
    };

    const renderTableData = (allCases) => {
      //return this.state.students.map((student, index) => {

      /* <div className="container" style = {{ marginLeft: 15 }}> */

      return allCases.map((testCases, index) => {
        const {
          id,
          projectIdentifier,
          projectSequence,
          status,
          priority,
          dueDate,
          testCaseName,
          //bodyResponse,
          update_At,
          operationName,
          tokenTag,
          fieldName,
          expectedValue,
          valueResponse,
          orderTest,
          succeeded,
        } = testCases; //destructuring
        return (
          <tr key={id} className="other-cols">
            <td className="test-case-name">
              <div className="fill-td">{testCaseName}</div>
            </td>
            {/* <td>{projectSequence}</td> */}
            <td className="test-case-name">
              <div className="fill-td">{tokenTag}</div>
            </td>
            <td>{fieldName}</td>
            <td>{expectedValue}</td>
            <td>{valueResponse}</td>
            <td>{(!succeeded && 'NO') || 'Yes'}</td>
            <td className="td-some-cols">
              <div className="fill-center">
                {statusPriority(priority)}
              </div>
            </td>
            <td>{dueDate}</td>
            <td style={{ width: 80 }}>
              {update_At && (
                <>
                  {this.getParsedDate(update_At)}
                  <br />
                  {this.getParsedTime(update_At)}
                </>
              )}
            </td>
            <td className="td-some-cols">
              {(status === 'IN_HOLD' && statusAlgorithm(status)) ||
                spanStatusEmpty()}
            </td>
            <td className="td-some-cols">
              {(status === 'FAILLED' && statusAlgorithm(status)) ||
                spanStatusEmpty()}
            </td>
            <td className="td-some-cols">
              {(status === 'SUCCESS' && statusAlgorithm(status)) ||
                spanStatusEmpty()}
            </td>
            <td>
              <button
                className="btn btn-warning ml-4"
                onClick={this.onResetExpectedClick.bind(
                  this,
                  projectIdentifier,
                  operationName,
                  tokenTag,
                )}
              >
                Reset
              </button>
            </td>
            <td>{orderTest}</td>
            <td>
              <button
                className="btn btn-info ml-4"
                onClick={this.onDisputeClick.bind(
                  this,
                  projectIdentifier,
                  projectSequence,
                  operationName,
                  tokenTag,
                  fieldName,
                  valueResponse,
                )}
              >
                Dispute
              </button>
            </td>
          </tr>
        );
      });
    };

    RenderHeaderGrid = renderTableHeader(allTestCases);
    RenderDataGrid = renderTableData(allTestCases);
    //RenderColGrp = renderColGrp(RenderHeaderGrid);

    return (
      <>
        <FloatingWindow></FloatingWindow>
        <ScrollToBottom>
          <table id="automation" className="fixed">
            {/* <colgroup>
                  {RenderColGrp}             
               </colgroup> */}
            <thead>
              <tr>{RenderHeaderGrid}</tr>
            </thead>
            <tbody>{RenderDataGrid}</tbody>
            <tfoot>
              <tr>{RenderHeaderGrid}</tr>
            </tfoot>
          </table>
        </ScrollToBottom>
      </>
    );
  }
}

AutomationGridBacklog.propTypes = {
  disputeAutomationTask: PropTypes.func.isRequired,
  disputeAll_Tasks: PropTypes.func.isRequired,
};
export default connect(null, {
  disputeAutomationTask,
  disputeAll_Tasks,
})(AutomationGridBacklog);
