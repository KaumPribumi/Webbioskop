import Hero from "./Hero";
import Cardsfilms from "./Cardsfilms";
import Cardberlangsung from "./Cardberlangsung";
import jurusan1 from "./../assets/akutansi.jpg";
import jurusan2 from "./../assets/heroo.jpg";
import jurusan3 from "./../assets/robinhood.jpg";
import jurusan4 from "./../assets/spiderman (2).jpg";
import jurusan5 from "./../assets/superman.jpg";
import jurusan6 from "./../assets/hero (2).jpg";
import berlangsung1 from "./../assets/berlangsung/everything.jpg";
import berlangsung2 from "./../assets/berlangsung/infinite.jpg";
import berlangsung3 from "./../assets/berlangsung/joker.jpg";
import berlangsung4 from "./../assets/berlangsung/lightyear.jpg";
import berlangsung5 from "./../assets/berlangsung/morbius.jpg";
import berlangsung6 from "./../assets/berlangsung/dune.jpg";

const Maincontent = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Daftar Film</h1>
          </div>
          <div className="col-lg-4 col-12">
            <Cardsfilms
              image={jurusan1}
              films="Ant-Man"
              description="Ant-Man and the Wasp: Quantumania adalah film pahlawan super Amerika mendatang yang menampilkan karakter Marvel Comics Scott Lang/ Ant-Man dan Hope Pym/ Wasp yang diproduksi oleh Marvel Studios dan didistribusikan oleh Walt Disney Studios Motion Pictures."
            />
          </div>
          <div className="col-lg-4 col-12">
            <Cardsfilms
              image={jurusan2}
              films="Bat-Man"
              description="Batman adalah tokoh fiksi pahlawan super yang diciptakan oleh seniman Bob Kane dan penulis Bill Finger dan diterbitkan oleh DC Comics. Tokoh ini pertama muncul di Detective Comics #27. Identitas asli Batman adalah Bruce Wayne, seorang pengusaha yang kaya raya."
            />
          </div>
          <div className="col-lg-4 col-12">
            <Cardsfilms
              image={jurusan3}
              films="Robin-Hood"
              description="Robin Hood adalah tokoh dalam cerita rakyat Inggris. Ia adalah seorang bangsawan yang menjadi musuh Sheriff of Nottingham atau Prince John, melawan pejabat yang korupsi untuk kepentingan rakyat. Ia memimpin 140 orang yang disebut 'Merry Men.'"
            />
          </div>
          <div className="col-lg-4 col-12">
            <Cardsfilms
              image={jurusan4}
              films="Spider-Man"
              description="Spider-Man adalah pahlawan super yang muncul dalam buku komik Amerika yang diterbitkan oleh Marvel Comics. Dibuat oleh penulis-editor Stan Lee dan artis Steve Ditko, ia pertama kali muncul dalam buku komik antologi Amazing Fantasy #15 di Silver Age of Comic Books."
            />
          </div>
          <div className="col-lg-4 col-12">
            <Cardsfilms
              image={jurusan5}
              films="Super-Man"
              description="Superman (bahasa Indonesia: Manusia Super), adalah pahlawan super fiksi yang muncul dalam buku komik Amerika yang diterbitkan oleh DC Comics. Superman secara luas telah dianggap sebagai ikon budaya yang melambangkan kekuatan budaya Amerika Serikat."
            />
          </div>
          <div className="col-lg-4 col-12">
            <Cardsfilms
              image={jurusan6}
              films="Avengers"
              description="The Avengers, adalah film Amerika superhero (2012) yang diproduksi oleh Marvel Studios dan didistribusikan oleh Walt Disney Studios Motion Pictures yang mengadaptasi pada Marvel Comics dengan nama tim superhero yang sama."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Sedang Berlangsung</h1>
          </div>
          <div className="col-4 my-3">
            <Cardberlangsung
              image={berlangsung1}
              desc="Everything Everywhere All At Once adalah petualangan yang penuh aksi, sci-fi yang lucu dan berjiwa besar tentang seorang wanita Cina-Amerika, Seorang imigran Tiongkok terbawa dalam petualangan luar biasa, di mana dia sendiri yang dapat menyelamatkan dunia dengan menjelajahi alam semesta lain yang terhubung dengan kehidupan yang bisa dia jalani."
            />
          </div>
          <div className="col-3 my-3">
            <Cardberlangsung
              image={berlangsung2}
              desc="Infinite Storm adalah sebuah film petualangan drama Amerika tahun 2022 yang disutradarai oleh Małgorzata Szumowska, disutradarai bersama oleh Michał Englert, dan dengan skenario oleh Josh Rollins, berdasarkan artikel High Places: Footprints in the Snow Lead to an Emotional Rescue oleh Ty Gagne."
            />
          </div>
          <div className="col-4 my-3">
            <Cardberlangsung
              image={berlangsung3}
              desc="Joker adalah film cerita seru psikologis Amerika Serikat tahun 2019 yang disutradarai oleh Todd Phillips dan diproduseri oleh Todd Philips, Bradley Cooper, dan Emma Tillinger Koskoff. "
            />
          </div>
          <div className="col-4 my-3">
            <Cardberlangsung
              image={berlangsung4}
              desc="Lightyear adalah film aksi fiksi ilmiah animasi komputer Amerika yang akan datang yang diproduksi oleh Pixar Animation Studios dan Walt Disney Pictures dan didistribusikan oleh Walt Disney Studios Motion Pictures. "
            />
          </div>
          <div className="col-3 my-3">
            <Cardberlangsung
              image={berlangsung5}
              desc="Ahli biokimia Michael Morbius (Jared Leto) mencoba menyembuhkan dirinya sendiri dari penyakit darah langka, namun secara tidak sengaja ia menginfeksi tubuhnya dan berubah jadi mahluk yang menyerupai vampir."
            />
          </div>
          <div className="col-4 my-3">
            <Cardberlangsung
              image={berlangsung6}
              desc="Perjalanan pahlawan mitis dan emosional, Dune menceritakan kisah Paul Atreides, seorang pemuda cerdas dan berbakat yang lahir dalam takdir besar di luar pemahamannya, yang harus melakukan perjalanan ke planet paling berbahaya di alam semesta untuk memastikan masa depannya."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
