<?php
    namespace App\Book;

    class Book{
        public function path(){
            return __CLASS__.':'.__FILE__;
        }

        public function say(){
            echo 'Say Hello to my little friend!';
        }

    }

?>