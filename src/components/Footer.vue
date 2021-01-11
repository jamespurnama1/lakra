<template>
  <div class="footer">
    <div>
      <h2><router-link to="/">Lakra</router-link></h2>
      <ul>
        <li><router-link to="/project">Project</router-link></li>
        <!-- <li><router-link to="/">Berita</router-link></li> -->
        <li><router-link to="/kpr">KPR</router-link></li>
        <li><router-link to="/tentang">Tentang Kami</router-link></li>
      </ul>
    </div>
    <div>
      <h2><router-link to="/">Bantuan</router-link></h2>
      <ul>
        <li><router-link to="/">FAQ</router-link></li>
        <li><router-link to="/">Syarat &amp; Ketentuan</router-link></li>
      </ul>
    </div>
    <div>
      <h2><router-link to="/kontak">Kontak Kami</router-link></h2>
      <ul>
        <a href="mailto:info@lakra.id"><li>info@lakra.id</li></a>
        <a href="https://wa.me/6281382300094" target="_blank"><li>+62 8138 2300 094</li></a>
      </ul>
      <div>
        <a class="ig" href="https://instagram.com/lakra_id" target="_blank">
          <i class="lab la-instagram" />
          @lakra_id
        </a>
      </div>
    </div>
    <form
    @submit="encode">
      <input id="waText" v-model="text" placeholder="Chat di WhatsApp!">
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
      encodedText: null,
      text: null,
    };
  },
  methods: {
    encode() {
      this.encodedText = encodeURIComponent(this.text);
      if (this.encodedText) {
        window.open(`https://wa.me/6281382300094?text=${this.encodedText}`, '_blank');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

.footer {
  display: flex;
  width: 100%;
  margin: 100px 0;

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
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    position: -webkit-sticky;
    position: sticky;
    top: 100vh;

    #waText {
      border: 1px solid $green;
      padding: 3px 15px;
      border-right: none;

      &:focus {
        outline: none;
        border: 2px solid $dark-green;
        border-right: none;
      }
    }

  div {
    background-color: $green;
    border-radius: 0 5px 0 0;

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

    h2 {
      text-align: left;
      margin: 0;
      white-space: nowrap;
    }

    i {
      font-size: 2em;
    }

    ul {
      text-align: left;
      padding: 0;
      margin: 0;

      li {
        list-style-type: none;
        padding: 5px 0;
        white-space: nowrap;
      }
    }
  }
}
</style>
