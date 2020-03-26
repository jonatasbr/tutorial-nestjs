import { Injectable } from '@nestjs/common';
import { User } from './model/user.entity';

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Jonatas',
      email: 'jon@jon.com',
    },
    {
      id: 2,
      name: 'José',
      email: 'jose@gmail.com',
    },
    {
      id: 3,
      name: 'Maria',
      email: 'maria@gmail.com',
    },
  ];

  findAll(): User[] {
    return this.users;
  }
}
