import { NotFoundError } from "../halpers/apiError";
import Mmorpg from "../model/Mmorpg";

interface CharacterísticsInterface {
  race: string;
  gender: string;
  age?: number;
  hair: {
    current: string;
    old?: string;
  };
  eyeColor?: string;
  height?: string;

}

interface ProfessionalStatusInterface {
  affilition?: string;
  ocupation?: string;
  level: { type: [1, 2, 3, 4, 5, 6, 7, 8, 9]; default: 1; };
  achievedFloor?: number;
}

interface HabilidadesInterface {
  strength: {
    type: string,
    default: "I 1",
  },
  endurance: {
    type: string,
    default: "I 1",
  },
  dexterity: {
    type: string,
    default: "I 1",
  },
  agility: {
    type: string,
    default: "I 1",
  },
  charisma: {
    type: string,
    default: "I 1",
  },
  luck: {
    type: [
      "SSS", "SS", "S", "A", "B", "C", "D", "E", "F", "G", "H", "I"
    ],
    default: "I",
  },
  magic: {
    type: [
      "SSS", "SS", "S", "A", "B", "C", "D", "E", "F", "G", "H", "I"
    ],
    default: "I",
  },
  hunter: {
    type: [
      "SSS", "SS", "S", "A", "B", "C", "D", "E", "F", "G", "H", "I"
    ],
    default: "I",
  },
  abnormalResistance: {
    type: [
      "SSS", "SS", "S", "A", "B", "C", "D", "E", "F", "G", "H", "I"
    ],
    default: "I",
  },
  magicResistance: {
    type: [
      "SSS", "SS", "S", "A", "B", "C", "D", "E", "F", "G", "H", "I"
    ],
    default: "I",
  },

}

class mmorpgUpdate {
  async Characterístics(value: CharacterísticsInterface, id: string) {
    const mmorpgs = await Mmorpg.findById(id);

    if (!mmorpgs)
      throw new NotFoundError("Not Found");

    if (value.age)
      mmorpgs.Characterístics[0].age = value.age;

    if (value.race)
      mmorpgs.Characterístics[0].race = value.race;

    if (value.hair)
      mmorpgs.Characterístics[0].hair = value.hair;

    if (value.eyeColor)
      mmorpgs.Characterístics[0].eyeColor = value.eyeColor;

    if (value.height)
      mmorpgs.Characterístics[0].height = value.height;

    mmorpgs.save();
    return mmorpgs.Characterístics[0];
  }

  async ProfessionalStatus(value: ProfessionalStatusInterface, id: string) {
    const mmorpgs = await Mmorpg.findById(id);

    if (!mmorpgs)
      throw new NotFoundError("Not Found");

    if (value.ocupation)
      mmorpgs.ProfessionalStatus[0].ocupation = value.ocupation;

    if (value.affilition)
      mmorpgs.ProfessionalStatus[0].affilition = value.affilition;

    if (value.level)
      mmorpgs.ProfessionalStatus[0].level = value.level;

    if (value.achievedFloor)
      mmorpgs.ProfessionalStatus[0].achievedFloor = value.achievedFloor;

    mmorpgs.save();

    return mmorpgs.ProfessionalStatus[0];
  }

  async Habilidades(value: HabilidadesInterface, id: string) {
    const mmorpgs = await Mmorpg.findById(id);

    if (!mmorpgs)
      throw new NotFoundError("Not Found");

    if (value.strength)
      mmorpgs.Habilidades[0].strength = value.strength;

    if (value.endurance)
      mmorpgs.Habilidades[0].endurance = value.endurance;

    if (value.dexterity)
      mmorpgs.Habilidades[0].dexterity = value.dexterity;

    if (value.agility)
      mmorpgs.Habilidades[0].agility = value.agility;

    if (value.charisma)
      mmorpgs.Habilidades[0].charisma = value.charisma;

    if (value.luck)
      mmorpgs.Habilidades[0].luck = value.luck;

    if (value.magic)
      mmorpgs.Habilidades[0].magic = value.magic;

    if (value.hunter)
      mmorpgs.Habilidades[0].hunter = value.hunter;

    return mmorpgs.Habilidades[0];
  }
}

export default new mmorpgUpdate();
