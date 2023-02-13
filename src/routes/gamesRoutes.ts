import { Router } from "express";
import { gamesController } from "../controllers/gamesController";

class GamesRoutes {
    router: Router= Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get("/", gamesController.list)
        this.router.get("/:id", gamesController.getOne)
        this.router.post("/",gamesController.create)
        this.router.delete('/:id',gamesController.delete)
        this.router.put('/:id',gamesController.update)
    }
}

const gamesroutes = new GamesRoutes();
export default gamesroutes.router