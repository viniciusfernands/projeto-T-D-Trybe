import Energy from '../Energy';
import { Attack, LifePoints, ReceiveDamage, Strength } from './Interfaces';
import SimpleFighter from './SimpleFighter';

interface Fighter
  extends
  LifePoints,
  Strength,
  Attack<SimpleFighter>,
  ReceiveDamage {
  defense: number,
  energy?: Energy,
  special(enemy: Fighter): void,
  levelUp(): void,
}

export default Fighter;