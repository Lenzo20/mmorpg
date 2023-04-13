export interface MmorpgInterface extends Document {
  username: string;
  japanase?: string;
  romaji?: string;
  Characterístics: [{
    race: string;
    gender: string;
    age?: number;
    hair: {
      current: string;
      old?: string;
    };
    eyeColor?: string;
    height?: string;

  }];
  ProfessionalStatus: [{
    affilition?: string;
    ocupation?: string;
    level: { type: [1, 2, 3, 4, 5, 6, 7, 8, 9]; default: 1; };
    achievedFloor?: number,
  }],
  Habilidades: [{
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
  }];
  PersonalStatus: {
    status: ["alive", "dead"];
  };
  SkillMagicAndEquipament: [{
    skill: {
      1: {
        type: string,
        default: null,
      },
      2: {
        type: string,
        default: null,
      },
      3: {
        type: string,
        default: null,
      },
    },
    magic: {
      type: object,
      1: {
        type: string,
        default: null,
      },
      2: {
        type: string,
        default: null,
      },
      3: {
        type: string,
        default: null,
      },
    },
    weapon: {
      type: object,
      main: {
        type: string,
        default: null
      },
      secondary: {
        type: string,
        default: null
      },
    }
  }];
}

export interface NewMmorpgInterface {
  username: string;
  japanase?: string;
  romaji?: string;
  Characterístics: [{
    race: string;
    gender: string;
    age?: number;
    hair: {
      current: string;
      old?: string;
    };
    eyeColor?: string;
    height?: string;

  }];
  ProfessionalStatus: [{
    affilition?: string;
    ocupation?: string;
    level: { type: [1, 2, 3, 4, 5, 6, 7, 8, 9]; default: 1; };
    achievedFloor?: number,
  }],
  Habilidades: [{
    strength: string,
    endurance: string,
    dexterity: string,
    agility: string,
    charisma: string,
    luck: string
    magic: string,
    hunter: string,
    abnormalResistance: string,
    magicResistance: string,
  }];
  PersonalStatus: {
    status: ["alive", "dead"];
  }
  SkillMagicAndEquipament: [{
    skill: {
      1: {
        type: string,
        default: null,
      },
      2: {
        type: string,
        default: null,
      },
      3: {
        type: string,
        default: null,
      },
    },
    magic: object | null;
    weapon: {
      type: object,
      main: {
        type: string,
        default: null
      },
      secondary: {
        type: string,
        default: null
      },
    }
  }];
}
