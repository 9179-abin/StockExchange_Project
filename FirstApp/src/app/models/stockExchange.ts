export class STOCK {
    id: number;
    name : string;
    aboutSE:string;
    address:string;
    constructor(id: number, name:string, aboutSE:string, address:string){
        this.id=id;
        this.name=name;
        this.aboutSE=aboutSE;
        this.address=address;
    }
}