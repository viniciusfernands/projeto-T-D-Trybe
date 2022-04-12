import Energy from '../Energy';
import { Attack, LifePoints, ReceiveDamage, Strength } from './Interfaces';

interface Fighter
  extends
  Attack<Fighter>,
  ReceiveDamage, 
  LifePoints,
  Strength {
  defense: number,
  energy?: Energy,
  special(enemy: Fighter): void,
  levelUp(): void,
}

export default Fighter;