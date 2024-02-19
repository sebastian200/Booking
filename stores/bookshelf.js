import { defineStore } from "pinia"

import { useBooksStore } from "~/stores/books.js"

import Books from "../classes/Books.js"

export const useBookshelfStore = defineStore("bookshelf", {
  state: () => ({
    // For some reason, books can only contain POJOs
    books: []
  }),
  getters: {
    /*
     *
     */
    getBooks() {
      return this.books.map(books => {
        return Books.fromJSON(books)
      })
    },
    /*
     *
     */
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
    /*
     * Returns
     * - Books | the books at the index 
     * - null       | the index was out of bounds
     */
    getBooks(index) {
      if(index < 0 || index > this.books.length) {
        return null
      }
      return Books.fromJSON(this.books[index])
    },
    /*
     * Returns
     * - index | the index of the books with the hash
     * - (-1)  | no books has the inputted hash
     */
    getHashBooksIndex(hash) {
      for(let index in this.books) {
        let books = this.getBooks(index)

        let booksHash = books?.getBook()?.getHash()

        if(booksHash === hash) return index
      }
      return -1
    },
    /*
     * Params:
     * - books | the books to add
     *
     * Returns:
     * - true  | the books was successfully added
     * - false | something went wrong
     */
    addBooks(books) {
      let hash = books?.getBook()?.getHash()

      if(hash == null) {
        console.log("Trying to add books with hash null")
        return false
      }

      for(let current of this.getBooks) {
        if(current?.getBook()?.getHash() === hash) {
          return false
        }
      }
      this.books.push(books.toJSON())

      return true
    },
    /*
     * Params:
     * - hash | the book hash for the effected books
     */
    removeBooks(hash) {
      let index = this.getHashBooksIndex(hash)

      if(index === -1) return false

      this.books.splice(index, 1)

      // Remove the book all toghether
      const books = useBooksStore()
      const { $books } = useNuxtApp()

      // Read the current books
      $books.read()
      .then(json => {
        books.fromJSON(json)
      })
      .catch(error => {
        console.log(error)
      })

      books.removeBook(hash)

      // Write the updated books
      $books.write(books.toJSON())

      return true
    },

    /*
     * Params:
     * - hash | the book hash for the effected books
     *
     * Returns
     * - true  | the books was successfully downvoted
     * - false | something went wrong
     */
    returnBooks(hash) {
      let index = this.getHashBooksIndex(hash)

      let books = this.getBooks(index)

      if(books == null) return false

      books.returnBook()

      this.books[index] = books.toJSON()

      return true
    },
    /*
     * Params:
     * - hash | the book hash for the effected books
     *
     * Returns
     * - true  | the books was successfully upvoted
     * - false | something went wrong
     */
    lendBooks(hash) {
      let index = this.getHashBooksIndex(hash)

      let books = this.getBooks(index)

      if(books == null) return false

      books.lend()

      this.books[index] = books.toJSON()

      return true
    },
    /*
     *
     */
    setListOfBooks(newListOfBooks) {
      this.listOfBooks = newListOfBooks;
    },
    /*
     *
     */
    loadListOfBooks() {
      const { $bookshelf } = useNuxtApp()
      $bookshelf.read().then(Response => {
        this.fromJSON(Response);
      });
    },
    /*
     *
     */
    saveListOfBooks() {
      const { $bookshelf } = useNuxtApp()
      $bookshelf.write(this.toJSON()).then (Response => console.log(Response));

    },
    /*
     *
     */
    search(title) {
      let filteredBooks = this.books.slice();
      if (title !== '') {

        filteredBooks = filteredBooks.filter(books => books.value.book.title.includes(title));

      }
      return filteredBooks;
    },
    /*
     *
     */
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
    },
    /*
     * 
     */
    toJSON() {
      return {
        bookss: this.bookss
      }
    },
    /*
     * Params
     * - json | the json object to deserialize
     */
    fromJSON(json) {
      try {
        this.bookss = json.bookss ?? []
      }
      catch(error) {
        console.log(error)
      }
    },
  }
})
