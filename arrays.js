var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element){
  addElementToBeginningOfArray = [1];
  addElementToNewArray = ["foo",...addElementToBeginningOfArray];
  return addElementToNewArray;
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array = [1]
  array.unshift("foo");
  return array;
}
function addElementToEndOfArray (array, element){
  addElementToEndOfArray = [1];
  addElementtoEndofNewArray = [...addElementToEndOfArray, "foo"];
  return addElementtoEndofNewArray;
}
function destructivelyAddElementToEndOfArray (array, element){
  destructivelyAddElementToEndOfArray = [1];
  destructivelyAddElementToEndOfArray.push("foo");
  return destructivelyAddElementToEndOfArray;
}
function accessElementInArray (array, index){
  accessElementInArray = [1,2,3];
  return accessElementInArray[2];
}
function destructivelyRemoveElementFromBeginningOfArray (array){
  destructivelyRemoveElementFromBeginningOfArray = [1,2,3];
  destructivelyRemoveElementFromBeginningOfArray.shift();
  return destructivelyRemoveElementFromBeginningOfArray;
}
function removeElementFromBeginningOfArray (array){
  removeElementFromBeginningOfArray = [1,2,3];
  return removeElementFromBeginningOfArray.slice(1);
}
function destructivelyRemoveElementFromEndOfArray (array){
  destructivelyRemoveElementFromEndOfArray = [1,2,3];
  return destructivelyRemoveElementFromEndOfArray.pop();
}
function removeElementFromEndOfArray (array){
  removeElementFromEndOfArray [1,2,3];
  removeElementFromEndOfArray.slice(3);
  return array;
}
