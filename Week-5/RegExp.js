function replaceOddNumbers(inputString) {
    const oddNumberRegex = /\b(\d+)?[13579]\b/g; 
    const result = inputString.replace(oddNumberRegex, "BEEP");
    return result;
}


const input = "I have 12 cars, 9 of which are 89 years old";
const result = replaceOddNumbers(input);
console.log(result);  // Output: "I have 12 cars, BEEP of which are BEEP years old"
