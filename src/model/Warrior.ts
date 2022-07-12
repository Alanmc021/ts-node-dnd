class Warrior {
    private _Strength: number;
    private _Dexterity: number;
    private _Constitution: number;
    private _Intelligence: number;
    private _Wisdom: number;
    private _Charisma: number;
    private _life: number
    private _ArmorClass: number
    private _Level: number

    constructor() {
        this._Strength = 5;
        this._Dexterity = 5;
        this._Constitution = 5;
        this._Wisdom = 5;
        this._Intelligence = 5;
        this._Charisma = 5,
        this._life = 1000;
        this._ArmorClass = 20;
        this._Level = 1
    }

    public get life(): number {
        return this._life;
    }

    public swordAttack(value:number): number {   
        return  this._Strength  + value ;
    }

    public home(): string {
        return "Atacar com espada"
    }
}
export const warrior = new Warrior();

