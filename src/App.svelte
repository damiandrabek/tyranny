<script>
  // imports
  import { tweened } from "svelte/motion";
  import { cubicOut, circOut } from "svelte/easing";
  import { shuffleArray } from "./functions";

  // components
  import Wave from "./lib/Wave.svelte";
  import TheChapter from "./lib/TheChapter.svelte";

  // props
  export let books;

  // vars
  let waving = true;
  let animationEnded = false;
  let audio = new Audio("../public/gunshot.wav");

  // randomise (choose random book)
  const chooseBook = () => {
    shuffleArray(books);
    animationEnded = false;

    let index = $progress === 0 ? books.length : 0;

    progress.set(index).then(() => {
      animationEnded = true;
      audio.play();
    });
  };
  $: chosenBook = books[Math.floor($progress)] || books[0];

  // move chosenBook from unread to read books
  const readBook = () => {};

  const progress = tweened(0, {
    duration: 2500,
    easing: circOut,
  });
</script>

<header>
  <h1>TYRANNY SELECTOR®</h1>

  <label for="waving">
    <input type="checkbox" id="waving" bind:checked={waving} />
    waving
  </label>
</header>

<main>
  <TheChapter {chosenBook} {animationEnded}/>

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
