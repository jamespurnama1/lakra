<template>
  <div class="footer">
    <div>
      <h2><router-link to="/">Lakra</router-link></h2>
      <ul>
        <li><h3><router-link to="/projects">Projects</router-link></h3></li>
        <li><h3><router-link to="/kpr">KPR</router-link></h3></li>
        <li><h3><router-link to="/tentang">Tentang Kami</router-link></h3></li>
      </ul>
    </div>
    <div>
      <h2><router-link to="/kontak">Kontak Kami</router-link></h2>
      <ul>
        <li><h3><a href="mailto:info@lakra.id">info@lakra.id</a></h3></li>
        <li><h3><a href="https://wa.me/6281382300094" target="_blank" rel="noopener noreferrer">+62 8138 2300 094</a></h3></li>
        <li class="offset">
          <h3>
            <a class="ig" href="https://instagram.com/lakra_id" target="_blank" rel="noopener noreferrer">
              <i class="lab la-instagram" />
              @lakra_id
            </a>
          </h3>
        </li>
      </ul>
    </div>
    <form id="widget"
    @submit="encode">
      <input
        v-if="$store.state.windowWidth > 600 && !$store.state.isMobile"
        id="waText"
        v-model="text"
        placeholder="Chat di WhatsApp!"
      >
      <div>
        <i @click="encode" class="lab la-whatsapp" />
      </div>
      <input id="submit" type="submit" value="">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      encodedText: '',
      text: '',
    };
  },
  methods: {
    encode() {
      this.encodedText = encodeURIComponent(this.text);
      if (this.encodedText) {
        window.open(`https://wa.me/6281382300094?text=${this.encodedText}`, '_blank').opener = null;
      } else {
        window.open('https://wa.me/6281382300094', '_blank').opener = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

.footer {
  position: relative;
  display: flex;
  width: 100%;
  margin: 100px 0;
  flex-wrap: nowrap;

  @include max-media(tablet) {
    flex-wrap: wrap;
  }

  @include max-media(mobile) {
    // justify-content: space-around;
    margin: 100px 30px 0 30px;
  }

  a {
    color: black;
    text-decoration: none;

    &:visited {
      color: black;
    }

    &:hover {
      color: $green;
    }
  }

  .ig {
    display: flex;
    align-items: center;
  }

  form {
    height: 50px;
    display: flex;
    flex-direction: row;
    position: fixed;
    right: 30px;
    bottom: 0;

    &.sticky {
      position: relative;
    }

    @include max-media(tablet) {
      margin-top: 15px;
    }

    #waText {
      position: relative;
      border: 2px solid $green;
      padding: 3px 15px;
      border-right: none;
      border-bottom: none;
      border-radius: 5px 0 0 0;
      margin: 0;
      transform: translateY(100%);
      transition: all .3s ease;

      &:focus {
        outline: none;
        border: 2px solid $dark-green;
        border-right: none;
        border-bottom: none;
        transform: translateY(0);

        ~ div {
          border-radius: 0 5px 0 0;
        }
      }
    }

    &:hover {
      #waText {
        transform: translateY(0);
      }

      div {
        border-radius: 0 5px 0 0;
      }
    }

    div {
      background-color: $green;
      border-radius: 5px 5px 0 0;

      &:hover {
        background-color: $dark-green;
      }

      .la-whatsapp {
        color: white;
        font-size: 2.5em;
        height: 100%;
        margin: auto 0;
        padding: 3px;
      }
    }

    #submit {
      display: none;
    }
  }

  div {
    margin-right: 10%;

    @include max-media(mobile) {
      margin-right: 20%;
    }

    h2 {
      text-align: left;
      margin: 0;
      white-space: nowrap;
      margin-bottom: 10px;

      @include max-media(small-tablet) {
        font-size: 1em;
      }

      @include max-media(mobile) {
        font-size: 1.5em !important;
        line-height: 1.5em !important;
      }
    }

    h3 {
      font-size: 1em;

      @include max-media(mobile) {
        font-size: 1.2em !important;
        line-height: 1.2em !important;
      }
    }

    i {
      font-size: 2em;

      @include max-media(mobile) {
        font-size: 1.5em;
      }
    }

    ul {
      text-align: left;
      padding: 0;
      margin: 0;

      li {
        list-style-type: none;
        white-space: nowrap;

        &.offset {
          position: relative;
          top: -5px;
        }

        @include max-media(small-tablet) {
          font-size: 0.75em;
        }
      }
    }
  }
}
</style>
