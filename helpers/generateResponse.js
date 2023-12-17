// import Response from "responselike";
import { InternalServerError } from "./classes/CustomError.js";

const generateResponse = (statusCode, body) => {
  if (typeof body !== 'object' || !body.data || !body.message) throw new InternalServerError('Ada kesalahan pada response yang dikirim...');

  const successResponse = {
    statusCode, error: false, body,
  };
  return successResponse;
}

export default generateResponse;