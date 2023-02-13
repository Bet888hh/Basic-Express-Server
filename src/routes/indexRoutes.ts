import { Router } from "express";
import { indexcontroller } from "../controllers/indexController";


class IndexRoutes {
    router: Router= Router();

    constructor(){
       this.config(); 
    }
    config():void{
        this.router.get("/", indexcontroller.index)

    }
}

const indexroutes = new IndexRoutes();
export default indexroutes.router
