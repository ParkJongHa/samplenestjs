import {
  Controller,
  Post,
  Get,
  Request,
  HttpCode,
  Body,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from './auth.public';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signinDto: Record<string, any>) {
    console.log('----------------------------');
    console.log(JSON.stringify(signinDto));
    console.log('----------------------------');
    return this.authService.signIn(signinDto.username, signinDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log('----------------------------');
    console.log(req);
    console.log('----------------------------');
    return req.user;
  }

  @Public()
  @Get('public/profile')
  getPublicProfile(@Request() req) {
    console.log('----------------------------');
    return `user:${req.user}`;
  }
}
