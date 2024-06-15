import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class BookGuard implements CanActivate{
    public key:string = "ABC37313312330XYZ";
    canActivate(context: ExecutionContext): boolean{
        let ctx=context.switchToHttp();
        let request=ctx.getRequest<Request>();
        if(request.header("key")==undefined) return false;
        return request.header("key")===this.key;
        
    }
}