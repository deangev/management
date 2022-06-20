interface IGetOptionalAuthHeaderReturn {
  headers: Partial<{ authorization: string }>;
}

export const getOptionalAuthHeader = (
  authorization: string
): IGetOptionalAuthHeaderReturn => ({
  headers: authorization ? { authorization } : {},
});
