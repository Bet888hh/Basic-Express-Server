import {Request,Response} from 'express'

class IndexController {

 public index(req:Request, res:Response){
    res.send('elo')
}

}

export const indexcontroller = new IndexController();