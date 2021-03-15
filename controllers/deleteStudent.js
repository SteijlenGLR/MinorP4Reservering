import { deleteStudent, getStudentDetails } from "../services/studentService.js";

export default async ({ params, request, response }) => {
    const studentNummer = params.studentNummer;

    if (!studentNummer) {
        response.status = 400;
        response.body = { msg: "Geen geldig StudentNummer opgegeven" };
        return;
    }

    const gevondenStudent = await getStudentDetails(studentNummer);

    if (!gevondenStudent) {
        response.status = 404;
        response.body = { msg: "De te verwijderen student is niet gevonden" };
        return;
    }

    
    await deleteStudent(studentNummer);
    response.body = { msg: "Student is verwijdert" };
};