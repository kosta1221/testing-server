const app = require("./app");
const PORT = process.env.PORT || 9095;

app.listen(PORT, () => {
	console.log(`app listening on ${PORT}`);
});
