import { defineStore } from "pinia"

import Book from "../classes/Book.js"
import Books from "../classes/Books.js"

const booksCompare = (first, second) => {
  /*
  let firstJson = first.toJSON()
  let secondJson = second.toJSON()

  return JSON.stringify(firstJson) === JSON.stringify(secondJson)
  */
  return first.id === second.id
}

export const useBookshelfStore = defineStore("bookshelf", {
  state: () => ({
    books: [], //add id later
  }),
  getters: {
    getBooks() {
      return this.books.map(book => Book.fromJSON(book)) // convert to Book class object from json
    },
    getSortedBooks(sortOption = title) {
      const books = this.books
      switch (sortOption.value) {
        case 'title':
          return books.sort((a, b) => a.book.title.localeCompare(b.book.title))
        case 'pages':
          return books.sort((a, b) => a.book.pages - b.book.pages)
        case 'year':
          return books.sort((a, b) => a.book.year - b.book.year)
        default:
          return books
      }
    }

  },


  actions: {

    getBook(index) {
      let books = this.books[index]
      books.value = Books.fromJSON(books.value)

      return books
    },
    
    getNewId() {
      let id = 0
      for(let books of this.books.sort((a, b) => a.id - b.id)) {
        if(id < books.id) break
        else id++
      }

      return id
    },

    addBooks(books) {
      // For some reason, books can only contain POJOs
      console.log(books)
      this.books.push({
        id: this.getNewId(),
        value: books.toJSON()
      })
   
    },

    removeBooks(books) {
      this.books.forEach((current, index) => {
        // Maybe add booksCompare
        if(current.id == books.id) {
          this.books.splice(index, 1)
        }
      })
    },

    returnBook(books) {
      for(let index in this.books) {
       
        
        let current = this.getBook(index)
       
        if(booksCompare(current, books)) {
          current.value.returnBook()
          console.log("hello")
          this.books[index] = {
            id: current.id,
            value: current.value.toJSON()
          }
        }
      }
    },
    lendBook(books) {
      for(let index in this.books) {
        let current = this.getBook(index)
    
        if(booksCompare(current, books)) {
          current.value.lend()
          this.books[index] = {
            id: current.id,
            value: current.value.toJSON()
          }
        }
      }
      
    },

    toJSON() { // convert to json
      return {
        books: this.books.map(book => book) 
      }
    },
    fromJSON(json) { // convert from json
      try {
        json.books.map(book => this.books.push(book))
      }
      catch (error) {
        console.log("Could not deserialize json to books")
        // console.log(error)
      }
    },

    // If no filter is used, this equals getBooks

    setListOfBooks(newListOfBooks) {
      this.listOfBooks = newListOfBooks;
    },

    loadListOfBooks() {
      const { $bookshelf } = useNuxtApp()
      $bookshelf.read().then(Response => {
        this.fromJSON(Response);
      });
    },

    saveListOfBooks() {
      const { $bookshelf } = useNuxtApp()
      $bookshelf.write(this.toJSON()).then (Response => console.log(Response));
      
    },

filterBooks(title = '', author = '', type = '', minPages = 0, maxPages = Infinity, genres = []) {
  let filteredBooks = this.books;
  if (filteredBooks === undefined) {
    console.log('undefined')
    return [];
  }
  console.log('hello')
  if (title !== '') {

    filteredBooks = filteredBooks.filter(books => books.value.book.title.startsWith(title));
    console.log(filteredBooks)
  }
  if (author !== '') {
    filteredBooks = filteredBooks.filter(books => books.value.book.author.startsWith(author));
  }
  if (type !== '') {
    filteredBooks = filteredBooks.filter(books => books.value.book.type === type);
  }
  if (minPages !== 0) {
    filteredBooks = filteredBooks.filter(books => books.value.book.pages >= minPages);
  }
  if (maxPages !== Infinity) {
    filteredBooks = filteredBooks.filter(books => books.value.book.pages <= maxPages);
  }
  if (genres.length > 0) {
    filteredBooks = filteredBooks.filter(books => books.value.book.genres.some(genre => genres.includes(genre)));
  }
  return filteredBooks;
}

    
  },

})
