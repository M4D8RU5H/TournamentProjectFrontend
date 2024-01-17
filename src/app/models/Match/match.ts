export class match {
    constructor(
        public id: number,
        public firstTeamId: number,
        public secondTeamId: number,
        public winnerId: number,
        public phase: number, 
        public secondTeamName: string,
        public firstTeamName: string
    ) { }
}

export class matchId
{
    constructor(
        public tournamentId: number,
    ) {}
}