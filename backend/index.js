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
        // console.log(data)
        return JSON.parse(data);
        
    } catch (err) {
        console.error('Error reading the database:', err);
        return { employees: [], availablePositions: [] };
    }
}
// console.log(readDatabase())
const writeDatabase = (data, dbPath) => {
    // fs.writeFileSync(JSON.stringify(data, null, 2));
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))

};

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

//http request to update likes of animals.!!
app.patch("/animalslike/:id", (req, res)=>{
    const id = Number(req.params.id);
    const {like} = req.body

    let animals = readDatabase();
    console.log(animals)

    let singleAnimal = animals.domesticAnimals.find(animal =>animal.id === parseInt(id));
    let singleWildAnimal = animals.wildAnimals.find(wildanimal =>wildanimal.id === parseInt(id));
    if(singleAnimal){
        singleAnimal.like = like;
        writeDatabase(animals, dbPath)
    }if(singleWildAnimal){
        singleWildAnimal.like = like;
        writeDatabase(animals, dbPath)
        res.json({like});
    }
    else{
        res.status(404).json({ message: 'Nothing to love..!' });
    }
})


app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`)
})

