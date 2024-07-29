import { Controller, Get, Query } from '@nestjs/common';
import { LoginService} from './login.service';
import { UserDto } from './Dto/user.dto';

@Controller('login')
export class LoginController {
  private loginService: LoginService;
  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }
  @Get()
  getAllInf() {
    return this.loginService.getAllIuser();
  }

  @Get('/inf') //회원 정보 알기
  findone(@Query() userDto: UserDto) {
    return this.loginService.finduser(userDto);
  }
}
