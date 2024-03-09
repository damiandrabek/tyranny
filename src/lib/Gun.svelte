<div class="gun"></div>

<style>
  .gun {
    position: relative;
    z-index: 3;
    float: left;

    bottom: 27%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    width: 14rem;
    height: 16rem;
    margin: 0 1em;
    transition: 0.05s all ease-in;

    background: url("../assets/gun.png") bottom left no-repeat;
  }
  .gun:hover {
    transform: scale(1.1);
  }
  .gun:active {
    transform: scale(0.95);
  }
</style>
