<template>
  <div class="kpr">
    <h1>Kredit Pemilikan Rumah</h1>
    <div class="first">
      <h2>Simulasi KPR</h2>
      <form>
        <div style="grid-area: one; margin-right: 30px;">
          <p>Harga Properti</p>
          <vue-numeric
            currency="Rp."
            separator="."
            :minus="false"
            v-model="hargaProperti" />
        </div>
        <div style="grid-area: two; width: 50%;">
          <p>Persentase DP</p>
          <vue-numeric
            currency="%"
            currency-symbol-position="suffix"
            :max="99"
            :minus="false"
            v-model="persentaseDP" />
        </div>
        <div style="grid-area: four">
          <p>DP</p>
          <vue-numeric
            currency="Rp."
            separator="."
            :read-only="true"
            read-only-class="result"
            :value="DP" />
        </div>
        <div style="grid-area: three">
          <p>Jumlah Pinjaman</p>
          <vue-numeric currency="Rp."
            separator="."
            :read-only="true"
            read-only-class="result"
            :value="jumlahPinjaman" />
        </div>
        <hr style="grid-area: hr">
        <div style="grid-area: five; width: 75%; margin-right: 30px;">
          <p>Durasi</p>
          <span>
            <div>
              <select v-model="durasi">
                <option disabled hidden value="">Pilih satu</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
              </select>
            </div>
            <p>Tahun</p>
          </span>
        </div>
        <div style="grid-area: six; width: 50%;">
          <p>Estimasi Bunga</p>
          <vue-numeric
            currency="%"
            currency-symbol-position="suffix"
            :max="99"
            :minus="false"
            :precision="1"
            v-model="estimasiBunga" />
        </div>
        <div style="grid-area: seven">
          <p>Angsuran per Bulan</p>
          <vue-numeric
            currency="Rp."
            separator="."
            :read-only="true"
            read-only-class="result"
            :value="angsuran" />
        </div>
      </form>
    </div>
    <h2>Proses Pengajuan KPR</h2>
    <div class="second">
      <div>
        <h3><i class="las la-home" />Tentukan properti yang ingin anda beli</h3>
        <p>Sebelum mengajukan KPA/KPR, anda harus tahu terlebih
          dahulu properti yang anda impikan.</p>
      </div>
      <div>
        <h3><i class="las la-file-alt" />Lengkapi persyaratan dan dokumen</h3>
        <p>Ketahui dokumen apa saja yang diperlukan dalam pengajuan
          KPA/KPR guna meningkatkan kecepatan proses pengajuan.</p>
      </div>
      <div>
      <h3><i class="las la-sync" />Proses</h3>
      <p>Pengajuan yang sudah lengkap akan dianalisa dan diproses
        oleh pihak bank.</p>
      </div>
      <div>
        <h3><i class="las la-check" />Akad</h3>
        <p>Jika bank sudah menyetujui pengajuan KPA/KPR anda,
          maka pencairan akan dilakukan setelah akad kredit.</p>
      </div>
    </div>
    <h2>Informasi Tambahan</h2>
    <div class="third">
      <div>
        <h3><i class="las la-coins" />Biaya Bank</h3>
        <p>Berikut merupakan biaya-biaya bank pada saat pengajuan KPA/KPR:</p>
        <ul>
          <li><p>Biaya Appraisal/Penilaian Aset</p></li>
          <li><p>Biaya Administrasi</p></li>
          <li><p>Biaya Provisi</p></li>
          <li><p>Biaya SKMHT (Surat Kuasa Membebankan Hak Tanggungan)</p></li>
          <li><p>Biaya APHT (Akta Pemberian Hak Tanggungan)</p></li>
          <li><p>Biaya PKPH (Perjanjian Kredit Pengakuan Hutang)</p></li>
          <li><p>Biaya PNBP (Pendapatan Negara Bukan Pajak)</p></li>
          <li><p>Biaya Asuransi Kebakaran dan Jiwa</p></li>
        </ul>
      </div>
      <div>
        <h3><i class="las la-pen-nib" />Biaya Notaris</h3>
        <p>Biaya Notaris adalah biayaa yang dibayarkan oleh calon pembeli
          dan penjual yang berkaitan dengan hal jual beli.
          Biaya tersebut mencakup pembayaran AJB (Akta Jual Beli),
          pajak, dan cek sertifikat.
        </p>
      </div>
    </div>
    <h2>Tanya Jawab</h2>
    <div class="fourth">
      <ul>
        <li>
          <h3>
          1. Apa itu KPA/KPR?
          </h3>
          <p>
            KPA/KPR adalah fasilitas pembiayaan untuk pembelian rumah
            atau apartemen yang diberikan oleh bank dengan menjaminkan aset yang dibeli.
          </p>
        </li>
        <li>
          <br>
          <h3>
          2. Apa saja aset yang diterima bank untuk
          diagunkan sebagai jaminan ketika mengajukan KPA/KPR?
          </h3>
          <p>
            Aset yang diterima oleh bank untuk diagunkan
            adalah sertifikat dari rumah atau apartemen yang dibeli.
            Adapun sertifikat yang diterima antara lain:
            <br>
            <br>
            a. SHM (Sertifikat Hak Milik)
            <br>
            b. SHGB (Sertifikat Hak Guna Bangunan)
            <br>
            c. SHMASRS (Sertifikat Hak Milik Atas Satuan Rumah Susun)
          </p>
        </li>
        <li>
          <br>
          <h3>
          3. Berapa besaran DP yang harus dibayar untuk membeli aset KPA/KPR?
          </h3>
          <p>
            Mengacu aturan dari Bank Indonesia,
            pembelian aset KPA/KPR harus disertai dengan DP minimal 15%.
          </p>
        </li>
        <li>
          <br>
          <h3>
          4. Bagaimana cara membayar cicilan KPA/KPR?
          </h3>
          <p>
            Setelah melalui proses akad, Anda harus membuka rekeningdi
            bank tempat Anda mengajukan KPA/KPR untuk membayar cicilan Anda.
          </p>
        </li>
        <li>
          <br>
          <h3>
          5. Bagaimana jika tidak membayar cicilan tepat waktu?
          </h3>
          <p>
            Anda akan dikenakan penalti sesuai dengan durasi keterlambatan pembayaran.
            Tentunya penalti ini akan berbeda-beda tergantung perjanjian
            yang telah disepakati dengan bank.
          </p>
        </li>
        <li>
          <br>
          <h3>
          6. Apa saja yang harus diperhatikan ketika memilih bank?
          </h3>
          <p>
            Harap perhatikan suku bunga, besaran cicilan setiap bulan, penalti dan masa fix.
          </p>
        </li>
        <li>
          <br>
          <h3>
          7. Apa itu suku bunga?
          </h3>
          <p>
            Suku bunga adalah harga yang harus Anda bayar ke bank
            sebagai balas jasa atas pembiayaan yang diperoleh.
            Adapun suku bunga dibagi menjadi 2 jenis, yakni:
            <br>
            <br>
            <b>a. Suku Bunga Fix</b>
            <br>
            Suku bunga yang besarannya tetap pada periode tertentu (masa fix).
            Namun perlu diperhatikan, setiap bank memiliki masa fix yang berbeda-beda.
            <br>
            <br>
            <b>b. Suku Bunga Floating</b>
            <br>
            Suku Bunga Floating adalah suku bunga pasar yang berlaku pada bank tersebut.
            Sehingga, nilai bunga yang ditetapkan oleh bank tersebut
            bervariasi dan bergantung pada kondisi bank saat itu.
            Suku Bunga Floating akan berlaku ketika Suku Bunga Fix telah berakhir periodenya.
          </p>
        </li>
        <li>
          <br>
          <h3>
            8. Apakah memungkinkan untuk memindahkan fasilitas pembiayaan ke bank lain?
          </h3>
          <p>
            Bisa. Pemindahan fasilitas pembiayaan dari bank yang digunakan
            saat ini ke bank lain biasa disebut Take Over.
            Secara umum, Take Over dibagi menjadi 3 jenis, yakni:
            <br>
            <br>
            <b>a. Take Over Murni</b>
            <br>
            Pemindahan fasilitas pembiayaan ke bank lain tanpa
            ada penambahan dana tunai tambahan/Top Up.
            <br>
            <br>
            <b>b. Take Over Top Up</b>
            <br>
            Pemindahan fasilitas pembiayaan ke bank lain dengan
            penambahan dana tunai tambahan/Top Up.
            <br>
            <br>
            <b>c. Take Over Jual Beli</b>
            <br>
            Pemindahan fasilitas pembiayaan yang dilakukan ketika
            Anda ingin menjual aset yang masih Anda agunkan ke bank pembeli aset tersebut.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KPR',
  mounted() {
    this.$root.$emit('mounted');
  },
  data() {
    return {
      hargaProperti: 0,
      persentaseDP: 0,
      durasi: 0,
      estimasiBunga: 0,
    };
  },
  computed: {
    DP() {
      return this.hargaProperti * (this.persentaseDP / 100);
    },
    jumlahPinjaman() {
      return this.hargaProperti - this.DP;
    },
    angsuran() {
      // eslint-disable-next-line max-len
      let h = this.jumlahPinjaman * (this.estimasiBunga / 1200) * (1 / (1 - (1 / (1 + this.estimasiBunga / 1200) ** (this.durasi * 12))));
      if (!h) {
        h = 0;
      }
      return h;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../styles/index.scss';

  .kpr {
    margin-top: 10vh;
    margin-right: 30px;
    will-change: transform;

    @include max-media(mobile) {
      margin: 0;
    }

    h1, h2, h3, p {
      text-align: left;
      margin: 0;
      padding: 0;
    }

    h2 {
      color: $green;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 1.5em;
      margin-bottom: 15px;
    }

    p, h1 {
      margin-bottom: 15px;

      b {
        font-weight: bold;
      }
    }

    i {
      margin-right: 10px;
    }

    .first {
      margin-bottom: 10vh;

      @include max-media(mobile) {
        margin-bottom: 30px;
      }

      h2 {
        margin: 0;
      }

      form {
        display: grid;
        grid-template-areas:  'one two three'
                              'one two four'
                              'hr hr hr'
                              'five six seven';
        grid-template-columns: 2fr 1.5fr 2fr;
        grid-gap: 0 50px;

        @include max-media(mobile) {
          grid-template-columns: 2fr 1.5fr;
          grid-template-areas:  'one two'
                                'three four'
                                'hr hr'
                                'five six'
                                'seven seven';
          grid-gap: 0 10px;
        }

        hr {
          opacity: 50%;
          width: 100%;
          border: 1px solid $dark-green;
          margin: 30px 0 20px 0;
        }

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;

          p {
            padding: 10px 0 5px 0;
            margin: 0;
          }

          input, select {
            border-radius: 0;
            border: 2px solid $green;
            padding: 15px 10px;
            font-family: Helvetica-Neue, Helvetica, Arial, sans-serif;
            font-weight: 200;
            font-size: 1em;
            box-sizing: border-box;
            width: 100%;
          }

          span {
            white-space: nowrap;
            display: flex;
            align-items: center;

            div {
              display: grid;
              grid-template-areas: "select text";
              grid-template-columns: 90% 10%;
              align-items: center;
              flex: 1;

              select {
                grid-area: select;
                appearance: none;
                outline: none;
                width: 100%;
                z-index: 1;
                cursor: inherit;
                line-height: inherit;

                &::-ms-expand {
                  display: none;
                }
              }

              &::after {
                content: "";
                grid-area: select;
                justify-self: end;
                position: relative;
                z-index: 2;
                width: 0.8em;
                height: 0.5em;
                background-color: $green;
                margin-right: 0.5em;
                clip-path: polygon(100% 0%, 0 0%, 50% 100%);
              }
            }

            p {
              grid-area: text;
            }
          }

          .result {
            text-align: left;
            color: white;
            padding: 10px 15px;
            background-color: $green;
          }
        }
      }
    }

    .third {
      display: flex;
      margin-bottom: 10vh;

      @include max-media(small-tablet) {
        flex-direction: column;
      }

      @include max-media(mobile) {
        margin-bottom: 30px;
      }

      div {
        width: 50%;
        margin-right: 30px;

        @include max-media(small-tablet) {
          width: 100%;
        }

        ul{
          padding-left: 16px;

          @include max-media(mobile) {
            margin-bottom: 30px;
          }

          li {
            list-style-type: none;
            text-align: left;
          }
        }

        img {
          width: 35%;
          display: block;
          margin-right: auto;
          margin: 15px 0;
        }
      }
    }

  .second {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    margin-bottom: 10vh;

    @include max-media(mobile) {
      margin-bottom: 30px;
    }

    @include max-media(desktop) {
      grid-template-columns: 1fr 1fr;
    }

    @include max-media(small-tablet) {
      grid-template-columns: 1fr;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }

    .fourth {
      column-count: 2;
      column-gap: 30px;
      margin-bottom: 30px;

      @include max-media(small-tablet) {
        column-count: 1;
      }

      ul{
        padding: 0;

        li {
          list-style-type: none;
          text-align: left;
          break-inside: avoid;
        }
      }
    }
  }
</style>
