<template>
  <div class="footer">
    <div>
      <h2><router-link to="/">Lakra</router-link></h2>
      <ul>
        <li><router-link to="/lokasi">Lokasi</router-link></li>
        <li><router-link to="/">Berita</router-link></li>
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
        <a href="https://wa.me/6283918239" target="_blank"><li>+62 8391 8239</li></a>
      </ul>
      <div>
      <a href="https://instagram.com/lakra_id" target="_blank"><i class="lab la-instagram"></i></a>
      <a href="https://facebook.com" target="_blank"><i class="lab la-facebook"></i></a>
      <a href="https://twitter.com" target="_blank"><i class="lab la-twitter"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
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

  div {
    margin-right: 20%;

    h2 {
      text-align: left;
      margin: 0;
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
