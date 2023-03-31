import dotenv from "dotenv";
import express from "express";

import { mongoConect } from "./database";
import router from "./router/router";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middleware();
    this.database();
    this.router();
  }

  public middleware(): void {
    this.express.use(express.json());
    dotenv.config();
  }

  public async database(): Promise<void> {
    await mongoConect().then(() => console.log("Database connected"));
  }

  public router(): void {
    this.express.use(router);
  }
}


export default App;
