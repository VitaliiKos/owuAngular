import {IComment} from "./comment.interface";

export interface ICommentDetail extends IComment{
  "postId": number;
  "email": string;
  "body": string;
}
