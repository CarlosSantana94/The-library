<?php

namespace API;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected  $fillable = array('name','description','books_ids');
}