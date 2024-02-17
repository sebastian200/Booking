const hashLength = 20

/*
 * Params
 * - title  | the title of the book
 * - author | the author of the book
 *
 * Returns
 * - hash | the created book hash
 */
const createHash = (title, author) => {
  if(!title && !author) return null

  let hash = new Array(hashLength).fill(0)

  const start = (title ?? "") + (author ?? "")

  for(let index in start) {
    hash[index % hashLength] += start.charCodeAt(index)
  }

  // Making the hash look more random
  for(let count = 0; count < 20; count++) {
    for(let index = 0; index < hash.length - 1; index++) {
      hash[index] += hash[index + 1]
    }
  }

  // Clamp the numbers to ASCII codes
  for(let index in hash) {
    hash[index] = hash[index] % (122 - 97) + 97
  }

  return String.fromCharCode(...hash)
}

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
