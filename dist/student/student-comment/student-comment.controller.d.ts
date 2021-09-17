import { CommentEntity } from './student-comment.entity';
import { CommentService } from './student-comment.service';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    getComments(param: any): Promise<CommentEntity[]>;
    createComment(param: any, req: any, body: any): Promise<any>;
}
