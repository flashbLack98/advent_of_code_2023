const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const inputInArray = input.split('\n');

const regex = /(one|two|three|four|five|six|seven|eight|nine|\d)/g;
const invertedRegex = /(eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|\d)/g;

function convertStringInNumber(string){
    switch (string) {
        case "one":
            return 1
            break;
        case "two":
            return 2
            break;
        case "three":
            return 3
            break;
        case "four":
            return 4
            break;
        case "five":
            return 5
            break;
        case "six":
            return 6
            break;
        case "seven":
            return 7
            break;
        case "eight":
            return 8
            break;
        case "nine":
            return 9
            break;
        case "zero":
            return 0
            break;
    
        default:
            return string
            break;
    }
}

function convertInvertedStringInNumber(string){
    switch (string) {
        case "eno":
            return 1
            break;
        case "owt":
            return 2
            break;
        case "eerht":
            return 3
            break;
        case "ruof":
            return 4
            break;
        case "evif":
            return 5
            break;
        case "xis":
            return 6
            break;
        case "neves":
            return 7
            break;
        case "thgie":
            return 8
            break;
        case "enin":
            return 9
            break;
        default:
            return string
            break;
    }
}

const mappedInput = inputInArray.map(singleInput => {
    const inputNumbersArray = singleInput.match(regex)
    const reversedString = singleInput.split("").reduce((acc, char) => char + acc, "");
    const invertedInputNumbersArray = reversedString.match(invertedRegex)

    
    const inputNumbersString = `${convertStringInNumber(inputNumbersArray.at(0))}${convertInvertedStringInNumber(invertedInputNumbersArray.at(0))}`
    return +inputNumbersString
})

const output = mappedInput.reduce((previousValue,currentValue) => previousValue + currentValue)

console.log(output);