var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element){
  const addElementToBeginningOfArray = [1];
  const addElementToNewArray = ["foo",...addElementToBeginningOfArray];
  return array;
}

function destructivelyAddElementToBeginningOfArray (array, element){
  addElementToBeginningOfArray = [1];
  addElementToBeginningOfArray.unshift("foo");
  return array;
}
function addElementToEndOfArray (array, element){
  const addElementToEndOfArray = [1];
  const addElementtoEndofNewArray = [...addElementToEndOfArray, "foo"];
  return array;
}
function destructivelyAddElementToEndOfArray (array, element){
  destructivelyAddElementToEndOfArray = [1];
  destructivelyAddElementToEndOfArray.push("foo");
  return array;
}
