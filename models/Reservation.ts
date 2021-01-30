export default class Reservation {
  public id: number;
  public name: string;
  public email: string;
  public size: number;
  public date: string;
  public time: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.email = '';
    this.size = 0;
    this.date = '';
    this.time = '';
  }
}
