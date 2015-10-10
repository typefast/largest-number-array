function largestOfFour(arr) {
  //empty array of largest numbers
  var largest = [];
  
  for(var i = 0; i < arr.length; i++) {// loop through outer array
    
    for(var j = 0; j < arr[i].length; j++) { //loop through inner array
      // sort each inner array ascending order
      arr[i].sort( function(a, b) { return a - b });
    } 
    //push the highest/last array item to the largest array
    largest.push(arr[i][3]);
  }
  return largest;
  
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
