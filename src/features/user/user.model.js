export class UserModel{
    constructor(name, email, password, type){
        this.name= name;
        this.email= email;
        this.password= password;
        this.type= type;

    }

    static SignUp(name, email, password, type){
        const newUser = new UserModel(name, emial, password, type);
        users.push(newUser);
    }

    static SignIn(email, password){
        const user= users.find((u)=> u.email ==email && u.password == password);
        return user;
    }
}

var users = [
    {
        name: 'Seller User',
        email:'seller@ecom.com',
        password:'Password1',
        type:'seller'
    }
]