import { tournament } from "./tournament"

export class tournamentResponse{
    tournament: tournamentGet | undefined;
}

export class tournamentGet{
    constructor(
        public id: number,
        public name: string,
        public tournamentDate: Date,
        public maxTeamAmount: number,
        public description: string,
        public registrationStarts: Date,
        public registrationEnds: Date,
        public status: number,
        public liveTransmisionEmbed: string
        
    ) { }
}