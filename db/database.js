import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("./db/student.db");

db.query("CREATE TABLE IF NOT EXISTS student (studentNummer	NUMERIC, studentNaam TEXT, studentTelefoon TEXT, studentKlas TEXT)");


export default db;

