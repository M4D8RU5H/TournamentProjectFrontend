import { report } from "./report";

export class reportResponse{
    report: reportGet | undefined;
}

export class reportGet{
    constructor(
        public id: number,
        public userId: number,
        public category: number,
        public description: string,
        public date: Date,
        public status: number,
    ) {}
}