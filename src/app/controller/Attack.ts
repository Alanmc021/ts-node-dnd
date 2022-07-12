import { Request, Response } from "express"
import { warrior } from "../../model/Warrior"
import { mage } from "../../model/Mage"


class Attack {
    public home(request: Request, response: Response) {        
        const { typePlayer, damage } = request.body;
        
        if (warrior.swordAttack(damage) + damage > mage.amorClass) {   
            //console.log(`Ataque do warrior foi de:${warrior.swordAttack() + damage}`);                     
            return response.json({
                response: `Ataque foi certeiro -- DANO:${warrior.life}`
            })
        }
        return response.json({
            response: `o golper nao acertou ${mage.amorClass}`
        })
    }
}

export const attack = new Attack()

//quem eu irei atacar ? 
//quantos pontos de dano esse ataque causaou
//tipo de play atacate 
//dano permanente do ataque 