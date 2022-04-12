export interface LifePoints {
  lifePoints: number;
}

export interface Strength {
  strength: number;
}

export interface Attack<T> {
  attack(enemy: T): void;
}

export interface ReceiveDamage {
  receiveDamage(attackPoints: number): void;
}
