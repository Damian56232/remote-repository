const express = require('espress');

const PORT = process.env.PORT || 3000;

const app = express();


app.listen(PORT, () =>{
	console.log('app running on port ${PORT}');

});