const router = require("express").Router();
const path = require("path");

//route block---GET takes what's already there, POST adds new data, PUT is method used for updating, DELETE removes data
router.get("/notes", (req, res) => {
	//req goes from front end to back end, a request
	//res goes from back end to front end, based on req
	res.sendFile(path.join(__dirname, "../public/notes.html"));
});
router.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
