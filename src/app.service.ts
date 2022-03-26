import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { IExceptionError } from './interfaces/error.interface';
import { IUser, IUserSignin } from './interfaces/user.interface';

@Injectable()
export class AppService {
    @Inject('USER_MICROSERVICE') private readonly userService: ClientProxy;
    @Inject('ITEM_MICROSERVICE') private readonly itemService: ClientProxy;

    signin(user: IUserSignin) {
        return this.userService.send<any>({ role: 'user', cmd: 'signin' }, user).pipe(
            catchError((exception: IExceptionError) => {
                throw new HttpException({ message: exception.message }, exception.status);
            }),
        );
    }

    signup(user: IUser) {
        return this.userService.send<any>({ role: 'user', cmd: 'signup' }, user).pipe(
            catchError((exception: IExceptionError) => {
                throw new HttpException({ message: exception.message }, exception.status);
            }),
        );
    }

    getItems(user: { username: string }) {
        return this.itemService.send<any>({ role: 'item', cmd: 'getItems' }, user);
    }
}
