# The library
**Application Requirements:**  
  

 - Laravel 5.4
 - Angular CLI 
 - Mysql 


# Run App
Create MySql table with name: ***thelibrary***

**Verify** the MySql connection on the file 

    API/.env
If you run it with WAMPP it should be:

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=thelibrary
    DB_USERNAME=root
    DB_PASSWORD=   
  
To run the app position a console to the API folder and run:

    php artisan serve

The console will show:

    Laravel development server started: <http://127.0.0.1:8000>

To open the Visual Application you need to go to:

    http://127.0.0.1:8000/LibraryApp




## Edit Angular App

The angular app can be modified by accessing to the UI folder and folowwing this steps

 1. `npm install`
 2. `npm start` (This will start the visual app on http://localhost:1421/
 3. Every change that you generate it will automatically change on the web page.
 4. When you finish run: `ng build --prod --base-href /LibraryApp/`
 5. It will generate folder **dist/UI**
 6. Copy all the files and put it under `The-library\API\public\LibraryApp\`
 7. Run again `php artisan serve`
	
## Contact
Name: Carlos Gabriel Santana Pulido
Mail: cgsp94@gmail.com
