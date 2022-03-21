import { createConnection, getRepository } from "typeorm";
import { Game } from "./modules/games/entities/Game";
import { IGamesRepository } from "./modules/games/repositories/IGamesRepository";
import { GamesRepository } from "./modules/games/repositories/implementations/GamesRepository";
import { User } from "./modules/users/entities/User";
import { UsersRepository } from "./modules/users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "./modules/users/repositories/IUsersRepository";


(async function () {
    const usersRepository: IUsersRepository = new UsersRepository();
    const gamesRepository: IGamesRepository = new GamesRepository();

  // const user = await usersRepository.findUserWithGamesById({user_id});
  // const user = await usersRepository.findUserByFullName({first_name: 'John', last_name: 'Doe'});
  //const user = await usersRepository.findAllUsersOrderedByFirstName();
  //console.log(user);
  //console.log('---------------------------------------------------------')
  
  //const gamesCount = await gamesRepository.countAllGames();
  //const gamesByTitle = await gamesRepository.findByTitleContaining("nEEd");
  //const userByGameId = await gamesRepository.findUsersByGameId("f83f7cdf-2eba-472f-b87c-12bad32c9908");

  //console.log(`Total de Jogos: ${JSON.stringify(gamesCount)}` );

  //console.log(gamesByTitle);
  //console.log(userByGameId);


}
)();

