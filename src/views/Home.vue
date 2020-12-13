<template>
  <div class="home">
    <img id="logotext" src="../assets/logotext.svg" />
    <h1>Coming Soon</h1>
    <div id="overlay" />
    <video autoplay preload="true" muted loop>
      <source src="../assets/reel.webm" type="video/webm" />
      <source src="../assets/reel.mp4" type="video/mp4" />
    </video>
    <!-- <img id="logo" src="../assets/logo.svg" /> -->
    <div id="logo" />
  </div>
</template>

<script>
import lottie from 'lottie-web';
import json from '../assets/logo.json';

export default {
  name: 'Home',
  methods: {
    countdownLottie() {
      lottie.loadAnimation({
        container: document.getElementById('logo'),
        renderer: 'svg',
        loop: true,
        // speed: 0.1,
        autoplay: true,
        animationData: json,
        name: 'logo',
      });
    },
  },
  mounted() {
    // this.countdownLottie.addEventListener('complete', () => {
    //   direction *= -1,
    //   this.countdownLottie.setDirection(direction);
    //   this.countdownLottie.play();
    // });
    this.countdownLottie();
    lottie.setSpeed(0.5);
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  #logotext {
    position: absolute;
    top: 7%;
    left: 50%;
    transform: translateX(-50%);
    width: 10vw;
    z-index: 5;
  }

  #logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15vw;
    z-index: 5;
  }

  #overlay {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    opacity: 35%;
    background-color: #474D38;
  }

  h1 {
    position: absolute;
    bottom: 7%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-family: Helvetica-Neue, Helvetica, Arial, sans-serif;
    font-size: 1.3em;
    color: white;
    font-weight: 100;
    z-index: 5;
  }
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    min-width: 100%;
    min-height: 100%;
  }
}
</style>
