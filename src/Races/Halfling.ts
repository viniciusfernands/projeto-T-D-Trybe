import Race from './index';

class Halfling extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
