const sckey = require("soundcloud-key-fetch");

sckey.fetchKey().then(key => {
	console.log(key)
});

const key = sckey.fetchKey();