import { Rule, RuleType } from "_@midwayjs_decorator@2.11.5@@midwayjs/decorator";

export class demoDTO{
  @Rule(RuleType.string())
  str:string
}