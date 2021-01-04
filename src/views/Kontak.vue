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
          <a href="https://wa.me/6283918239" target="_blank">+62 8391 8239</a>
        </p>
        <div>
          <a href="https://instagram.com/lakra_id" target="_blank"><i class="lab la-instagram"></i></a>
          <a href="https://facebook.com" target="_blank"><i class="lab la-facebook"></i></a>
          <a href="https://twitter.com" target="_blank"><i class="lab la-twitter"></i></a>
        </div>
      </div>
    </div>
    <form action="https://formspree.io/f/mrgoyynd" method="POST">
      <input type="text" placeholder="Nama" name="name" required>
      <br>
      <input type="email" placeholder="E-mail" name="_replyto" required>
      <br>
      <textarea name="message" placeholder="Ketik di sini..." required></textarea>
      <input id="submit" type="submit" value="Send">
    </form>
  </div>
</template>
<script>
export default {
  name: 'Contact',
};
</script>
<style lang="scss" scoped>
@import '../styles/index.scss';

.contact {
  margin-top: 10vh;
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
  height: 75vh;

  .text {
    width: 50%;
    margin-right: 30px;

    h1, p {
      text-align: left;
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
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

  form {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-top: 4em;

    input {
      border-radius: 0;
      border-style: solid;
      border-color: $green;
      padding: 15px 10px;
      margin-bottom: 10px;
      font-family: Helvetica-Neue, Helvetica, Arial, sans-serif;
      font-weight: 200;
      font-size: 1em;

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
    }

    textarea {
      height: 10%;
      border-style: solid;
      border-color: $green;
      margin-bottom: 10px;
      font-family: Helvetica-Neue, Helvetica, Arial, sans-serif;
      font-weight: 200;
      font-size: 1em;
      padding: 15px 10px;
    }
  }
}
</style>
