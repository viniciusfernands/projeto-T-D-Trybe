import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halflingInstanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.addHalflingInstance();
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addHalflingInstance() {
    this._halflingInstanceCount += 1;
  }

  public static createdRacesInstances(): number {
    return this._halflingInstanceCount;
  }
}

export default Halfling;
