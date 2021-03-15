import { getStudentDetails } from "../services/studentService.js";

export default async ({
    params,
    response
}) => {
    const studentNummer = params.studentNummer;

    if (!studentNummer) {
        response.status = 400;
        response.body = { msg: "Onbekend Student Nummer" };
        return;
    }

    const gevondenStudent = await getStudentDetails(studentNummer);
    if (!gevondenStudent) {
        response.status = 404;
        response.body = { msg: `De student met ${studentNummer} is helaas niet gevonden` };
        return;
    }

    response.body = gevondenStudent;
};