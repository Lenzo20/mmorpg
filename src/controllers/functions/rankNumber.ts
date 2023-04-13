import { NotFoundError } from "../../halpers/apiError";

export function rankNumberValidation(value: string): string {
  switch (true) {
    case value > "000" && value <= "099":
      return "I";
    case value >= "100" && value <= "199":
      return "H";
    case value >= "200" && value <= "299":
      return "G";
    case value >= "300" && value <= "399":
      return "F";
    case value >= "400" && value <= "499":
      return "D";
    case value >= "500" && value <= "599":
      return "C";
    case value >= "600" && value <= "699":
      return "H";
    case value >= "700" && value <= "799":
      return "B";
    case value >= "800" && value <= "899":
      return "A";
    case value >= "900" && value <= "999":
      return "S";
    case value === null || value === undefined:
      return "I";
  }

  return "X";
}

// Validando Rank da pessoa se nao tiver a letra vai ser acrescentado
export function validateRank(value: string): string {

  if (value === null || value === undefined)
    return value;

  const ranks = ["S", "A", "B", "C", "D", "E", "F", "G", "H", "I"];

  for (let i = 0; i < ranks.length; i++) {
    if (value.includes(ranks[i])) {
      const splitString = value.indexOf(ranks[i]);
      let rankString = value.substring(0, splitString + 1);
      const rankNumbers = value.substring(splitString + 1).trim();

      // Validando se o number is menor que 3 e se is diferente de 0
      if (rankNumbers.length <= 3 && rankNumbers !== "0") {

        if (rankString === rankNumberValidation(rankNumbers))
          break;
        else {
          rankString = rankNumberValidation(rankNumbers);
          value = rankString + rankNumbers;
          return value;
        }
      } else {
        throw new NotFoundError("verifique o valor das habilidade pfvr");
      }
    }
    if (value.length <= 3 && value !== "0") {
      const rankString = rankNumberValidation(value);
      value = rankString + value;
      return value;
    }
  }

  return value;
}

// Validando Rank String, se foi passada corretamente
export function validateRankString(value: string) {
  if (value === null || value === undefined)
    return value;

  const ranks = ["S", "A", "B", "C", "D", "E", "F", "G", "H", "I"];

  for (let i = 0; i < ranks.length; i++) {
    if (value.includes(ranks[i])) {
      return value;
    }
  }

  throw new NotFoundError("verifique os valores das habilidade pfvr");
}
