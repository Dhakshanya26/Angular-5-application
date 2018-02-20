
export class MyMenu {
  public name: string;
  public description: string;
  public hide: boolean;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
