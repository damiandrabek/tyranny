<script>
  // imports
  import { tweened } from "svelte/motion";
  import { cubicOut, circOut } from "svelte/easing";
  import { shuffleArray } from "./functions";

  // components
  import Wave from "./components/Wave.svelte";
  import TheChapter from "./components/TheChapter.svelte";

  // vars
  let chapters = localStorage.getStuff("unreadChapters");
  let waving = true;
  let animationEnded = false;
  let audio = new Audio("../public/gunshot.wav");
  let chapterHasBeenRead = false;

  // randomise (choose random chapter)
  const chooseChapter = () => {
    chapters = localStorage.getStuff('unreadChapters');
    shuffleArray(chapters);
    console.log(chapters)
    animationEnded = false;
    chapterHasBeenRead = false;

    let index = $progress === 0 ? chapters.length : 0;

    progress.set(index).then(() => {
      animationEnded = true;
      audio.play();
    });
  };
  $: chosenChapter = chapters[Math.floor($progress)] || chapters[0];

  // move chosenChapter from unread to read chapters
  const readChapter = () => {
    let readChapters = localStorage.getStuff("readChapters");
    let unreadChapters = localStorage.getStuff("unreadChapters");

    chapterHasBeenRead = true;

    readChapters.push(chosenChapter);
    unreadChapters = unreadChapters.filter((item) => item.id !== chosenChapter.id);

    localStorage.setStuff("readChapters", readChapters);
    localStorage.setStuff("unreadChapters", unreadChapters);
  };

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
  <TheChapter {chosenChapter} {animationEnded} {chapterHasBeenRead} />

  <section class="controls">
    <img on:click={chooseChapter} src="../public/gun.png" alt="cool gun" />
    <img
      on:click={readChapter}
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
    left: 2em;
    font-size: 1em;
    font-size: large;
  }
</style>
