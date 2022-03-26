import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @ApiTags('user')
    @ApiQuery({ name: 'username', required: true })
    @ApiQuery({ name: 'password', required: true })
    @Get('/user')
    signin(@Query() body: { username: string; password: string }) {
        return this.appService.signin(body);
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
