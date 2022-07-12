import express from "express"
import { router } from "./router"

export class App {

    public server: express.Application = express();

    constructor() {
        this.server;
        this.middleWare();
        this.router();
    }

    private middleWare() {
        this.server.use(express.json())
    }

    private router() {
        this.server.use(router)
    }
}