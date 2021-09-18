import { createParamDecorator, ExecutionContext } from '@nestjs/common';
export const GetAuthenticatedUser = createParamDecorator((data, context: ExecutionContext)  => {
  const req = context.switchToHttp().getRequest();  
  return req.user
 });