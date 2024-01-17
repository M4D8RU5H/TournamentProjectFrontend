import { team, teamDictionary } from "./team";
import { teamGet } from "./teamResponse";

export class teamsResponse{
    teams: teamGet[] | undefined;
}


export class teamsDictionaryResponse{
    teams: teamDictionary[] | undefined;
}