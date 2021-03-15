import { getStudenten } from "../services/studentService.js";

export default async ({ response }) => {
    response.body = await getStudenten();
};
