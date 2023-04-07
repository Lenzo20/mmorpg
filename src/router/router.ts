import { Router } from "express";

import mmorpgControllers from "../controllers/mmorpgControllers";
import { NotFoundError } from "../halpers/apiError";

const router = Router();

router.get("/test", () => {
  throw new NotFoundError("Routa de error");
});

router.get("/findRpg", mmorpgControllers.find);
router.get("/findRpg/:id", mmorpgControllers.findOne);
router.post("/findRpg", mmorpgControllers.created);
router.delete("/findRpg/:id", mmorpgControllers.delete);
router.put("/findRpg/:id", mmorpgControllers.update);

router.get("/example", mmorpgControllers.example);
export default router;
