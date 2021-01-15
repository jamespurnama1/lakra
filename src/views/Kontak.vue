<template>
  <div class="contact">
    <div class="text">
      <h1>Kontak Kami</h1>
      <p>
        Hubungi nomor telefon dibawah untuk segala pertanyaan Anda,
        kami siap membantu mencari rumah Lakra yang sesuai dengan kebutuhan Anda.
        Kunjungi juga media sosial kami di Instagram untuk mengetahui info terkini dari kami.
      </p>
      <div class="info">
        <p>
          <a href="mailto:info@lakra.id">info@lakra.id</a>
          <br>
          <a href="https://wa.me/6281382300094" target="_blank">+62 8138 2300 094</a>
        </p>
        <div>
          <a class="ig" href="https://instagram.com/lakra_id" target="_blank">
            <i class="lab la-instagram" />lakra_id
          </a>
        </div>
      </div>
    </div>
    <transition-group name="fade" mode="out-in">
      <h3 :key="2" v-if="status === 'Message Sent!'" id="status">
        <i class="las la-check" />{{ status }}
      </h3>
      <h3 :key="3" v-else-if="status === 'Oops! There was a problem.'" id="status">
        <i class="las la-times" />{{ status }}
      </h3>
      <form :key="1" v-else-if="!status" ref="form" id="my-form" action="https://formspree.io/f/mrgoyynd" method="POST">
        <input type="text" placeholder="Nama" name="name" required>
        <br>
        <div class="grid">
          <input type="email" placeholder="E-mail" name="email" required>
          <!-- eslint-disable-next-line max-len -->
          <input type="tel" placeholder="Nomor HP" name="hp" required pattern="(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[-\.\s\\\/]?)?((?:\(?\d{1,}\)?[-\.\s\\\/]?){0,})(?:[-\.\s\\\/]?(?:#|ext\.?|extension|x)[-\.s\\\/]?(\d+))?">
        </div>
        <br>
        <textarea id="message" name="message" placeholder="Ketik di sini..." required></textarea>
        <input id="submit" type="submit" value="Send">
      </form>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: 'Contact',
  data() {
    return {
      status: null,
    };
  },
  mounted() {
    this.form();
    this.$root.$emit('mounted');
    const textarea = document.querySelector('#message');
    textarea.addEventListener('keyup', () => {
      textarea.style.height = `${this.calcHeight(textarea.value)}px`;
    });
  },
  methods: {
    calcHeight(value) {
      const numberOfLineBreaks = (value.match(/\n/g) || []).length;
      const newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
      return newHeight;
    },
    form() {
      this.$refs.form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const data = new FormData(this.$refs.form);
        this.send(this.$refs.form.method, this.$refs.form.action, data);
        this.$Progress.start();
      });
    },
    async error() {
      this.status = 'Oops! There was a problem.';
      this.$Progress.fail();
      await setTimeout(() => {
        this.status = null;
      }, 3000);
    },
    success() {
      this.$refs.form.reset();
      this.status = 'Message Sent!';
      this.$Progress.finish();
    },
    send(method, url, data) {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      this.$Progress.increase(20);
      xhr.setRequestHeader('Accept', 'application/json');
      this.$Progress.increase(20);
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        this.$Progress.increase(20);
        if (xhr.status === 200) {
          this.success(xhr.response, xhr.responseType);
        } else {
          this.error(xhr.status, xhr.response, xhr.responseType);
        }
      };
      xhr.send(data);
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../styles/index.scss';

.contact {
  margin-top: 10vh;
  display: flex;
  justify-content: space-between;
  height: 75vh;
  will-change: transform;
  margin-right: 30px;

  @include max-media(small-tablet) {
    flex-direction: column;
    justify-content: flex-start;
  }

  @include max-media(mobile) {
    margin: 0;
  }

  h3 {
    margin: 5em auto;
    margin-bottom: auto;
    display: flex;
    align-items: center;
  }

  .text {
    width: 50%;
    margin-right: 30px;
    box-sizing: border-box;

    @include max-media(small-tablet) {
      width: 100%;
    }

    h1, p {
      text-align: left;
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  .ig {
    display: flex;
    align-items: center;
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

  i {
    font-size: 2em;
  }

  span {
    width: 40%;
    margin-top: 10vh;

    form {
      display: flex;
      flex-direction: column;

      @include max-media(small-tablet) {
        width: 100%;
      }

      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
        box-sizing: border-box;
      }

      input {
        border-radius: 0;
        border: 2px solid $green;
        padding: 15px 10px;
        margin-bottom: 10px;
        font-family: Helvetica-Neue, Helvetica, Arial, sans-serif;
        font-weight: 200;
        font-size: 1em;
        box-sizing: border-box;
        width: 100%;

        @include max-media(mobile) {
          font-size: 0.75em;
          line-height: 1em;
        }

        &#submit {
          background-color: $green;
          color: white;
          border: 0;
          padding: 10px 25px;
          margin-bottom: 50px;
          margin-top: 1em;
          transition: background-color .3s ease;
          cursor: pointer;

          &:hover {
            background-color: $dark-green;
          }
        }

        &:focus {
          border-color: $dark-green;
          outline: none;
        }
      }

      textarea {
        height: 75%;
        resize: vertical;
        box-sizing: border-box;
        border: 2px solid $green;
        margin-bottom: 10px;
        font-family: Helvetica-Neue, Helvetica, Arial, sans-serif;
        font-weight: 200;
        font-size: 1em;
        padding: 15px 10px;

        @include max-media(mobile) {
          font-size: 0.75em;
          line-height: 1em;
        }

        &:focus {
          border-color: $dark-green;
          outline: none;
        }
      }
    }
  }
}
</style>
