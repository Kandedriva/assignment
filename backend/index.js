import  express  from "express";
import path from 'path';
import { fileURLToPath } from "url";
import cors from "cors"


const app = express()
const port = 5001;
app.use(cors());
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, 'db.json');

app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`)
})