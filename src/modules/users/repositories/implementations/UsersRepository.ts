import { getRepository, Repository } from 'typeorm';

import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from '../../dtos';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    return await this.repository.findOneOrFail({ where: {id: user_id}, relations: ["games"] });
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return await this.repository.query("SELECT u.id, u.first_name, u.last_name, u.email, u.created_at, u.updated_at FROM users u ORDER BY u.first_name"); // Complete usando raw query
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    return this.repository.query(`SELECT u.id, u.first_name, u.last_name, u.email, u.created_at, u.updated_at FROM users u WHERE lower(first_name) = '${first_name.toLowerCase()}' AND lower(last_name) ='${last_name.toLocaleLowerCase()}'`); // Complete usando raw query
  }
}
