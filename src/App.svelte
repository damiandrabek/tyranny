<script>
  // components
  import Wave from "./lib/Wave.svelte";
  import TwoMen from "./lib/TwoMenImage.svelte"
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
  <Wave where="front" animation="small"/>
  <TwoMen/>
</footer>