import { Attack, LifePoints, ReceiveDamage, Strength } from './Interfaces';

export default interface SimpleFighter
  extends
  Attack<SimpleFighter>,
  ReceiveDamage,
  LifePoints,
  Strength {}
