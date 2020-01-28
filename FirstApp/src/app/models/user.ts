export class User {
    id: number;
    name : string;
    password1:string;
    password2:string;
    email : string;
    phone : number;
    constructor(id: number, name:string, password1:string, password2:string, email:string, phone:number){
        this.id=id;
        this.name=name;
        this.password1=password1;
        this.password2=password2;
        this.email=email;
        this.phone=phone;
    }
}