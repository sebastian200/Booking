/*
 * Params
 * - title  | the title of the book
 * - author | the author of the book
 *
 * Returns
 * - hash | the created book hash
 */
const createHash = (title, author) => {
  let hash = (title + author)

  return hash
}

export default class Book {
  constructor({ title, author, format, year, genres, language, rating }) {
    this.title = title
    this.author = author
    this.format = format
    this.year = year
    this.genres = genres
    this.language = language
    this.rating = rating
    this.image = "harry potter.jpg"

    this.hash = createHash(this.title, this.author)
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

  getLanguage() {
    return this.language
  }

  getRating() {
    return this.rating
  }

  getImage() {
    return this.image
  }

  getHash() {
    return this.hash
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
