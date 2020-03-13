export class User {
    id: number;
    username : string;
    password:string;
    email : string;
    phone : number;
    admin: boolean;
    enabled:boolean;
    constructor(id: number, username:string, password:string, email:string, phone:number,admin: boolean,enabled:boolean){
        this.id=id;
        this.username=username;
        this.password=password;
        this.email=email;
        this.phone=phone;
        this.admin=admin;
        this.enabled=enabled;
    }
}