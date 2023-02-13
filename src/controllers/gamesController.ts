import { Request, Response } from "express";
import pool from "../database";
class GamesController {
  // query per visualizare
  public async list(req: Request, res: Response) {
    const games = await pool.query("SELECT * FROM games");
    res.json(games);
  }
  // query che seleziona per id
  public async getOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const games = await pool.query("SELECT * FROM games WHERE  id = ?", [id]);
    res.json(games);
  }
  // query per l'inserimento
  public async create(req: Request, res: Response) {
    await pool.query("INSERT INTO games set ?", [req.body]);
    res.json({ messaggio: "gioco salvato" });
  }
         // query per eliminare 
  public async delete(req: Request, res: Response):Promise<void> {
   const { id } = req.params;
   await pool.query("DELETE FROM games WHERE id=?", [id])
   res.json({title: " gioco eliminato"})
  }

  public async update(req: Request, res: Response):Promise<void> {
   const { id } = req.params;
       await pool.query("UPDATE games set ? WHERE id=?",[req.body,id])
       res.json({title:"game updated"})
  }
}
export const gamesController = new GamesController();
