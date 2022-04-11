import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _mageInstanceCount = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.addMageInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addMageInstance() {
    this._mageInstanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this._mageInstanceCount;
  }
}
