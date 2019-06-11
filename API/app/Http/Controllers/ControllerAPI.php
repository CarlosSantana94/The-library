<?php

namespace API\Http\Controllers;

use API\Book;
use Illuminate\Http\Request;

class ControllerAPI extends Controller
{
    public function getAllBooks()
    {
        return Book::paginate(7);
    }

    public function addBook(Request $request)
    {
        return Book::create($request->all());
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

    public function changeAvailability($id,$user)
    {
        $book = $this->getBookById($id);
        if ($book->available){
            $book->available = false;
            $book->user = $user;
        }else{
            $book->available = true;
            $book->user = '-';
        }
        $book->save();
        return $this->getBookById($id);
    }

    public function findBook($searchTerm){
        return Book::where('name','LIKE','%'.$searchTerm.'%')
            ->orWhere('author','LIKE','%'.$searchTerm.'%')
            ->orWhere('category','LIKE','%'.$searchTerm.'%')
            ->orWhere('published_date','LIKE','%'.$searchTerm.'%')
            ->orderBy('name')
            ->paginate(7);


    }


}
