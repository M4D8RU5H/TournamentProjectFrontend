export class user {
    constructor(
        public id: number,
        public login: string,
        public name: string,
        public password: string,
        public roleId: number,
        public bannedUntill: string,
        public rank: number,
    ) { }
}

export class userDictionary {
    constructor(
        public id: number,
        public name: string,
    ) { }
}

export class userPhrase {
    constructor(
        public phrase: string,
    ) { }
}

export class playerMatchDetails {
    constructor(
      public gameType: string,
      public gameLength: string,
      public gameDate: string,
      public win: boolean,
      public champName: string,
      public champIconUrl: string,
      public champLevel: number,
      public kills: number,
      public assists: number,
      public deaths: number,
      public kda: number,
      public minionsKilled: number,
      public goldEarned: number,
      public itemPathList: itemPath[]
    ) {}
  }

  export class playerQueueInfo {
    constructor(
      public queueName: string,
      public leaguePoints: number,
      public leagueTier: string,
      public leagueTierRank: string,
      public winrate: number,
      public wins: number,
      public loses: number,
      public gamesPlayed: number,
      public divisionLink: string
    ) {}
  }

export class itemPath {
    constructor(
       public itemPath: string
    ) { }
}