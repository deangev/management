const getErrorResponse = (status: number, message: string) => {
  return {
    status,
    data: { message },
  };
};

export { getErrorResponse };
