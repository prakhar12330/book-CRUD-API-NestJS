import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';
import { BookPipe } from './pipes/book.pipe';

@Controller('/book')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get('/find')
  getAllBooks(): Book[] {
    return this.bookService.findAllBooksService();
  }
  
  @Get('/:id')
  findBookById(@Param('id',ParseIntPipe) id:number):string{
    console.log(`Book id is: ${id}`,`And the type of the ID is: ${typeof(id)}`);
    return 'Returned book by ID provided';
  }

  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }
  
  @Post('/add')
  addBook(@Body(new BookPipe()) book: Book): string {
    return this.bookService.addBookService(book);
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: string): string {
    return this.bookService.deleteBookService(bookId);
  }
}
