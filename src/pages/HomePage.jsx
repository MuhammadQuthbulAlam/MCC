import HeroImage from "../assets/images/MCC.jpg";
import AboutImage from "../assets/images/about.svg";
import Profile1 from "../assets/images/profile-1.jpg";

const HomePage = () => {
  return (
    <div className="homepage pb-10" id="home">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Majalengka
              <span className="font-bold text-sky-400"> Creative Center</span>
            </h1>
            <p className="text-base/8 mb-7">
              Gedung Creative Center merupakan bentuk stimulasi yang diberikan
              kepada pelaku kreatif di Jabar, terutama kepada generasi muda guna
              menunjang industri kreatif dalam meningkatkan ekonomi.
            </p>
            <a
              href="#"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
            >
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="md:w-full w-[400px] mx-auto  md:m-0 rounded-lg"
            />
          </div>
        </div>
        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32"
          id="about"
        >
          <div className="box md:order-1 order-2">
            <img
              src={AboutImage}
              alt="Aboout Image"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto"
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Majalengka
              <span className="font-bold text-sky-400"> Creative Center</span>
            </h1>
            <p className="text-base/loose">
              Gedung Creative Center merupakan bentuk stimulasi yang diberikan
              kepada pelaku kreatif di Jabar, terutama kepada generasi muda guna
              menunjang industri kreatif dalam meningkatkan ekonomi.
            </p>
          </div>
        </div>
        <div className="profile pt-32" id="profile">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Profil Ekonomi Kreatif
          </h1>
          <p className="text-center">Ekkonomi Kreatif</p>
          <div className="profile-box pt-12 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Profile Name 1</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tempora aspernatur ab nisi saepe illo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
