const express = require("express");
const app = express();

const PORT = 5400;

app.listen(PORT , () => {
    console.log((`server is running at ${PORT}`));
})