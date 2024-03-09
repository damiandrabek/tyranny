<script>
  // components
  import Wave from "./lib/Wave.svelte";
  import Gun from "./lib/Gun.svelte";
  import Anchor from "./lib/Anchor.svelte";

  // props
  export let books;

  // vars
  let chapterTitle = "Do not obey in advance";
  let waving = true;

  // functions
  const chooseBook = () => {
    alert('choose')
  }
  const readBook = () => {
    alert('read')
  }
</script>

<header>
  <h1>TYRANÁTOR SELEKTOR®</h1>

  <label for="waving">
    <input type="checkbox" id="waving" bind:checked={waving} />
    waving
  </label>
</header>

<main>
  <ul>
    {#each books as book}
      <li>
        {JSON.stringify(book)}
      </li>
    {/each}
  </ul>

  <h2>{chapterTitle}</h2>

  <section class="controls">
    <img on:click={chooseBook} class="gun" src="../public/gun.png" alt="cool gun">
    <img on:click={readBook} src="../public/anchor.png" alt="sweet ass anchor">
  </section>
</main>

<footer class="water">
  <Wave where="back" animation="big" {waving} />
  <Wave where="middle" animation="tiny" {waving} />
  <img class="twoMen" src="../public/twoMen.png" alt="two men">
  <Wave where="front" animation="small" {waving} />
</footer>

<style>
  label {
    position: absolute;
    top: 1em;
    left: 1em;
    font-size: 1em;
  }
</style>