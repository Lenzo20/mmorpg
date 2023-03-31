import { Request, Response } from "express";

import Mmorpg from "../model/Mmorpg";
import { NotFoundError } from "../halpers/apiError";

class mmorpgControllers {
  public async find(req: Request, res: Response) {
    const mmorpgs = await Mmorpg.find();

    return res.status(200).json(mmorpgs);
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

    if (ProfessionalStatus)
      mmorpgs.ProfessionalStatus = ProfessionalStatus;

    if (Habilidades)
      mmorpgs.Habilidades = Habilidades;

    if (Characterístics)
      mmorpgs.Characterístics = Characterístics;

    mmorpgs.save();

    return res.status(200).json(mmorpgs);
  }
}

export default new mmorpgControllers();
