var express = require("express");
var bodyParser=require('body-parser')
var path=require('path')
var app = express();
var PORT = 9950;
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(bodyParser.json({type:'application/*+json'}))
app.use(bodyParser.raw({type:'application/vnd.custom-type'}))
app.use(bodyParser.text({type:'text/html'}))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname,"index.html"))
})
app.get("/space", function (req, res) {
    res.sendFile(path.join(__dirname,"space.png"))
})
app.get("/style", function (req, res) {
    res.sendFile(path.join(__dirname,"style.css"))
})
app.get("/add",function(req,res){
    res.sendFile(path.join(__dirname, "add.html"))
});
app.get("/api/:characters?", function (req, res) {
    var chosen = req.params.characters;
    console.log(chosen)
    if (chosen) {
        for (var i = 0; i < characters.length; i++) {
            if (chosen == characters[i].routeName) {
                res.json(characters[i]);
                return;
            }
        }
        res.send("No character found")
    }
    else{
            res.json(characters)
     
      }
});
app.get("/viewall",function (req,res){
    res.sendFile(path.join(__dirname,"viewAll.html"))
})
app.post("/api/new",function(req,res){
    var newCharacter = req.body;
    newCharacter.routeName=newCharacter.name.replace(/\s+/g,"");
    console.log(newCharacter)
    characters.push(newCharacter);
    res.json(newCharacter)

})
var characters = [
    {
        routeName: "drago",
        name: "Drago",
        role: "Power",
        power: 98,
        speed: 69,
        fielding: 75,
        contact: 82,
        pitchSpeed: 95,
        pitchSkill: 76,
        special: 102
    },
    {
        routeName: "bigworm",
        name: "Big Worm",
        role: "Power",
        power: 95,
        speed: 71,
        fielding: 75,
        contact: 85,
        pitchSpeed: 93,
        pitchSkill: 78,
        special: 101

    },
    {
        routeName: 'octopio',
        name: "Octopio",
        role: "Power",
        power: 93,
        speed: 73,
        fielding: 76,
        contact: 82,
        pitchSpeed: 92,
        pitchSkill: 93,
        special: 100
    }
    ,
    {
        routeName: 'goblin',
        name: "Goblin",
        role: "speedster",
        power: 74,
        speed: 89,
        fielding: 91,
        contact: 86,
        pitchSpeed: 82,
        pitchSkill: 87,
        special: 100
    }
    ,
    {
        routeName: 'tybalt',
        name: "Tybalt",
        role: "speedster",
        power: 75,
        speed: 90,
        fielding: 89,
        contact: 86,
        pitchSpeed: 83,
        pitchSkill: 86,
        special: 100
    }
    ,
    {
        routeName: 'bishop',
        name: "Bishop",
        role: "magician",
        power: 75,
        speed: 83,
        fielding: 94,
        contact: 84,
        pitchSpeed: 81,
        pitchSkill: 94,
        special: 100

    }
    ,
    {
        routeName: 'shadow',
        name: "Shadow",
        role: "magician",
        power: 80,
        speed: 80,
        fielding: 90,
        contact: 97,
        pitchSpeed: 81,
        pitchSkill: 91,
        special: 100
    }
    ,
    {
        routeName: 'nightmare',
        name: "Nightmare",
        role: "magician",
        power: 82,
        speed: 82,
        fielding: 86,
        contact: 92,
        pitchSpeed: 83,
        pitchSkill: 90,
        special: 110

    }
]


app.listen(PORT, function () {
    console.log("App is listening on PORT " + PORT)
})
