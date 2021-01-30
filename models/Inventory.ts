export default class Inventory {
  public id: number;
  public time: string;
  public reservations: number;
  public note: string;

  constructor() {
    this.id = 0;
    this.time = '';
    this.reservations = 0;
    this.note = '';
  }
}
