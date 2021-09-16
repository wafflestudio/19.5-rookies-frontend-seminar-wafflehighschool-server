import { HttpException, HttpStatus } from '@nestjs/common';
export declare class WrrsException extends HttpException {
    readonly message: string;
    readonly errorCode: ErrorCode;
    constructor(errorCode: ErrorCode, message: string, statusCode: HttpStatus);
}
export declare enum ErrorCode {
    BAD_DATA = 20000,
    INVALID_GRADE = 30000,
    INVALID_NAME = 30001,
    DUPLICATED_STUDENT = 30002,
    ID_NOT_FOUND = 30003
}
