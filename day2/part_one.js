const INPUT = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const bagQuantity = '12 red cubes, 13 green cubes, and 14 blue cubes';

const bagQuantityObject = {
    'red': 12,
    'green': 13,
    'blue': 14
};

const arrayGames = INPUT.split('\n').map(el => {


    return (el.substring(el.indexOf(":") + 1).split(';'));
});

const formattedArrayGames = arrayGames.map(game => {

    const setsArray = [];

    game.forEach(set => {
        const setObject = {
            'red': 0,
            'green': 0,
            'blue': 0
        };

        const colorCubes = set.split(",");

        colorCubes.forEach(color => {
            const cubesColor = color.split(" ")[2];
            const cubesQuantity = color.split(" ")[1];

            setObject[cubesColor] = cubesQuantity;
        });
        setsArray.push(setObject);
    });

    return setsArray;
});



const idsArray = [];

formattedArrayGames.forEach((game, index) => {
    const wrongIdsArrayPerGame = [];
    game.forEach((set) => {
        if (set.red <= bagQuantityObject.red && set.blue <= bagQuantityObject.blue && set.green <= bagQuantityObject.green) {
            wrongIdsArrayPerGame.push(index + 1);
        } else {
            wrongIdsArrayPerGame.push(0);
        }
    });

    if (!wrongIdsArrayPerGame.includes(0)) {
        idsArray.push(index + 1);
    }

});

const sumOfAllIds = idsArray.reduce((previousValue, currentValue) => previousValue + currentValue);

console.log(sumOfAllIds);

