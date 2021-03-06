export declare type validGrade = 1 | 2 | 3;
export declare type validName = string;
export declare type major = 'frontend' | 'backend' | 'android' | 'iOS' | 'design';
export declare class CreateStudentRequestDto {
    name: string;
    grade: number;
}
export declare class PatchStudentRequestDto {
    profile_img?: string;
    email?: string;
    phone?: string;
    major?: 'frontend' | 'backend' | 'android' | 'iOS' | 'design' | null;
}
export declare class CreateStudentResponseDto {
    success: true;
    id: number;
}
export declare class PatchStudentResponseDto {
    success: true;
}
export declare class DeleteStudentResponseDto {
    success: true;
}
export declare class GetStudentSummaryResponseDto {
    id: number;
    name: string;
    grade: 1 | 2 | 3;
    profile_img: string | null;
}
export declare class GetStudentDetailResponseDto extends GetStudentSummaryResponseDto {
    profile_img: string | null;
    email: string | null;
    phone: string | null;
    major: major | null;
    locked: boolean;
}
export declare class GetStudentStatResponseDto {
    count: {
        1: number;
        2: number;
        3: number;
    };
}
