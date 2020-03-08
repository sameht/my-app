export class Person {
    private _name : string;
    private _age : number;
    private _adress : string;
    private _email : string;

    constructor(name: string, age: number, adress: string, email: string){
        this._name = name;
        this._age = age;
        this._adress = adress;
        this._email = email;
    };

    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }


    public get age() : number {
        return this._age;
    }
    public set age(v : number) {
        this._age = v;
    }

    
    public get adress() : string {
        return this._adress;
    }
    public set adress(v : string) {
        this._adress = v;
    }
    
    
    public get email() : string {
        return this._email;
    }
    public set email(v : string) {
        this._email = v;
    }
    
}
