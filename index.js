const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send("Thank you very much....express change korchi");
})

app.listen(3000, () => {
    console.log("listening the port number 3000");
})