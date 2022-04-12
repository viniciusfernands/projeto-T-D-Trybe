import { Attack, LifePoints, ReceiveDamage, Strength } from './Interfaces';

export default interface SimpleFighter
  extends
  LifePoints,
  Strength, 
  Attack<SimpleFighter>,
  ReceiveDamage {}
