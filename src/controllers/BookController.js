const Book = require('../models/Book')

module.exports = {
  async index(request, response){
    const books = await Book.find()
    return response.json(books)
  },

  async store(request, response){
    const { title, author, description } = request.body;

    book = await Book.create({
      title,
      author,
      description
    })

    return response.json(book)
  }
}