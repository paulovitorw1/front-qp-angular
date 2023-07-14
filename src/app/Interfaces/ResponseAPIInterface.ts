interface ResponseData<T> {
    data: T;
    response: Response;
}

interface Response {
    success: boolean;
    message: string;
}

export { ResponseData, Response }