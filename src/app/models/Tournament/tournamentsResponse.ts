import { tournament } from "./tournament"
import { tournamentGet } from "./tournamentResponse";

export class tournamentsResponse{
    tournaments: tournamentGet[] | undefined;
}