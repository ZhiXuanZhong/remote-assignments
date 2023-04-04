/*
Assignment 1: Function and Array
Complete the function below to find the max number of the passing array of numbers.
*/

function max(numbers) {
  if (!Array.isArray(numbers)) {
    //only array is accepted
    return "Please pass an array as an argument";
  } else {
    return numbers
      .filter((num) => typeof num === "number") //only number is accepted
      .reduce((acc, cur) => (acc > cur ? acc : cur)); // store maximum value in acc
  }
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7

/*
Assignment 2: Function and Object
Complete the function below to calculate the result of the passing object.
*/

function calculate(args) {
  if (args.op === "+") {
    return args.n1 + args.n2;
  }

  if (args.op === "-") {
    return args.n1 - args.n2;
  }

  return "Not supported";
}
console.log(calculate({ n1: 2, n2: 3, op: "+" })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: "-" })); // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: "x" })); // expected output: 'Not supported'

/*
Assignment 3: Function, Array, and Object
Complete the function below to calculate the total price of all products after applying a discount.
*/

function calculate(data) {
  const { discount, products } = data;

  return products
  .reduce((sum, item) => sum + item.price * (1 - discount), 0);
}

const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});
console.log(discountedPrice); // show the total price of all products after applying a discount

/*
Assignment 5: Algorithm (Advanced Optional)
Given an array of integers, return indices of the two numbers such that they add up to a specific target. 
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

function twoSum(nums, target) {
  let result = [];  // expected output an array

  for (let i = 0; i < nums.length; i++) {
    let pair = target - nums[i];  //The difference between current num and target is what we're looking for, call it pair

    if (nums.indexOf(pair) !== i && nums.indexOf(pair) !== -1) {  // If pair not current num itself but present in array, FOUND!
      result.push(i, nums.indexOf(pair));
      return result;
    }

    return 'Not Found'
  }
}

twoSum([2, 7, 11, 15], 9);
