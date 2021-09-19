export declare type validGrade = 1 | 2 | 3;
export declare type validName = string;
export declare class CreateStudentRequestDto {
    name: string;
    grade: number;
}
export declare class PatchStudentRequestDto {
    profile_img?: string;
    email?: string;
    phone?: string;
    major?: 'frontend' | 'backend' | 'android' | 'iOS' | null;
}
export declare class PatchStudentResponseDto {
    success: true;
}
export declare class DeleteStudentResponseDto {
    success: true;
}
