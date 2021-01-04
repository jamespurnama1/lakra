<template>
  <div class="kpr">
    <h1>Kredit Pemilikan Rumah</h1>
    <div class="first">
      <div>
        <h2>Bank</h2>
        <img :src="require(`../assets/images/bank.png`)" />
        <h3>Kredit Pemilikan Hunian</h3>
        <p>6.99%</p>
        <h3>Suku Bunga</h3>
        <p>6.99% per Tahun</p>
        <h3>Masa Kredit Fix</h3>
        <p>1 Tahun</p>
        <h3>Tenor</h3>
        <p>3-20 Tahun</p>
      </div>
      <div>
        <h2>Proses Penhajuan KPR</h2>
        <h3><i class="las la-home" />Tentukan properti yang ingin anda beli</h3>
        <p>Sebelum mengajukan KPA/KPR, anda harus tahu terlebih
          dahulu properti yang anda impikan.</p>
        <h3><i class="las la-file-alt" />Lengkapi persyaratan dan dokumen</h3>
        <p>Ketahui dokumen apa saja yang diperlukan dalam pengajuan
          KPA/KPR guna meningkatkan kecepatan proses pengajuan.</p>
        <h3><i class="las la-sync" />Proses</h3>
        <p>Pengajuan yang sudah lengkap akan dianalisa dan diproses
          oleh pihak bank.</p>
        <h3><i class="las la-check" />Akad</h3>
        <p>Jika bank sudah menyetujui pengajuan KPA/KPR anda,
          maka pencairan akan dilakukan setelah akad kredit.</p>
      </div>
    </div>
    <h2>Informasi Tambahan</h2>
    <div class="second">
      <div>
        <h3><i class="las la-coins" />Biaya Bank</h3>
        <p>Berikut merupakan biaya-biaya bank pada saat pengajuan KPA/KPR:</p>
        <ul>
          <li>Biaya Appraisal/Penilaian Aset</li>
          <li>Biaya Administrasi</li>
          <li>Biaya Provisi</li>
          <li>Biaya SKMHT (Surat Kuasa Membebankan Hak Tanggungan)</li>
          <li>Biaya APHT (Akta Pemberian Hak Tanggungan)</li>
          <li>Biaya PKPH (Perjanjian Kredit Pengakuan Hutang)</li>
          <li>Biaya PNBP (Pendapatan Negara Bukan Pajak)</li>
          <li>Biaya Asuransi Kebakaran dan Jiwa</li>
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
    <div class="third">
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
            <b>a. Suku Bunga Fix</b>
            <br>
            Suku bunga yang besarannya tetap pada periode tertentu (masa fix).
            Namun perlu diperhatikan, setiap bank memiliki masa fix yang berbeda-beda.
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
            <b>a. Take Over Murni</b>
            <br>
            Pemindahan fasilitas pembiayaan ke bank lain tanpa
            ada penambahan dana tunai tambahan/Top Up.
            <br>
            <b>b. Take Over Top Up</b>
            <br>
            Pemindahan fasilitas pembiayaan ke bank lain dengan
            penambahan dana tunai tambahan/Top Up.
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
};
</script>
<style lang="scss" scoped>
@import '../styles/index.scss';

  .kpr {
    margin-top: 10vh;
    margin-right: 30px;

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

    .first, .second {
      display: flex;
      margin-bottom: 30px;

      div {
        width: 50%;

        ul{
          padding: 0;

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

    .third {
      column-count: 2;
      column-gap: 30px;
      margin-bottom: 30px;

      ul{
        padding: 0;

        li {
          list-style-type: none;
          text-align: left;
        }
      }
    }
  }
</style>
