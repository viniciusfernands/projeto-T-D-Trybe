import Energy from '../Energy';
import { Attack, LifePoints, ReceiveDamage, Strength } from './Interfaces';

interface Fighter
  extends
  LifePoints,
  Strength,
  Attack<Fighter>,
  ReceiveDamage {
  defense: number,
  energy?: Energy,
  special(enemy: Fighter): void,
  levelUp(): void,
}

export default Fighter;