const input = `1threegkhpq7nfrksvm69nxpvgvthfzoneighttc`;

const inputInArray = input.split('\n');

const regex = /(one|two|three|four|five|six|seven|eight|nine|zero|\d)/g;

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

const mappedInput = inputInArray.map(singleInput => {
    const inputNumbersArray = singleInput.match(regex)
    const inputNumbersString = `${convertStringInNumber(inputNumbersArray.at(0))}${convertStringInNumber(inputNumbersArray.at(-1))}`
    console.log(inputNumbersString);
    return +inputNumbersString
})

const output = mappedInput.reduce((previousValue,currentValue) => previousValue + currentValue)

console.log(output);