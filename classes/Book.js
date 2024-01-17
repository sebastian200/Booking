export default class Book {
  constructor(title, author, format, year, genres) {
    this.title = title
    this.author = author
    this.format = format
    this.year = year
    this.genres = genres
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
}
