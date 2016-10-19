export class Album {
  public selectedForCart: boolean = false;
  constructor (
    public name: string,
    public artist: string,
    public price: number,
    public genre: string
  ) {}
}