import { Logger, Provide } from '@midwayjs/decorator';
import { IMidwayWebNext, IWebMiddleware } from '@midwayjs/web';
import { Context } from 'egg';
import { IMidwayLogger } from '@midwayjs/logger';
export enum ERROR_RESPONSE {
  '未知错误' = -1,
  'ok',
  'z注册手机号重复',
  'd短信验证码失效',
  'h会话验证失败',
  'h会话过期',
  'b标签长度应为1-8字符',
  'b博单名称应为1-15字符',
  'w网页标题长度为1-30字符',
  'w网页名称长度为1-30字符',
  'w网页地址不能为空',
  'w网页作者名称长度为1-30字符',
  'w网页不存在',
  'b博单标签错误',
  'b博单中网页id错误',
  'b博单不存在',
  'b博单网页不能为空',
  'y用户不存在',
}

@Provide()
export class ResponseMiddleWare implements IWebMiddleware {
  @Logger()
  logger: IMidwayLogger;
  resolve() {
    return async (ctx: Context, next: IMidwayWebNext) => {
      try {
        this.logger.info('\nip:%s \nurl:%s', ctx.ip, ctx.url);
        await next();
      } catch (error) {
        //全局处理Response
        ctx.status = 200;
        if (isNaN(error.message)) {
          this.logger.error(error);
          ctx.body = {
            code: -1,
            msg: ERROR_RESPONSE[-1],
          };
        } else {
          this.logger.warn(
            '\nip:%s \nurl:%s \nerror:',
            ctx.ip,
            ctx.url,
            ERROR_RESPONSE[error.message]
          );
          ctx.body = {
            code: error.message,
            msg: ERROR_RESPONSE[error.message].slice(1),
          };
        }
      }
    };
  }
}
