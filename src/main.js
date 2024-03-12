import App from './App.svelte'
import chapters from './chapters'

const app = new App({
  target: document.getElementById('app'),
  props: {
    chapters: chapters,
  }
})

export default app
