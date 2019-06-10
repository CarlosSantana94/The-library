export class Book {
  id: string;
  name: string;
  author: string;
  category_id: string;
  publish_date: string;
  user: string;
  available: boolean;


  constructor(name: string, author: string, category: string, publish_date: string) {
    this.name = name;
    this.author = author;
    this.category_id = category;
    this.publish_date = publish_date;
    this.user = 'NO';
    this.available = true;
  }


}
