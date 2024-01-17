export class report {
    constructor(
        public id: number,
        public userId: number,
        public category: number,
        public description: string,
        public date: string,
        public status: number,
    ) { }
}