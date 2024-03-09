<script>
  // components
  import Wave from "./lib/Wave.svelte";
  import TwoMen from "./lib/TwoMenImage.svelte"

  let chapterTitle = "Do not obey in advance";
  let waving = false;
</script>

<style>
  label{
    position: absolute;
    top: 1em;
    left: 1em;
    font-size: 1em;
  }
</style>

<header>
  <h1>TYRANÁTOR SELEKTOR®</h1>

  <label for="waving">
    <input type="checkbox" id="waving" bind:checked={waving}>
    waving
  </label>
</header>

<main>
  <h2>{chapterTitle}</h2>

  <section class="controls"></section>
</main>

<footer class="water">
  <Wave where="back" animation="big" {waving}/>
  <Wave where="middle" animation="tiny" {waving}/>
  <Wave where="front" animation="small" {waving}/>
  <TwoMen/>
</footer>