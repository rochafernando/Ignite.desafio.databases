import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {        
    return this.repository.createQueryBuilder("games").where("games.title ilike :title", {title: `%${param}%`}).getMany();    
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return this.repository.query("SELECT COUNT(ID) FROM GAMES"); // Complete usando raw query
  }

  async findUsersByGameId(id: string): Promise<User[]> {            
    const game = await this.repository
    .createQueryBuilder("games").innerJoin('users_games_games','ug', 'ug.gamesId = games.id').innerJoinAndMapMany("games.users", "users","users","ug.usersId=users.id").where("games.id= :Id", { Id: id }).getOneOrFail();
    return game.users;
      // Complete usando query builder
  }
}
