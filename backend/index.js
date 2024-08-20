import  express  from "express";
import path from 'path';
import { fileURLToPath } from "url";
import cors from "cors";
import fs from "fs";


const app = express()
const port = 5001;
app.use(cors());
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, 'db.json');


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

app.get("/", async(req, res)=>{
    const db = await readDatabase();
    res.json(db.employees)
})







app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`)
})