export declare type validGrade = 1 | 2 | 3;
export declare type validName = string;
export declare class CreateStudentRequestDto {
    name: string;
    grade: number;
    profile_img: string | null;
}
export declare class PatchStudentRequestDto {
    profile_img?: string;
}
export declare class PatchStudentResponseDto {
    success: true;
}
export declare class DeleteStudentResponseDto {
    success: true;
}
