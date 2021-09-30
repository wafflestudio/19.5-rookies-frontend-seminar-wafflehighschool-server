import { CommentService } from './student-comment.service';
import { CreateCommentResponseDto, GetCommentResponseDto } from './student-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    getComments(param: any, page: number): Promise<GetCommentResponseDto>;
    createComment(param: any, req: any, body: any): Promise<CreateCommentResponseDto>;
}
