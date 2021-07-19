import { Aspect, IMethodAspect, JoinPoint, Provide } from "@midwayjs/decorator";
import { APIController } from "../controller/api";

@Provide()
@Aspect([APIController])
export class ResponseAspect implements IMethodAspect {
  async afterReturn(point: JoinPoint, result: any) {
    return {
      state: 0,
      msg: 'ok',
    };
  }
}