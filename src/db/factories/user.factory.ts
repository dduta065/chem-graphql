import { Injectable } from '@nestjs/common';
import * as faker from 'faker';
import { User } from 'src/users/user.entity';

@Injectable()
export class UserFactory {
  //

  makeUser(userData?: UserData) {
    const user = new User();
    user.password = userData?.password ?? faker.lorem.word();
    user.username = userData?.username ?? faker.internet.userName();

    return user;
  }
}

interface UserData {
  username: string;
  password: string;
}