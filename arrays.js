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
function accessElementInArray (array, index){
  accessElementInArray = [1,2,3];
  return accessElementInArray[2];
}
function destructivelyRemoveElementFromBeginningOfArray (array){
  destructivelyRemoveElementFromBeginningOfArray = [1,2,3];
  destructivelyRemoveElementFromBeginningOfArray.shift();
  return array;
}
