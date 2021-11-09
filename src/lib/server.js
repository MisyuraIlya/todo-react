const express = require('express');
const PORT = 8001;
const app = express();
var cors = require('cors')
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tododb',
});

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

const middleware = (req, res, next) => {
    //Auth 
    const {title, description} = req.body;
    if (!title || !description){
        return next(new Error('missing title or description'));
    }
    return next();
}

app.get('/todos',(req,res) => {
    const sqlFetch = "SELECT * FROM todolist";
    db.query(sqlFetch, (err, result) => {
        if(err) throw err;
        res.send(result)
    })
})



async function startApp(){
    try { 
        await db.connect((err) => {if (err) throw err;console.log('DB Connected!');});
        app.listen(PORT, () => { console.log('SERVER STARTED ON PORT ' + PORT)}) 
    } catch (error) {
        console.log(error)
    }
}



startApp()