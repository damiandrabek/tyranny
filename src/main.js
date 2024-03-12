// imports
import App from './App.svelte'
import chapters from './chapters'

// localStorage
Storage.prototype.setStuff = function (key, value) {
	this.setItem(key, JSON.stringify(value))
}

Storage.prototype.getStuff = function (key) {
	var value = this.getItem(key)
	return value && JSON.parse(value)
}
if (!localStorage.getStuff('unreadChapters')) {
	localStorage.setStuff('unreadChapters', chapters)
	localStorage.setStuff('readChapters', [])
}

// app
const app = new App({
  target: document.getElementById('app'),
  props: {}
})

export default app
