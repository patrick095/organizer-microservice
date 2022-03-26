import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
    @Inject('USER_MICROSERVICE') private readonly userService: ClientProxy;
    @Inject('ITEM_MICROSERVICE') private readonly itemService: ClientProxy;

    getHello(): string {
        return 'Hello World!';
    }

    signin(user: { username: string; password: string }) {
        return this.userService.send<any>({ role: 'user', cmd: 'signin' }, user);
    }

    getItems(user: { username: string }) {
        return this.itemService.send<any>({ role: 'item', cmd: 'getItems' }, user);
    }
}
