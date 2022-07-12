import { Router } from "express";
import { main } from "./app/controller/Main";
import { attack } from "./app/controller/Attack";

const router: Router = Router();

//ROTAS
router.get("/" , main.home);
router.post("/attack" , attack.home);
 


export { router }