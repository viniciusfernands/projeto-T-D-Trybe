import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _warriorInstanceCount = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.addWarriorInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addWarriorInstance() {
    this._warriorInstanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this._warriorInstanceCount;
  }
}
