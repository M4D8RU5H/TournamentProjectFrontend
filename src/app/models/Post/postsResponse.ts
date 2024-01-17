import { post } from "./post";
import { postGet } from "./postResponse";

export class postsResponse{
    posts: postGet[] | undefined;
}