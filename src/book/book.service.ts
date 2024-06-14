import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService{
    public books:Book[]=[]; //An empty array "books" of type Book
    
    //add a book
    addBookService(book:Book):string
    {
        book.id=uuidv4();
        this.books.push(book);
        return 'The book is added successfully';
    }
    //update a book
    updateBookService(book:Book):string{
        let index=this.books.findIndex((currentBook=>{
            return currentBook.id==book.id;
        }))
        this.books[index]=book;
        return 'The book is updated successfully';
    }
    //delete a book
    deleteBookService(bookId:string):string{
        this.books=this.books.filter((book)=>{
            return book.id != bookId;
        })
        return 'The book is deleted successfully';
    }
    //find all books
    findAllBooksService():Book[]
    {
        return this.books;
    }
}