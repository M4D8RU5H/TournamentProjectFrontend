export class team {
  constructor(
    public id: number,
    public name: string,
    public ratio: number,
    public teamLeaderId: number,

  ) { }
}

export class teamDictionary {
  constructor(
      public id: number,
      public teamName: string,
  ) { }
}