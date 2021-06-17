// Home page
import Navbar from "../components/global/Navbar";

const Home = () => {
  window.addEventListener("click", (_) => {
    if (window.location.href.includes("#projects-dropdown")) {
      window.location.href = window.location.href.replace(
        "#projects-dropdown",
        "#"
      );
    }
  });
  return (
    <div className="home">
      <header className="home__header">
        <Navbar />
      </header>
    </div>
  );
};

export default Home;
