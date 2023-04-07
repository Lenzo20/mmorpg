export const example: object = {
  "username": "Nome do Usuario",
  "japanase": "Como se escreve em Japones",
  "romaji": "Como se ler o nome japones",
  "Characterístics": [
    {
      "race": "Raça da pessoa",
      "gender": "Male or Famale",
      "age": "20",
      "hair": [
        {
          "current": "Cor do cabelo atual",
          "old": "Caso a pessoa tenha mudado a cor do cabelo, aqui fica a cor antiga, é obrigatorio"
        }
      ],
      "eyeColor": "Cor dos olhos",
      "height": "Altura ex: 180cm (6,0) <- polegadas"
    }
  ],
  "ProfessionalStatus": [
    {
      "affilition": "Familia da usuario",
      "ocupation": "Trabalho atual da usuario",
      "level": "level da pessoa entre 1 e 9, padrão é 1",
      "achievedFloor": "Ultimo andar que a pessoa foi ou o quanto ela foi longe"
    }
  ],
  "Habilidades": [
    {
      "S": "900 - 999",
      "A": "800 - 899",
      "B": "700 - 799",
      "C": "600 - 699",
      "D": "500 - 599",
      "E": "400 - 499",
      "F": "300 - 399",
      "G": "200 - 299",
      "H": "100 - 199",
      "I": "000 - 099"
    },
    {
      "strength": "Aqui tem o nivel da habilidade ex: D540",
      "endurance": "Aqui tem o nivel da habilidade ex: D540",
      "dexterity": "Aqui tem o nivel da habilidade ex: D540",
      "agility": "Aqui tem o nivel da habilidade ex: D540",
      "charisma": "Aqui tem o nivel da habilidade ex: D540",
      "luck": "entre S e I",
      "magic": "entre S e I",
      "hunter": "entre S e I"
    }
  ],
  "SkillMagicAndEquipament": [
    { "skill": "Habilidades ativas, pra ser ativada tem requisito, tipo, quando mas dano vc receber mais dano voce vai causar" },
    { "magic": "Habilidades que o usuario ativa, nem todo usuario vai ter magic, racas elfos tem afinidade com magia lembresse disso" },
    { "wapeon": "aqui é o equipamento da pessoa, ela pode n ter espadas e lutar corpo a corpo e tals" },
    {
      "skill": {
        "1": "String",
        "2": "String",
        "3": "String"
      },
      "magic": {
        "1": "String",
        "2": "String",
        "3": "Energy Sight"
      },
      "weapon": {
        "main": "String",
        "secondary": "String"
      }
    }
  ]
};
