const getErrorResponse = (status: number, message: string) => {
  return {
    response: {
      status,
      data: { message },
    },
  };
};

export { getErrorResponse };
