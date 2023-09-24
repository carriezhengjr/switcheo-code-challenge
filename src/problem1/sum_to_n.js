/**
 * Uses recursion to solve the sum to n.
 * @param {integer} n Any integer.
 * @returns {integer} The summation of integers from 1 to n (inclusive).
 */
var sum_to_n_a = function(n) {
  if (n <= 0) {
    return 0;
  }
  return n + sum_to_n_a(n-1);
};

/**
 * Uses an iterative approach to solve the sum to n.
 * @param {integer} n Any integer.
 * @returns {integer} The summation of integers from 1 to n (inclusive).
 */
var sum_to_n_b = function(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

/**
 * Uses sum of an arithmetic series to solve the sum to n.
 * @param {integer} n Any integer.
 * @returns {integer} The summation of integers from 1 to n (inclusive).
 */
var sum_to_n_c = function(n) {
  if (n <= 0) {
    return 0;
  }
  return n * (n + 1) / 2;
};

/*
// Testcases
// Uncomment this code snippet. 
// In the directory /src/problem1, run the file using `node sum_to_n.js`.
function test_sum_to_n(func) {
  const testCases = [
    { n : -100, expected: 0},
    { n : -2, expected: 0},
    { n : -1, expected: 0},
    { n: 0, expected: 0 }, 
    { n: 1, expected: 1 }, 
    { n: 5, expected: 15 }, 
    { n: 11, expected: 66 },
    { n: 100, expected: 5050 },
    { n: 1000, expected: 500500 },
  ];

  for (let i = 0; i < testCases.length; i++) {
    const { n, expected } = testCases[i];
    const actual = func(n);
    console.log("Test case " + (i + 1) + ": " + (actual === expected ? "Passed" : "Failed"));
  }
  console.log();
}

test_sum_to_n(sum_to_n_a);
test_sum_to_n(sum_to_n_b);
test_sum_to_n(sum_to_n_c);
*/
