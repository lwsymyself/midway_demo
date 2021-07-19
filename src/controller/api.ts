import { Inject, Controller, Provide, Query, Validate, Get, Body, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { demoDTO } from '../dto/Demo';
import { IGetUserResponse } from '../interface';
import { UserService } from '../service/user';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/get_user')
  @Validate()
  async getUser(@Body(ALL)str:demoDTO) {
    await this.userService.getUser({uid:str.str});
  }
}
