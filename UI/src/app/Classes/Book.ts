export class Book {
  id: string;
  name: string;
  author: string;
  category: string;
  publish_date: string;
  user: string;
  is_available: boolean;


  constructor(name: string, author: string, category: string, publish_date: string) {
    this.name = name;
    this.author = author;
    this.category = category;
    this.publish_date = publish_date;
    this.user = '';
    this.is_available = true;
  }


}
