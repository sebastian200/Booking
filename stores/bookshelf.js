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
      return this.books.map(object => {
        return {
          ...object,
          value: Suggestion.fromJSON(object.value)
        }
      })
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
    },

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
      const { $bookshelf } = useNuxtApp()
      this.books.push({
        id: this.getNewId(),
        value: books.toJSON()
      })
      $bookshelf.write(this.toJSON()) 
      console.log(this.books)
   
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

        this.books = json.books
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

search(title) {
  let filteredBooks = this.books.slice();
  if (title !== '') {

    filteredBooks = filteredBooks.filter(books => books.value.book.title.includes(title));

  }
  return filteredBooks;
},

filterBooks(formData = {
  title: '',
  author: '',
  type: '',
  minPages: 0,
  maxPages: Infinity,
  genres: []

}, books) {

  let title = formData.title
  let author = formData.author
  let type = formData.type
  let minPages = formData.minPages
  let maxPages = formData.maxPages
  let genres = formData.genres
  let format = formData.format
  let data = books;
  if (data === undefined || data.value.length === 0) {
    console.log('undefined')
    return [];
  }
  let filteredBooks = data.value.slice();


  if (title !== '') {

    filteredBooks = filteredBooks.filter(books => books.value.book.title.includes(title));

  }
  if (author !== '') {
    filteredBooks = filteredBooks.filter(books => books.value.book.author.includes(author));
  }
  if (type !== '') {
    filteredBooks = filteredBooks.filter(books => books.value.book.type === type);
  }
  if (format !== '') {
    filteredBooks = filteredBooks.filter(books => books.value.book.format === format);
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
