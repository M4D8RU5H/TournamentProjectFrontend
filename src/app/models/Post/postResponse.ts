import { post } from "./post";

export class postResponse{
    post: postGet | undefined;
}

export class postGet{
    constructor(
        public id: number,
        public user: user,
        public title: string,
        public content: string,
        public date: Date,    
        public comments: comments[],
        public amount: number,
        public commentContent: string,
    ) { }
}

export class user{
    constructor(
    public id: number,
    public name: string,
    ) {}
}

export class comments{
    constructor(
        public id: number,
        public commentAuthor: user,
        public content: string,
        public commentDate: Date,
    ) {}
}