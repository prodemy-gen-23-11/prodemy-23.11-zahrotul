const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let char = [
    {
        name: "klee",
        vision: "pyro",
        residence: "mondstadt",
    },
    {
        name: "xiao",
        vision: "anemo",
        residence: "liyue",
    },
    {
        name: "kokomi",
        vision: "hydro",
        residence: "inazuma",
    },
    {
        name: "al haitham",
        vision: "dendro",
        residence: "sumeru",
    },
    {
        name: "eula",
        vision: "cryo",
        residence: "mondstadt",
    },
    {
        name: "navia",
        vision: "geo",
        residence: "fontaine",
    },
    {
        name: "eula",
        vision: "cryo",
        residence: "mondstadt",
    },
    {
        name: "keqing",
        vision: "electro",
        residence: "liyue",
    },
];

rl.question("Mau ganti siapa ? ", function(nama) {
    rl.question("Mau ganti apa ? ", function(ganti) {
        rl.question("Ganti jadi apa ? ", function(jadi) {
            char.forEach((character) => {
                if (character.name === nama) {
                    character[ganti] = jadi;
                    console.log(character);
                }
            });
        });
    });
});

rl.on("close", function() {
    console.log(char)
    console.log("\nBYE BYE !!!");
    process.exit(0);
});