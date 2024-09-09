import  express  from "express";
import path from 'path';
import { fileURLToPath } from "url";
import cors from "cors";
import fs from "fs";

//Initialization of global variables and middlewares
const app = express()
const port = 5001;
app.use(cors());
app.use(express.json());

//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, 'db.json');


// function to read file from the database.
function readDatabase() {
    try {
        const data = fs.readFileSync(dbPath, 'utf8');
        console.log(data)
        return JSON.parse(data);
        
    } catch (err) {
        console.error('Error reading the database:', err);
        return { employees: [], availablePositions: [] };
    }
}

// http Get request to get the list of domestic animals from the database
app.get("/domesticAnimals", async(req, res)=>{
    const db = await readDatabase();
    res.json(db.domesticAnimals)
});

// http Get request to get the list of wild animals from the database

app.get("/wildAnimals", async(req, res)=>{
    const db = await readDatabase();
    res.json(db.wildAnimals)
});


app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`)
})

