import { updateStudent } from "../services/studentService.js";

export default async ({ params, request, response }) => {
    const studentNummer = params.studentNummer;

    if (!studentNummer) {
        response.status = 400;
        response.body = { msg: "Geen geldig StudentNummer opgegeven" };
        return;
    }

    if (!request.hasBody) {
        response.status = 400;
        response.body = { msg: "Geen geldige student Data meegestuurd" };
        return;
    }

    const student = await request.body().value;

    await updateStudent(studentNummer, student);

    response.body = { msg: "Student geupdated" };
};