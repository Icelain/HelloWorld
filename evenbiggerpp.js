const {spawn} = require("child_process");
const process = spawn("python3",["biggerpp.py"]);

/* Haven't handled any errors here, big pp move*/

process.stdout.on("data",(data)=>{
	console.log(data.toString());
});
