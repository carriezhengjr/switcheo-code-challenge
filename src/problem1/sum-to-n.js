/**
 * Uses sum to n terms of an arithmetic series.
 * 
 * Calculates the summation of integers from 1 to n (inclusive) using the formula [n(n+1)] / 2.
 *
 * @param {number} n The limit of the range of integers to be summed.
 * 
 * @returns {number} The summation of integers from 1 to n (inclusive) if n is positive; 0 if n is negative or is zero.
 */
var sum_to_n_a = function(n) {
    if (n <= 0) {
        return 0;
    }
    return (n * (n + 1)) / 2;
};

/**
 * Uses a counter and a loop.
 * 
 * Calculates the summation of integers from 1 to n (inclusive) using a counter variable and a loop.
 * 
 * @param {number} n The limit of the range of integers to be summed.
 * 
 * @returns {number} The summation of integers from 1 to n (inclusive); 0 if n is negative or is zero.
 */
var sum_to_n_b = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
};

/**
 * Uses recursion.
 * 
 * Calculates the summation of integers from 1 to n (inclusive) using recursion with a base case.
 * 
 * @param {number} n The limit of the range of integers to be summed.
 * 
 * @returns {number} The summation of integers from 1 to n (inclusive); 0 if n is negative or is zero.
 */
var sum_to_n_c = function(n) {
    if (n <= 0) {
        return 0;

    } else if (n === 1) {
        return 1;

    } else {
        return n + sum_to_n_c(n - 1);
    }
};

/*
// Tests the sum_to_n functions by running the file using `node sum_to_n.js` in Terminal.
function test_sum_to_n(func) {
    const testCases = [
        { n : -2, expected: 0},
        { n : -1, expected: 0},
        { n: 0, expected: 0 }, 
        { n: 1, expected: 1 }, 
        { n: 5, expected: 15 }, 
        { n: 11, expected: 66 }
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
