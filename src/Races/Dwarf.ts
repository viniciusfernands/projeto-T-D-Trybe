import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _dwarfInstanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.addDwarfInstance();
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addDwarfInstance() {
    this._dwarfInstanceCount += 1;
  }

  public static createdRacesInstances(): number {
    return this._dwarfInstanceCount;
  }
}

export default Dwarf;
