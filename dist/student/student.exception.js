"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadDataException = exports.IdNotFoundException = exports.InvalidNameException = exports.InvalidGradeException = exports.DuplicatedStudentException = void 0;
const common_1 = require("@nestjs/common");
const wrrs_exception_1 = require("../common/exceptions/wrrs-exception");
class DuplicatedStudentException extends wrrs_exception_1.WrrsException {
    constructor() {
        super(wrrs_exception_1.ErrorCode.DUPLICATED_STUDENT, '같은 학년에 같은 이름이 존재합니다.', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.DuplicatedStudentException = DuplicatedStudentException;
class InvalidGradeException extends wrrs_exception_1.WrrsException {
    constructor() {
        super(wrrs_exception_1.ErrorCode.INVALID_GRADE, '학년이 올바르지 않습니다.', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.InvalidGradeException = InvalidGradeException;
class InvalidNameException extends wrrs_exception_1.WrrsException {
    constructor() {
        super(wrrs_exception_1.ErrorCode.INVALID_NAME, '이름이 올바르지 않습니다.', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.InvalidNameException = InvalidNameException;
class IdNotFoundException extends wrrs_exception_1.WrrsException {
    constructor() {
        super(wrrs_exception_1.ErrorCode.ID_NOT_FOUND, '아이디가 존재하지 않습니다.', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.IdNotFoundException = IdNotFoundException;
class BadDataException extends wrrs_exception_1.WrrsException {
    constructor() {
        super(wrrs_exception_1.ErrorCode.BAD_DATA, '요청한 데이터가 올바르지 않습니다.', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.BadDataException = BadDataException;
//# sourceMappingURL=student.exception.js.map