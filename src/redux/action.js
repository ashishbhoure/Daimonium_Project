export const AddData = data => {
  console.log('data is ', data);
  return {type: 'ADDDATA', payload: data};
};
export const CountryCode = code => {
  console.log('code is ', code);
  return {type: 'CODE', payload: code};
};
export const UserInfo = info => {
  console.log('info is ', info);
  return {type: 'INFO', payload: info};
};
export const Balance = value => {
  console.log('value is ', value);
  return {type: 'BALANCE', payload: value};
};
