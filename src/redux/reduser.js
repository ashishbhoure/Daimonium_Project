const initialState = {
  data: {},
  code: {},
  info: {},
  value: {
    local_value: '0.00',
    be_value: '0.00',
    bte_aud_value: '0.00',
  },
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'ADDDATA':
      console.log('state is ', state);
      return {...state, data: action.payload};
    case 'CODE':
      console.log('code is ', state);
      return {...state, code: action.payload};
    case 'INFO':
      console.log('info is ', state);
      return {...state, info: action.payload};
    case 'BALANCE':
      console.log('value is ', state);
      return {...state, value: action.payload};

    default:
      return state;
  }
}
