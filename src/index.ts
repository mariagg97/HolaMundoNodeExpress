import express from 'express';

const app = express();
const PORT: number = 3000;

app.get("/", (req, res)=>{
    res.send("Hola Mundo");

})

app.listen(PORT, () =>{
    return console.log(`App is listening at port: ${PORT}`)
})