import './app.css'
import App from './App.svelte'
import books from './chapters'

const app = new App({
  target: document.getElementById('app'),
  props: {
    books: books,
  }
})

export default app
