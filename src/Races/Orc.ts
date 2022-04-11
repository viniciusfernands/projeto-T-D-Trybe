import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _orcInstanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.addOrcInstance();
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addOrcInstance() {
    this._orcInstanceCount += 1;
  }

  public static createdRacesInstances(): number {
    return this._orcInstanceCount;
  }
}

export default Orc;
