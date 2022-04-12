import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _enviroment: SimpleFighter[],
  ) {
    super(_player);
  }

  private static winCondition(fights: number[]) {
    const win = fights.every((fight) => fight === 1);

    if (win) {
      return 1;
    }

    return -1;
  }

  fight(): number {
    const fightPath = this._enviroment.map((monster) => {
      this._player.attack(monster);
      monster.attack(this._player);

      if (this._player.lifePoints !== -1 && monster.lifePoints !== -1) {
        return this.fight();
      }
      
      if (this._player.lifePoints === -1) {
        return -1; // -1 representa a vitoria do ambiente
      }
  
      return 1; // 1 representa a vitoria do player1
    });

    return PVE.winCondition(fightPath);
  }
}
