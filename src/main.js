import './app.css'
import App from './App.svelte'
import books from './books'
console.log(books)

const app = new App({
  target: document.getElementById('app'),
  props: {
    books: books,
  }
})

export default app
