export interface IUser {
    name: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    phone: string;
    address: IAddress;
}

export interface IAddress {
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    cep: string;
}

export interface IUserSignin {
    username: string;
    password: string;
}
