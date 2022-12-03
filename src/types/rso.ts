export interface IRso {
  data: string[];
  isLoading: boolean;
  error: string | undefined;
  pick: string;
  result: IResult;
  enemyPick: string;
  playerPick: string;
  versusLoading: boolean;
  isShowResult: boolean;
}

export interface IResult {
  winner: string;
  outcome: string;
  loser: string;
}
