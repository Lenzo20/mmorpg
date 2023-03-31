import { Router } from "express";
import { NotFoundError } from "../halpers/apiError";
import mmorpgControllers from "../controllers/mmorpgControllers";

const router = Router();

router.get("/test", () => {
  throw new NotFoundError("Routa de error");
});

router.get("/findRpg", mmorpgControllers.find);

export default router;
