export default class Book {
  constructor({ title, author, format, year, genres, language, rating, pages, imageURL, description }) {
    this.title = title
    this.author = author
    this.format = format
    this.year = year
    this.genres = genres
    this.language = language
    this.rating = rating
    this.pages = pages
    this.imageURL = imageURL
    this.description = description
  }

  getTitle() {
    return this.title
  }

  getAuthor() {
    return this.author
  }

  getFormat() {
    return this.format
  }

  getYear() {
    return this.year
  }

  getGenres() {
    return this.genres
  }

  toJSON() {
    return { ...this }
  }

  static fromJSON(json) {
    let book = new Book({})

    Object.assign(book, json)

    return book
  }
}
