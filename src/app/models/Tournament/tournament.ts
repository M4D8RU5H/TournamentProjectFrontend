export class tournament {
    constructor(
        public id: number,
        public name: string,
        public tournamentDate: string,
        public maxTeamAmount: number,
        public description: string,
        public registrationStarts: string,
        public registrationEnds: string,
        public status: number,
        public liveTransmisionEmbed: string
        
    ) { }
}