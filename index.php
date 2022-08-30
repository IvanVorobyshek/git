<?php

namespace App;

require_once __DIR__.'/vendor/autoload.php';
echo '1';
use App\Book\Book;
$book = new Book();
echo $book->path();
?>