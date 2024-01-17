import { playerMatchDetails, playerQueueInfo, user, userDictionary } from "./user";

export class usersResponse{
    users: user[] | undefined;
}

export class usersDictionaryResponse{
    users: userDictionary[] | undefined;
}

export class playerMatchDetailsResponse{
    playerMatchDetails: playerMatchDetails[] | undefined;
}

export class playerQueueInfoResponse{
    playerQueueInfo: playerQueueInfo[] | undefined;
}