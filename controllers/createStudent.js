import { createStudent } from "../services/studentService.js";

export default async ({ request, response }) => {
    if (!request.hasBody) {
        response.status = 400;
        response.body = { msg: "Verkeerde studentData" };
        return;
    }

    const student = await request.body().value;

    console.log("StudentNummer = " + student.studentNummer);


    if (!student.studentNummer || !student.studentNaam || !student.studentKlas) {
        response.status = 422;
        response.body = { msg: "Onvolledige student data, Nummer, Naam en Klas zijn verplicht" };
        return;
    }

    const id = await createStudent(student);

    response.body = { msg: "De student is aangemaakt ", id };
};