/* Modules */
const AUTH = `USR_${Math.random().toString(16).slice(2)}`;
const WebSocket = require("ws");
const ws = new WebSocket("ws://localhost:9000");

/* Functions */
const flat = (str) => JSON.stringify(str);
const puff = (str) => JSON.parse(str);

/* Once WebSocket connected */
ws.on("open", () => {
	console.log("Connected to server");
	ws.send(flat({event: "auth", auth: AUTH}));
});

/* Once WebSocket receives message */
ws.on("message", (message) => {
	console.log(puff(message));
});

/* If WebSocket has closed unexpectedly */
ws.on("close", () => {
	console.log("Connection to server closed");
	// eslint-disable-next-line no-undef
	return process.exit(0);
});

/* If WebSocket has an error */
ws.on("error", (error) => {
	console.log(`Error: ${error}`);
});