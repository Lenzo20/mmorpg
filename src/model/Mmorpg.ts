import { model, Schema } from "mongoose";

interface MmorpgInterface extends Document {
  username: string;
  Characterístics: object;
  ProfessionalStatus: object;
  Habilidades: object;
  PersonalStatus: object;
  SkillMagicAndEquipament: object;
}

const Mmorpg = new Schema({
  username: {
    type: String,
    required: true,
  },
  japanase: String,
  romaji: String,
  Characterístics: {
    type: Array,
    description: [{
      race: {
        type: String,
        required: true,
      },
      gender: {
        type: ["Male", "Female"],
        required: true,
      },
      age: Number,
      hair: {
        type: [{
          current: {
            type: String,
            required: true,
          },
          old: String
        }]
      },
      eyeColor: String,
      height: String,
    }]
  },
  ProfessionalStatus: {
    type: Array,
    description: [{
      affilition: {
        type: String,
        default: "none",
      },
      ocupation: {
        type: String,
      },
      level: {
        type: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        default: 1,
      },
      achievedFloor: Number,
    }]
  },
  Habilidades: {
    type: Array,
    description: [{
      strength: {
        type: String,
        default: "I 1",
      },
      endurance: {
        type: String,
        default: "I 1",
      },
      dexterity: {
        type: String,
        default: "I 1",
      },
      agility: {
        type: String,
        default: "I 1",
      },
      charisma: {
        type: String,
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
    }],
  },
  PersonalStatus: {
    status: {
      type: ["alive", "dead"],
      default: "alive",
    }
  },
  SkillMagicAndEquipament: {
    type: Array,
    description: [{
      skill: {
        type: Array,
      },
      magic: {
        type: Array,
        default: null,
      },
      weapon: {
        type: Array,
      }
    }]
  }
});

export default model<MmorpgInterface>("Mmorpg", Mmorpg);
