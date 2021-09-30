declare type Comment = {
    id: number;
    content: string;
    datetime: Date;
};
export declare class GetCommentResponseDto {
    data: Comment[];
    count: number;
    next: number | null;
}
export declare class CreateCommentRequestDto {
    content: string;
}
export declare class CreateCommentResponseDto {
    success: boolean;
}
export {};
