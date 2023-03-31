import "express-async-errors";

import App from "./app";
import { ErrosMiddleware } from "./middlewares/erros";


const app = new App().express;

app.use(ErrosMiddleware);

app.listen(8080, () => console.log("Listening on port"));
