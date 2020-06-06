import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AutomationReqRespBacklog from './AutomationReqRespBacklog';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getAllOperationByBackLog,
  getAutomationTaskByOperation,
  getLastRequestsExecByOper,
  getLastResponsesExecByOper,
} from '../../actions/backlogActions';
import '../AutomationBoard/css/grid_automation.css';
import Select from 'react-select';
import {
  // camelCase,
  capitalCase,
  //  constantCase,
  //  dotCase,
  //  headerCase,
  //  noCase,
  //  paramCase,
  //  pascalCase,
  //  pathCase,
  //  sentenceCase,
  //  snakeCase
} from 'change-case';

// var array = [
//   { id: 1, name: 'test1' },
//   { id: 2, name: 'test2' },
//   { id: 3, name: 'test3' },
//   { id: 4, name: 'test4' },
// ];
// var anotherOne = [
//   { id: 2, name: 'test2' },
//   { id: 4, name: 'test4' },
// ];

// var filteredArray = array.filter(function (array_el) {
//   return (
//     anotherOne.filter(function (anotherOne_el) {
//       return anotherOne_el.id == array_el.id;
//     }).length == 0
//   );
// });

// console.log(filteredArray);

class AutomationReqRespBoard extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      projectIdentifier: '',
      projectSequence: '',
      selectedOption: {},
      selectedTestCase: [],
      all_operations: [],
      all_test_cases: [],
      last_requests: [],
      last_responses: [],
      count: 25,
    };
  }

  onReloadDataClick(backlog_id, operationName) {
    this.props.getAutomationTaskByOperation(
      backlog_id,
      operationName,
    );
    //this.props.getLastRequestsExecByOper(backlog_id, operationName);
    //this.props.getLastResponsesExecByOper(backlog_id, operationName);
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption),
    );
    this.props.getAutomationTaskByOperation(
      this.state.projectIdentifier,
      selectedOption.value,
    );
    localStorage.setItem(
      'selectedOption',
      JSON.stringify(selectedOption),
    );
    this.props.getLastRequestsExecByOper(
      this.state.projectIdentifier,
      selectedOption.value,
    );
    this.props.getLastResponsesExecByOper(
      this.state.projectIdentifier,
      selectedOption.value,
    );
    //this.handleStartRefresh();
  };

  handleChangeTestCase = (selectedTestCase) => {
    this.setState({ selectedTestCase }, () =>
      console.log(`Test Case selected:`, this.state.selectedTestCase),
    );
    // this.props.getLastRequestsExecByOper(
    //   this.state.projectSequence,
    //   selectedTestCase.value,
    // );
    // this.props.getLastResponsesExecByOper(
    //   this.state.projectSequence,
    //   selectedTestCase.value,
    // );
    localStorage.setItem(
      'selectedTestCase',
      JSON.stringify(selectedTestCase),
    );
    //this.handleStartRefresh();
  };

  componentDidMount() {
    const { id, projectSequence } = this.props.match.params;
    this.setState({
      projectIdentifier: id,
      projectSequence: projectSequence,
    });

    this.props.getAllOperationByBackLog(id);

    //this.handleStartRefresh();

    //this.props.getBacklogAutomationTask(id);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    const selectedOptionLocal = JSON.parse(
      localStorage.getItem('selectedOption'),
    );

    return {
      errors: nextProps.errors,
      projectIdentifier: prevState.projectIdentifier,
      projectSequence: prevState.projectSequence,
      selectedOption:
        selectedOptionLocal !== prevState.selectedOption
          ? selectedOptionLocal
          : prevState.selectedOption,
      all_operations:
        nextProps.backlog.all_operations !== prevState.all_operations
          ? nextProps.backlog.all_operations
          : prevState.all_operations,
      all_test_cases:
        nextProps.backlog.all_test_cases !== prevState.all_test_cases
          ? nextProps.backlog.all_test_cases
          : prevState.all_test_cases,
      last_requests:
        nextProps.backlog.selectedTestCase &&
        prevState.selectedTestCase &&
        prevState.selectedTestCase.length > 0 &&
        nextProps.backlog.selectedTestCase !==
          prevState.selectedTestCase
          ? nextProps.backlog.last_requests.filter((next) => {
              return (
                prevState.selectedTestCase.filter((prev) => {
                  return prev.value === next.projectSequence;
                }).length === 1
              );
            })
          : nextProps.backlog.last_requests,
      last_responses:
        nextProps.backlog.selectedTestCase &&
        prevState.selectedTestCase &&
        prevState.selectedTestCase.length > 0 &&
        nextProps.backlog.selectedTestCase !==
          prevState.selectedTestCase
          ? nextProps.backlog.last_responses.filter(function (next) {
              return (
                prevState.selectedTestCase.filter(function (prev) {
                  return prev.value === next.projectSequence;
                }).length === 1
              );
            })
          : nextProps.backlog.last_responses,
    };
  }

  render() {
    const { id } = this.props.match.params;
    const { automation_tasks, all_operations } = this.props.backlog;
    const { errors } = this.state;

    let BoardContent;

    let { all_test_cases } = this.props.backlog;
    all_test_cases =
      all_test_cases.length == 0 ? null : all_test_cases;

    const boardAlgorithm = (errors, project_tasks) => {
      if (project_tasks.length < 1) {
        //PROJECT IDENTIFIER CHECK
        if (errors.projectNotFound) {
          return (
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="alert alert-danger text-center"
                    role="alert"
                  >
                    {errors.projectNotFound}
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (errors.projectIdentifier) {
          return (
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="alert alert-danger text-center"
                    role="alert"
                  >
                    {errors.projectIdentifier}
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="alert alert-info text-center"
                    role="alert"
                  >
                    No Automation Tasks on this board
                  </div>
                </div>
              </div>
            </div>
          );
        }
      } else {
        console.log(this.state.last_requests);
        console.log(this.state.last_responses);
        return (
          <AutomationReqRespBacklog
            automation_tasks_prop={automation_tasks}
            last_requests_prop={this.state.last_requests}
            last_responses_prop={this.state.last_responses}
          />
        );
      }
    };

    BoardContent = boardAlgorithm(errors, automation_tasks);

    let allTestCases = [];
    for (let i = 0; i < automation_tasks.length; i++) {
      //allTestCases.push(automation_tasks[i].props.automation_task);
      allTestCases.push(automation_tasks[i]);
    }

    BoardContent = boardAlgorithm(errors, automation_tasks);

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Link
                to={`/addAutomationTask/${id}`}
                className="btn border-create-test  text-white ml-4"
              >
                <i className="fas fa-plus-circle">
                  {' '}
                  Create Test Case
                </i>
              </Link>
            </div>
            <div className="col-md-4">
              <Link
                to={`/automationBoard/${id}`}
                className="btn border-auto-board text-white ml-4"
              >
                <i className="fas fa-plus-circle">
                  {' '}
                  Automation Board{' '}
                </i>
              </Link>
            </div>
            <div className="col-md-4">
              <Link
                to={`/automationGridBoard/${id}`}
                className="btn border-grid-backlog text-white ml-4"
              >
                <i className="fas fa-plus-circle">
                  {' '}
                  Automation Grid{' '}
                </i>
              </Link>
            </div>
          </div>
          <br />
          <hr />
          <h1 id="title">
            {automation_tasks.length > 0 &&
              automation_tasks[0].projectIdentifier}
          </h1>
          <hr />
          {automation_tasks.length > 0 && (
            <>
              <div id="operation">Operation Selected:</div>

              <div id="operation">
                {/* <button type="button" class="btn btn-outline-primary">{camelCase(automation_tasks[0].operationName)}</button> */}
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={this.onReloadDataClick.bind(
                    this,
                    automation_tasks[0].projectIdentifier,
                    automation_tasks[0].operationName,
                  )}
                >
                  {capitalCase(automation_tasks[0].operationName)}
                </button>
              </div>
            </>
          )}
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <h6>Operation / Resource :</h6>
                  <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={all_operations}
                    clearable={true}
                  />
                  {errors.selectedOption && (
                    <div
                      style={{
                        width: '100%',
                        marginTop: '.25rem',
                        fontSize: '80%',
                        color: '#dc3545',
                      }}
                    >
                      {errors.selectedOption}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <h6>Test Cases :</h6>
                  <Select
                    value={this.state.selectedTestCase}
                    onChange={this.handleChangeTestCase}
                    options={all_test_cases}
                    clearable={true}
                    isMulti={
                      all_test_cases && all_test_cases.length > 0
                    }
                    isDisabled={all_test_cases == null ? true : false}
                  />
                  {errors.selectedTestCase && (
                    <div
                      style={{
                        width: '100%',
                        marginTop: '.25rem',
                        fontSize: '80%',
                        color: '#dc3545',
                      }}
                    >
                      {errors.selectedTestCase}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {BoardContent}
      </>
    );
  }
}

AutomationReqRespBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getAllOperationByBackLog: PropTypes.func.isRequired,
  getAutomationTaskByOperation: PropTypes.func.isRequired,
  getLastRequestsExecByOper: PropTypes.func.isRequired,
  getLastResponsesExecByOper: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  backlog: state.backlog,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  getAllOperationByBackLog,
  getAutomationTaskByOperation,
  getLastRequestsExecByOper,
  getLastResponsesExecByOper,
})(AutomationReqRespBoard);
