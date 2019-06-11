<?php

namespace API;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $table = 'books';
    protected  $fillable = array('name','author','category','published_date','user','available');
}
