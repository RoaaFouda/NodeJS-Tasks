// Use object and array destructing to get the values: "Zamalek" and "4th". Your solution should be 2 lines of code maximum.

const user = {
    name: "Ashraf Ben Sharqy",
    age: 29,
    teams: ["Wydad", "Al Hilal", "Zamalek", "Al Gazira", "Al-Rayyan"],
    nationalTeam: {
        name: "Morroco",
        best: {
            africanCupOfNations: ["Champion", 2018],
            worldCup: ["4th", 2022],
        }
    }
}

const [,,word, ...rest] = user.teams;
const [word2] = user.nationalTeam.best.worldCup;
console.log(word, word2);



// Use the spread operator to create a new object fantasyPlayer, which has the score set to 50 and has a position attribute set to "ST". Make sure the original object remains unchanged.

const Player = {
    name: "Samir Kamona",
    club: "Al Ahly",
    score: 25
}

const fantasyPlayer = {...Player, score:50, position:'ST'};
console.log(fantasyPlayer, Player);


// Write a function that takes an array of items, filters all elements starting with hand and ending with s or y or le (case insensitive). There may be other characters in between.

const regexp = /^hand(.+)?(s|y|le)$/i;
const arr = ['handOn', 'hands', 'hanDLes', 'Handcuffs', 'handmade', 'in-hands', 'HANDINGLY'];
const newArray = arr.filter(element => regexp.test(element));
console.log(newArray);