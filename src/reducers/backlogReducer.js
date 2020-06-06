import {
  GET_BACKLOG_PROJECT_TASK,
  GET_PROJECT_TASK,
  DELETE_PROJECT_TASK,
  GET_BACKLOG_AUTOMATION_TASK,
  GET_AUTOMATION_TASK,
  DELETE_AUTOMATION_TASK,
  GET_AUTOMATION_ALL_OPERATIONS,
  GET_AUTOMATION_BY_OPERATIONS,
  GET_LAST_REQUESTS_BY_OPERATIONS,
  GET_LAST_RESPONSES_BY_OPERATIONS,
  CHANGE_QUOTE,
  UPDATE_STATUS_RSOCKET,
} from '../actions/types';

const initialState = {
  project_tasks: [],
  project_task: {},
  automation_tasks: [],
  automation_task: {},
  selectedTestCase: [],
  last_requests: [],
  last_responses: [],
  all_operations: [],
  all_test_cases: [],
  currentQuoteIndex: 0,
  quote: null,
};

const quotes = [
  'It’s not who I am underneath, but what I do that defines me.',
  'Everything’s impossible until somebody does it.',
  'Why do we fall? So that we can learn to pick ourselves back up.',
  'Our greatest glory is not in ever falling, but in rising every time we fall.',
  'If you kill a killer, the number of killers in the room remains the same.',
  'Sometimes the truth isn’t good enough, sometimes people need more.',
  'A hero can be anyone, even a man doing something as simple as reassuring putting a coat on a young boy’s shoulders.',
];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BACKLOG_PROJECT_TASK:
      return {
        ...state,
        project_tasks: action.payload,
      };

    case GET_PROJECT_TASK:
      return {
        ...state,
        project_task: action.payload,
      };

    case DELETE_PROJECT_TASK:
      return {
        ...state,
        project_tasks: state.project_tasks.filter(
          (project_task) =>
            project_task.projectSequence !== action.payload,
        ),
      };

    case GET_BACKLOG_AUTOMATION_TASK:
      return {
        ...state,
        automation_tasks: action.payload,
      };

    case GET_AUTOMATION_TASK:
      return {
        ...state,
        automation_task: action.payload,
      };

    case DELETE_AUTOMATION_TASK:
      return {
        ...state,
        automation_tasks: state.automation_tasks.filter(
          (automation_task) =>
            automation_task.projectSequence !== action.payload,
        ),
      };

    case UPDATE_STATUS_RSOCKET:
      // For Here I will Update Only the Status
      // For the AutomationBackLog
      return {
        ...state,
        automation_tasks: state.automation_tasks.map(
          (automation_task, i) =>
            automation_task.projectSequence ===
              action.payload.projectSequence &&
            automation_task.status !== action.payload.status
              ? { ...automation_task, status: action.payload.status }
              : automation_task,
        ),
      };

    case GET_AUTOMATION_ALL_OPERATIONS:
      return {
        ...state,
        all_operations: action.payload.map((key) => {
          return { value: key[0], label: key[1] };
        }),
      };

    case GET_AUTOMATION_BY_OPERATIONS:
      return {
        ...state,
        automation_tasks: action.payload,
        all_test_cases: action.payload.map((key) => {
          return {
            value: key.projectSequence,
            label: key.summary,
          };
        }),
      };

    case GET_LAST_REQUESTS_BY_OPERATIONS:
      return {
        ...state,
        last_requests: action.payload,
      };

    case GET_LAST_RESPONSES_BY_OPERATIONS:
      return {
        ...state,
        last_responses: action.payload,
      };

    case CHANGE_QUOTE:
      let currentQuoteIndex = state.currentQuoteIndex + 1;
      currentQuoteIndex =
        currentQuoteIndex === quotes.length ? 0 : currentQuoteIndex;
      return {
        currentQuoteIndex,
        quote: quotes[currentQuoteIndex],
      };

    default:
      return state;
  }
}
