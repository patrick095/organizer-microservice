import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/user')
    signin(@Query() body: { username: string; password: string }) {
        try {
            return this.appService.signin(body);
        } catch (e) {
            return e;
        }
    }

    @Get('/item')
    getItems(@Query() body: { username: string }) {
        try {
            return this.appService.getItems(body);
        } catch (e) {
            return e;
        }
    }
}
