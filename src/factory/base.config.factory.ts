export abstract class BaseConfigFactory<T> {
  public abstract factory(): ConfigModel<T>;

  public config(): T {
    return this.factory().config();
  }
}

export interface ConfigModel<T> {
  config(): T;
}

export class RegisterConfig<T> {
  constructor(private _factoryClass: BaseConfigFactory<T>) {}

  get config(): T {
    return this._factoryClass.config();
  }
}
