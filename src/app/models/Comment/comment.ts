export class comment {
    constructor(
        public id: number,
        public userId: number,
        public content: string,
        public postId: number,
        public commentDate: string, 
    ) { }
}