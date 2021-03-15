import db from "../db/database.js";

class StudentRepo {
    create(student) {
        return db.query("INSERT INTO student(studentNummer, studentNaam, studentTelefoon, studentKlas) VALUES(?, ?, ?, ?)", [
            student.studentNummer,
            student.studentNaam,
            student.studentTelefoon,
            student.studentKlas
        ]);
    }

    selectAll() { 
        return db.query("SELECT studentNummer, studentNaam, studentTelefoon, studentKlas FROM student ORDER BY studentNummer");
    }

    selectByStudentNummer(studentNummer) {
        return db.query("SELECT studentNummer, studentNaam, studentTelefoon, studentKlas FROM student WHERE studentNummer = ?", [studentNummer]);
    }
    update(studentNummer, student) {
    
        var query = "UPDATE student SET studentNaam = ?, studentTelefoon = ?, studentKlas = ? WHERE studentNummer = ?";

        return db.query(query,[
            student.studentNaam,
            student.studentTelefoon,
            student.studentKlas,
            studentNummer
            ])
    }

    delete(studentNummer){

        var query = "DELETE FROM student WHERE studentNummer = ?";
        return db.query(query, [studentNummer]);
    }
}

export default new StudentRepo();