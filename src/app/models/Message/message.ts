export class message {
    constructor(
        public id: number,
        public senderId: number,
        public receiverId: number,
        public content: string,
        public date: string,
        public readed: boolean 
    ) { }
}