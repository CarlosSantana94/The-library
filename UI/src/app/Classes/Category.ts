export class Category {
  id: string;
  name: string;
  description: string;
  booksIds: string;


  constructor(name: string, description: string, booksIds: string) {
    this.name = name;
    this.description = description;
    this.booksIds = booksIds;
  }


}
