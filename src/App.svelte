<script>
  // components
  import Wave from "./lib/Wave.svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut, circOut } from "svelte/easing";

  // props
  export let books;

  // vars
  let chapterTitle = "Do not obey in advance";
  let waving = true;

  // randomise (choose random book)
  const chooseBook = () => {
    books = books.sort(() => 0.5 - Math.random());
    progress.set(Math.random());
  };
  $: chosenBook = books[0].title.toUpperCase() + ", " + books[0].page;

  // move chosenBook from unread to read books
  const readBook = () => {};

  const progress = tweened(0, {
    duration: 2000,
    easing: circOut,
  });
</script>

<header>
  <h1>TYRANNY SELECTOR®</h1>

  <progress value={$progress} />

  <label for="waving">
    <input type="checkbox" id="waving" bind:checked={waving} />
    waving
  </label>
</header>

<main>
  <p>{$progress}</p>
  <h2>{chosenBook}</h2>

  <section class="controls">
    <img on:click={chooseBook} src="../public/gun.png" alt="cool gun" />
    <img
      on:click={readBook}
      src="../public/anchor.png"
      alt="sweet ass anchor"
    />
  </section>
</main>

<footer class="water">
  <Wave where="back" animation="big" {waving} />
  <Wave where="middle" animation="tiny" {waving} />
  <img class="twoMen" src="../public/twoMen.png" alt="two men" />
  <Wave where="front" animation="small" {waving} />
</footer>

<style>
  label {
    position: absolute;
    top: 1em;
    left: 1em;
    font-size: 1em;
  }
  progress {
    width: 90%;
  }
</style>
