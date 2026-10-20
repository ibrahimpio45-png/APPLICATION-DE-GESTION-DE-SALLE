const express = require("express");
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.end('hello world :)')
});

app.post("/register", (req, res) => {
    console.log(req.body);
    res.json({
        message: "Filière enregistrée avec succès !"
    });

});



app.listen(PORT, err =>{
    if(err) throw err;
    console.log('Server running on port '+ PORT);
})