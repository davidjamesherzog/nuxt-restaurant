export default class Inventory {
  public id: number;
  public time: string;
  public reservations: string;
  public note: string;

  constructor() {
    this.id = 0;
    this.time = '';
    this.reservations = '';
    this.note = '';
  }
}
