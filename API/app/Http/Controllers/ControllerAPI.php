<?php

namespace API\Http\Controllers;

use API\Book;
use API\Category;
use Illuminate\Http\Request;
use DB;

class ControllerAPI extends Controller
{
    // BOOKS API

    public function getAllBooks()
    {
        // return Book::paginate(7);

        return DB::table('books')
            ->join('categories', 'books.category', '=', 'categories.id')
            ->select('books.*', 'categories.name as category_name')
            ->orderBy('books.name')
            ->paginate(7);
    }

    public function addBook(Request $request)
    {
        $book = Book::create($request->all());

        $categoryId = $request->input('category');
        $categoryAdd = $this->getCategoryById($categoryId);
        $books_Ids = $categoryAdd->books_ids;
        $books_Ids .=  $book->id.'|';
        $categoryAdd->books_ids = $books_Ids;
        $categoryAdd->save();

        return $book;


    }

    public function getBookById($id)
    {
        return Book::find($id);
    }

    public function editBookById($id, Request $request)
    {
        $book = $this->getBookById($id);
        $book->fill($request->all())->save();
        return $book;
    }

    public function deleteBookById($id)
    {
        $book = $this->getBookById($id);
        $book->delete();
        return $book;
    }

    public function changeAvailability($id, $user)
    {
        $book = $this->getBookById($id);
        if ($book->available) {
            $book->available = false;
            $book->user = $user;
        } else {
            $book->available = true;
            $book->user = '-';
        }
        $book->save();
        return $this->getBookById($id);
    }

    public function findBook($searchTerm)
    {
        return DB::table('books')
            ->join('categories', 'books.category', '=', 'categories.id')
            ->select('books.*', 'categories.name as category_name')
            ->where('books.name', 'LIKE', '%' . $searchTerm . '%')
            ->orWhere('books.author', 'LIKE', '%' . $searchTerm . '%')
            ->orWhere('categories.name', 'LIKE', '%' . $searchTerm . '%')
            ->orWhere('books.published_date', 'LIKE', '%' . $searchTerm . '%')
            ->orderBy('books.name')
            ->paginate(7);


    }


    // CATEGORY API
    public function getAllCategories()
    {
        return Category::all();
    }

    public function addCategory(Request $request)
    {
        return Category::create($request->all());
    }

    public function getCategoryById($id)
    {
        return Category::find($id);
    }

    public function deleteCategoryById($id)
    {
        $category = $this->getCategoryById($id);
        $category->delete();
        return $category;
    }

    public function editCategoryById($id, Request $request)
    {
        $category = $this->getCategoryById($id);
        $category->fill($request->all())->save();
        return $category;
    }


}
