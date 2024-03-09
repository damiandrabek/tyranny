<script>
  let chapterTitle = "I'm a made guy ";
  let times = 4;

</script>

<header>
  <h1>TYRANÁTOR SELEKTOR®</h1>
</header>

<main>

  <h2>{(chapterTitle).repeat(times)}</h2>

  <section class="controls">
    <button on:click={() => times++}>JUST DO IT</button>
  </section>
  
</main>

<footer class="water"></footer>
