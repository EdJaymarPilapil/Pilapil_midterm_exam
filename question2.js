function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

// Test case
console.log(sumArray([1, 2, 3, 4, 5])); // Should output: 15