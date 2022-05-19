import {IPost} from "./post.interface";

export interface IPostDetail extends IPost{
  "userId": number;
  "body": string;
}
