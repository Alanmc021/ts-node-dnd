class Mage {
    private _Strength: number;
    private _Dexterity: number;
    private _Constitution: number;
    private _Intelligence: number;
    private _Wisdom: number;
    private _Charisma: number;
    private _life:number
    private _ArmorClass:number
    private _Level:number

    constructor() {
        this._Strength = 5;
        this._Dexterity = 5;
        this._Constitution = 5;
        this._Wisdom = 5;
        this._Intelligence = 5;
        this._Charisma = 5,
        this._life = 1000;
        this._ArmorClass=17;
        this._Level = 1
    }

    
    public get life() : number {
        return this._life;
    }
    
    
    public set life(damage : number) {
        this._life -= damage;
    }
    
    
    
    public get amorClass() : number {
        return this._ArmorClass;
    }
    
    
    public fireAttack(): string {
        return `seu ataque foi de 10 em cima do mago`
    }

    public home(): string {
        return "Bola de fogo"
    }
}
export const mage = new Mage();

