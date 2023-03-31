import { Response, Request } from "express";

import Mmorpg from "../model/Mmorpg";

class mmorpgControllers {
  public async find(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    const mmorpgs = await Mmorpg.find();

    return res.status(200).json(mmorpgs);
  }

  public async created(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    const body = req.body;

    // const mmorpgs = await

    return res.json({ message: "em andamento" });
  }
}

export default new mmorpgControllers();
