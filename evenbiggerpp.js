const {spawn} = require("child_process");
const process = spawn("python3",["biggerpp.py"]);

/* I use arch btw*/

process.stdout.on("data",(data)=>{
	console.log(data.toString());
});
