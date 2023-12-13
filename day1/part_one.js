const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const inputInArray = input.split('\n');

const regex = /\d/g;

const mappedInput = inputInArray.map(singleInput => {
    const inputNumbersArray = singleInput.match(regex)
    const inputNumbersString = `${inputNumbersArray.at(0)}${inputNumbersArray.at(-1)}`
    return +inputNumbersString
})

const output = mappedInput.reduce((previousValue,currentValue) => previousValue + currentValue)

console.log(output);