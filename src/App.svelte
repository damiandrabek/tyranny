<script>
  // components
  import Wave from "./lib/Wave.svelte";
  let chapterTitle = "Do not obey in advance";
</script>

<header>
  <h1>TYRANÁTOR SELEKTOR®</h1>
</header>

<main>
  <h2>{chapterTitle}</h2>

  <section class="controls"></section>
</main>

<footer class="water">
  <Wave where="back" animation="big" />
  <Wave where="middle" animation="tiny" />
  <Wave where="front" animation="small" />
  <!-- <img class="drink" src="./" alt="my drink"> -->
  <div class="drinkiz"></div>
</footer>

<style>
  .drinkiz{
		right: 0;
    background: url('./assets/drink.png')repeat-x;
		background-size: 100%;
    width: 30%;
    height: auto;
    position: absolute;
    left: 0;
    bottom: 0;
  }
</style>