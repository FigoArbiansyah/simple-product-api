const generateResponseError = (error) => {
  if (error?.name && error?.name === 'Internal Server Error') {
    const errorResponse = {
      statusCode: 500,
      error: true,
      body: {
        message: error?.message,
        data: null,
      },
    };
    return errorResponse;
  }
  return error;
}

export default generateResponseError;