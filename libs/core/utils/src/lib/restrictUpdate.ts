export function restrictUpdate(body: { [key: string]: unknown }, allowedFields: Array<keyof typeof body>) {
    Object.keys(body).forEach(key => !allowedFields.includes(key) && delete body[key]);
    return body;
};