var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray (array) {
newArray = ['foo', ...array];
  console.log (addElementToBeginningOfArray)
  console.log (newArray)
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array) {
newArray.push("foo");
  console.log (destructivelyAddElementToBeginningOfArray)
  return newArray;
}


