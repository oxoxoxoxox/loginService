import { Injectable } from '@nestjs/common';
import { UserDto } from './Dto/user.dto';

export interface User {
  name: string;
  id: string;
  pw: string;
}

@Injectable()
export class LoginService {
  public users: User[] = [
    {
      name: '김영진',
      id: 'kyj01',
      pw: '20203202',
    },
    {
      name: '정재록',
      id: 'jjr02',
      pw: '20210000',
    },
    {
      name: '배성준',
      id: 'starjune',
      pw: '20170000',
    },
  ];
  getAllIuser() {
    return this.users;
  }

  finduser(userDto: UserDto): string {
    const { usrID, usrPW } = userDto;
    const result = this.users.find((user) => user.id === usrID);
    if (result) {
      if (usrPW === result.pw) {
        return `${result.name}님 환영합니다.`;
      } else return `로그인에 실패했습니다...`;
    }
  }
}
