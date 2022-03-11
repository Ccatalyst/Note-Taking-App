const router = require("express").Router();

const fs = require("fs");
let dataBase = require("../db/db.json");

router.get("/notes", (req, res) => {
	dataBase = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
	res.json(dataBase);
});
router.post("/notes", (req, res) => {
	let noteModel = {
		title: req.body.title,
		text: req.body.text,
		id: Math.floor(Math.random() * 100000),
	};
	//any new model that comes through we want to push it though to our db.json from line 4
	dataBase.push(noteModel);
	//rewrites the database
	fs.writeFileSync("./db/db.json", JSON.stringify(dataBase));
	//resends the information to the front end
	res.json(dataBase);
});

router.delete("/notes/:id", (req, res) => {
	//an empty array, will hold the dataBase info from the db.json file.
	let keepArray = [];
	//for loop for the length of the database array
	for (var i = 0; i < dataBase.length; i++) {
		//if the id of the objects in the array DOES NOT equal the id of the object to be deleted...
		if (dataBase[i].id != req.params.id) {
			//push it into the array above
			keepArray.push(dataBase[i]);
		}
	}
});

module.exports = router;
