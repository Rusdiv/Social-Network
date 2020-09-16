export const requiredField = value => {
  if (value)   return undefined;
  return 'Field is required';
}



export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength ) {
    return `max length ${maxLength} symbols`;
  } 
  return undefined;
}