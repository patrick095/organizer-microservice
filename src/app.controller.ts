import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { IUser, IUserSignin } from './interfaces/user.interface';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @ApiTags('user')
    @ApiQuery({ name: 'password', required: true })
    @ApiQuery({ name: 'username', required: true })
    @Get('/user')
    signin(@Query() body: IUserSignin) {
        return this.appService.signin(body);
    }

    @ApiQuery({
        name: 'address',
        schema: {
            type: 'object',
            properties: {
                address: {
                    type: 'object',
                    properties: {
                        rua: { type: 'string' },
                        numero: { type: 'number' },
                        bairro: { type: 'string' },
                        cidade: { type: 'string' },
                        cep: { type: 'string' },
                    },
                },
            },
        },
    })
    @ApiQuery({ name: 'phone', required: true })
    @ApiQuery({ name: 'password', required: true })
    @ApiQuery({ name: 'email', required: true })
    @ApiQuery({ name: 'username', required: true })
    @ApiQuery({ name: 'lastname', required: true })
    @ApiQuery({ name: 'name', required: true })
    @ApiTags('user')
    @Post('/user')
    signup(@Query() body: IUser) {
        return this.appService.signup(body);
    }

    @ApiTags('item')
    @ApiQuery({ name: 'username', required: true })
    @Get('/item')
    getItems(@Query() body: { username: string }) {
        try {
            return this.appService.getItems(body);
        } catch (e) {
            return e;
        }
    }
}
