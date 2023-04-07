import { Request, Response } from "express";

import { NotFoundError } from "../halpers/apiError";
import Mmorpg from "../model/Mmorpg";
import { example } from "../model/ExampleMmorpg";
import mmorpgUptade from "./mmorpgUptade";

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

    const mmorpgs = await Mmorpg.create(body);

    return res.json(mmorpgs);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    if (!await Mmorpg.findById(id))
      return res.status(404).json({ message: "Not Found" });

    await Mmorpg.deleteOne({ _id: id });

    return res.status(200).json({ message: "Sucessy with delete" });
  }

  public async update(req: Request, res: Response) {
    const { ProfessionalStatus, Habilidades, Characterístics } = req.body;
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

    return res.json({ mmorpgs });

    // if (ProfessionalStatus)
    //   mmorpgs.ProfessionalStatus = ProfessionalStatus;

    // if (Habilidades)
    //   mmorpgs.Habilidades = Habilidades;

    // if (Characterístics)
    //   mmorpgs.Characterístics = Characterístics[0];

    // mmorpgs.save();

    // return res.status(200).json({ ProfessionalStatus, Habilidades, Characterístics });
  }

  public example(req: Request, res: Response) {
    return res.json(example);
  }
}

export default new mmorpgControllers();
