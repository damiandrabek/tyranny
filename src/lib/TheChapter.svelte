<script>
  export let chosenChapter;
  export let animationEnded;
  export let chapterHasBeenRead;

  // console.log(h2);
  // if (chapterHasBeenRead == true) {
  //   setTimeout(() => {
  //     h2.style.display = "none";
  //   }, 5000);
  // }
</script>

<h2
  class="animate__animated"
  class:animate__tada={animationEnded}
  class:animate__backOutDown={chapterHasBeenRead}
  class:noneDisplay={chapterHasBeenRead}
>
  <span>{chosenChapter.title}</span>
  {#if chosenChapter.page}
    <small>{chosenChapter.page}</small>
  {/if}
</h2>

<style>
  h2 {
    color: #0055c5;
    font-size: 4.5em;
    font-weight: 100;
    font-weight: 900;
    text-transform: uppercase;
    text-shadow: 3px 3px 0 #000;
    -webkit-text-stroke: 2px #110071;
    letter-spacing: -2px;

    position: absolute;
    margin-top: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 25vh;
  }

  h2 small {
    color: #12d292;
    font-size: 0.65em;
  }

  h2 small::before {
    text-transform: lowercase;
    font-size: 0.75em;
  }
  .noneDisplay {
    /* display: none; */
  }
</style>
