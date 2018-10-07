import { JUST_FOR_EXAMPLE_ACTION } from '../../actions/temp/index';

const initState = {
  here: 'here',
  will: 'will',
  be: 'be',
  data: 'data',
};

const temp = (state = initState, action) => {
  if (action.type === JUST_FOR_EXAMPLE_ACTION) {
    /* Action handling. */
    return action.payload;
  }

  return state;
};

export default temp;
