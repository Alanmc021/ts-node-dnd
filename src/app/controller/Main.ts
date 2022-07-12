import { Request, Response } from "express"
import {mage} from '../../model/Mage'

class Main {
    public home(request: Request, response: Response) {
        return response.json({
            response:  mage.home()
        })
    }   
}

export const main = new Main()

