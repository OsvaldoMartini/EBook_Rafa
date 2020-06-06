import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AutomationBacklog from './AutomationBacklog';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getAllOperationByBackLog,
  getAutomationTaskByOperation,
} from '../../actions/backlogActions';
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

const prices = [961.7442, 8963.1259, 8961.5466, 8959.3715, 8954.2278];
const normalised_prices = [
  12.40342549423265,
  12.111408873991664,
  12.445187442672605,
  12.904885894352674,
  13.991985763740644,
];

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class AutomationBoard extends Component {
  //constructor to handle errors
  constructor() {
    super();
    this.state = {
      errors: {},
      projectIdentifier: '',
      selectedOption: {},
      all_operations: {},
      count: 25,
    };
    //var intervalLoop = null;
    this.handleStartRefresh = this.handleStartRefresh.bind(this);
  }

  handleStartRefresh() {
    if (this.state.selectedOption != null) {
      this.intervalLoop = setInterval(
        () =>
          this.setState((prevState) => {
            //if (prevState.count === 0) return null;
            this.props.getAutomationTaskByOperation(
              this.state.projectIdentifier,
              this.state.selectedOption.value,
            );
            console.log(
              'Refreshing Task for: ' +
                this.state.selectedOption.value,
            );
            //console.log(prevState.count);
            //return {
            //    count: prevState.count - 1,
            //};
          }),
        2000,
      );
    }
  }

  // need to cleanup the timeinterval whenever we destroy the component
  // componentWillUnmount() {
  //   clearInterval(this.intervalLoop);
  // }

  onReloadDataClick(backlog_id, operationName) {
    this.props.getAutomationTaskByOperation(
      backlog_id,
      operationName,
    );
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
    //this.handleStartRefresh();
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ projectIdentifier: id });
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
      selectedOption:
        selectedOptionLocal !== prevState.selectedOption
          ? selectedOptionLocal
          : prevState.selectedOption,
      all_operations:
        nextProps.backlog.all_operations !== prevState.all_operations
          ? nextProps.backlog.all_operations
          : prevState.all_operations,
    };
  }

  render() {
    const { id } = this.props.match.params;
    const { automation_tasks, all_operations } = this.props.backlog;
    const { errors } = this.state;

    let BoardContent;

    const boardAlgorithm = (errors, project_tasks) => {
      if (project_tasks.length < 1) {
        //PROJECT IDENTIFIER CHECK
        if (errors.projectNotFound) {
          return (
            <div
              className="alert alert-danger text-center"
              role="alert"
            >
              {errors.projectNotFound}
            </div>
          );
        } else if (errors.projectIdentifier) {
          return (
            <div
              className="alert alert-danger text-center"
              role="alert"
            >
              {errors.projectIdentifier}
            </div>
          );
        } else {
          return (
            <div
              className="alert alert-info text-center"
              role="alert"
            >
              No Automation Tasks on this board
            </div>
          );
        }
      } else {
        return (
          <AutomationBacklog
            automation_tasks_prop={automation_tasks}
          />
        );
      }
    };

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
                to={`/automationGridBoard/${id}`}
                className="btn border-grid-backlog text-white ml-4"
              >
                <i className="fas fa-plus-circle">
                  {' '}
                  Automation Grid{' '}
                </i>
              </Link>
            </div>
            <div className="col-md-4">
              <Link
                to={`/AutomationReqRespBoard/${id}`}
                className="btn border-req-resp text-white ml-4"
              >
                <i className="fas fa-plus-circle">
                  {' '}
                  Request / Response{' '}
                </i>
              </Link>
            </div>{' '}
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
                {/* <button type="button" class="btn btn-outline-primary">{constantCase(automation_tasks[0].operationName)}</button> */}
                {/* <button type="button" class="btn btn-outline-primary">{dotCase(automation_tasks[0].operationName)}</button> */}
                {/* <button type="button" class="btn btn-outline-primary">{headerCase(automation_tasks[0].operationName)}</button> */}
                {/* <button type="button" class="btn btn-outline-primary">{noCase(automation_tasks[0].operationName)}</button> */}
                {/* <button type="button" class="btn btn-outline-primary">{paramCase(automation_tasks[0].operationName)}</button> */}
                {/* <button type="button" class="btn btn-outline-primary">{pascalCase(automation_tasks[0].operationName)}</button> */}
                {/* <button type="button" class="btn btn-outline-primary">{pathCase(automation_tasks[0].operationName)}</button> */}
                {/* <button type="button" class="btn btn-outline-primary">{sentenceCase(automation_tasks[0].operationName)}</button> */}
                {/* <button type="button" class="btn btn-outline-primary">{snakeCase(automation_tasks[0].operationName)}</button> */}
              </div>
            </>
          )}
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
          {BoardContent}
        </div>
      </>
    );
  }
}

AutomationBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getAllOperationByBackLog: PropTypes.func.isRequired,
  getAutomationTaskByOperation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  backlog: state.backlog,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  getAllOperationByBackLog,
  getAutomationTaskByOperation,
})(AutomationBoard);
