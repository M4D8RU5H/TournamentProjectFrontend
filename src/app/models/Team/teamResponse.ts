import { team } from "./team";

export class teamResponse{
    team: teamGet | undefined;
}

export class teamGet{
    constructor(    
        public id: number,
        public name: string,
        public ratio: number,
        public teamMembers: user[],
    ){}
}

export class user{
    constructor(
        public id: number,
        public name: string,
        public rank: string,
    ){}
}