import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _rangerInstanceCount = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.addRangerInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addRangerInstance() {
    this._rangerInstanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this._rangerInstanceCount;
  }
}
