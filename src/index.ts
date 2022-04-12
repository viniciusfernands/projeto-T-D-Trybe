import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVE, PVP } from './Battle';

// Characters
const player1 = new Character('Patolino O MAGO');
const player2 = new Character('Thomelur');
const player3 = new Character('Yennefer');

for (let i = 0; i < 500; i += 1) player1.levelUp();

// Monsters
const monster1 = new Monster();
const monster2 = new Dragon();

// PVP
const pvp = new PVP(player2, player3);

// PVE
const pve = new PVE(player1, [monster1, monster2]);

//
function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};
