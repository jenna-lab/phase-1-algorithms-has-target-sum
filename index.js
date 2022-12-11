function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    //n steps
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      //n * n steps
      if (array[j] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function 
  Runtime:0(n^2)
  Space:0(n)
*/

/* 
  Add your pseudocode here
  hasTargetSum([22, 19, 4, 6, 30], 25));
  iterate through each number in the array
  for the current num identify a compliment
  that adds to the target(comp= target - num)
  iterate through the rest of the array
  check if any num is our comp,if so return true else return false
  

*/

/*
  Add written explanation of your solution here
  make a function hasTargetSum that checks if 2 numbers from an array 
  add up to some target...if  have an array [1,2,3,4] and target sum is `6`
  return true because 2 and 4 add up to 6.for each number checks if there s 
  another number that adds up to the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


// //more practise with Runtime 0(n)
// function hasTargetSum(array,target){
//   const seenNumbers ={}
//     for (const number of array){
//       //n steps
//       const complement = target - numberif (complement in seenNumbers)
//       return true
//       seenNumbers[number] = true
//     }
//     return false
//   }
