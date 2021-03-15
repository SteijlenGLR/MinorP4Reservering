import studentRepo from "../repositories/studentRepo.js";

export const getStudenten = async () => {
    const studenten = await studentRepo.selectAll();
    
    // Maak een Array aan waarin we alle studenten kunnen opslaan
    let result = [];

    // Doorloop de studenten resultset en koppel deze aan de juiste properties
    for (const [studentNummer, studentNaam, studentTelefoon, studentKlas] of studenten) {
        let obj = new Object();

        obj.studentNummer = studentNummer;
        obj.studentNaam = studentNaam;
        obj.studentTelefoon = studentTelefoon;
        obj.studentKlas = studentKlas;

        result.push(obj);

    }
    console.log(result);
    return result;
};

export const getStudentDetails = async studentNummer => {
    
    const studenten = await studentRepo.selectByStudentNummer(studentNummer);

    let obj = new Object();

    for (const [studentNummer, studentNaam, studentTelefoon, studentKlas] of studenten) {
        
        obj.studentNummer = studentNummer;
        obj.studentNaam = studentNaam;
        obj.studentTelefoon = studentTelefoon;
        obj.studentKlas = studentKlas;

        console.log("OBJ StudentNaam = " + obj.studentNaam);
    }

    return obj;
};

export const createStudent = async studentData => {
    const newStudent = {
        studentNummer: Number(studentData.studentNummer),
        studentNaam: String(studentData.studentNaam),
        studentTelefoon: String(studentData.studentTelefoon),
        studentKlas: String(studentData.studentKlas)
    };

    console.log(newStudent);

    await studentRepo.create(newStudent);

    return newStudent.studentNummer;
};

export const updateStudent = async (studentNummer, studentData) => {
    
    console.log("StudentNummer = " + studentNummer);
    console.log("StudentNaam = " + studentData.studentNaam);

    // Zoek eerst de oude data van de student op in de database
    const student = await getStudentDetails(studentNummer);

    console.log("Student Naam uit DB" + student.studentNaam);

    // Indien de student niet kan worden gevonden, gooi dan een fout op
    if (Object.keys(student).length === 0 && student.constructor === Object) {
        throw new Error("Student niet gevonden");
    }

    const updatedStudent = {
        studentNummer: studentData.studentNummer !== undefined ? Number(studentData.studentNummer) : student.studentNummer,
        // Indien de naam van de student is niet gelijk aan undefined, pak dan de nieuwe naam ui de request. Anders behoud de oude naam
        studentNaam: studentData.studentNaam !== undefined ? String(studentData.studentNaam) : student.studentNaam,
        studentTelefoon: studentData.studentTelefoon !== undefined ? String(studentData.studentTelefoon) : student.studentTelefoon,
        studentKlas: studentData.studentKlas !== undefined ? String(studentData.studentKlas) : student.studentKlas,
    };

    console.log("Updated StudentNaam = " + updatedStudent.studentNaam);
    console.log("Updated StudentNummer = " + updatedStudent.studentNummer);
    console.log("Updated StudentTelefoon = " + updatedStudent.studentTelefoon);
    console.log("Updated StudentKlas = " + updatedStudent.studentKlas);

    await studentRepo.update(studentNummer, updatedStudent);
};

export const deleteStudent = async studentNummer => {
    await studentRepo.delete(studentNummer);
};