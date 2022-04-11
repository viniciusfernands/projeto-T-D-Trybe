import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _necromancerInstanceCount = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.addNecromancerInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addNecromancerInstance() {
    this._necromancerInstanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this._necromancerInstanceCount;
  }
}
