import { Request, Response } from "express";

import { NotFoundError } from "../halpers/apiError";
import { example } from "../model/ExampleMmorpg";
import Mmorpg from "../model/Mmorpg";
import mmorpgUptade from "./mmorpgUptade";
import { validateRank, validateRankString } from "./functions/rankNumber";
import { NewMmorpgInterface } from "../@types/interfaces";

class mmorpgControllers {
  public async find(req: Request, res: Response) {
    const mmorpgs = await Mmorpg.find();

    return res.status(200).json(mmorpgs);
  }

  public async findOne(req: Request, res: Response) {
    const { id } = req.params;

    const mmorpgs = await Mmorpg.findById(id);

    if (mmorpgs === null || mmorpgs === undefined || !mmorpgs)
      throw new NotFoundError("Not Found");

    return res.json(mmorpgs);
  }

  public async created(req: Request, res: Response) {
    const body = req.body;
    const users: NewMmorpgInterface = body;

    const chars = users.Characterístics[0];
    const profStat = users.ProfessionalStatus[0];
    const habil = users.Habilidades[0];
    const skiMagEqui = users.SkillMagicAndEquipament[0];


    // Aba para Caracteristicas
    if (chars.race === "human" || chars.race === "humano")
      users.SkillMagicAndEquipament[0].magic = null;

    // Aba para Habilidades
    // Validando Rank da pessoa se nao tiver a letra vai ser acrescentado
    habil.strength = validateRank(habil.strength);
    habil.endurance = validateRank(habil.endurance);
    habil.dexterity = validateRank(habil.dexterity);
    habil.agility = validateRank(habil.agility);
    habil.charisma = validateRank(habil.charisma);

    habil.luck = validateRankString(habil.luck);
    habil.magic = validateRankString(habil.magic);
    habil.hunter = validateRankString(habil.hunter);
    habil.abnormalResistance = validateRankString(habil.abnormalResistance);
    habil.magicResistance = validateRankString(habil.magicResistance);

    users.Habilidades[0] = habil;

    // Aba para Profissionais Status so ver se ela ta viva mesmo hehe

    // Aba para Skill, Magias e Equipamentos

    // const mmorpgs = await Mmorpg.create(users);

    return res.json({ mmorpgs: " Ainda tem fase de preparo" });
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    if (!await Mmorpg.findById(id))
      return res.status(404).json({ message: "Not Found" });

    await Mmorpg.deleteOne({ _id: id });

    return res.status(200).json({ message: "Sucessy with delete" });
  }

  public async update(req: Request, res: Response) {
    const {
      ProfessionalStatus,
      Habilidades,
      Characterístics,
      PersonalStatus,
      SkillMagicAndEquipament
    } = req.body;
    const { id } = req.params;

    const mmorpgs = await Mmorpg.findById(id);

    if (!mmorpgs)
      throw new NotFoundError("Not Found");

    if (ProfessionalStatus) {
      mmorpgs.ProfessionalStatus[0] = await mmorpgUptade.ProfessionalStatus(ProfessionalStatus[0], id);
      mmorpgs.save();
    }

    if (Characterístics) {
      mmorpgs.Characterístics[0] = await mmorpgUptade.Characterístics(Characterístics[0], id);
      mmorpgs.save();
    }

    if (Habilidades) {
      mmorpgs.Habilidades[0] = await mmorpgUptade.Habilidades(Habilidades[0], id);

      mmorpgs.save();
    }

    if (PersonalStatus) {
      mmorpgs.PersonalStatus = await mmorpgUptade.PersonalStatus(PersonalStatus, id);

      mmorpgs.save();
    }

    if (SkillMagicAndEquipament) {
      mmorpgs.SkillMagicAndEquipament[0] = await mmorpgUptade.SkillMagicAndEquipament(SkillMagicAndEquipament[0], id);

      mmorpgs.save();
    }

    return res.json({ mmorpgs: mmorpgs.SkillMagicAndEquipament[0] });
  }

  public example(req: Request, res: Response) {
    return res.json(example);
  }
}

export default new mmorpgControllers();
