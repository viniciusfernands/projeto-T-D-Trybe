import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _elfInstanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.addElfInstance();
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addElfInstance() {
    this._elfInstanceCount += 1;
  }

  public static createdRacesInstances(): number {
    return this._elfInstanceCount;
  }
}

export default Elf;
