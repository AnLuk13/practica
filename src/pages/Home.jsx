import HomeCards from "../components/HomeCards";
import Navbar from "../components/NavBar";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-welcome">
        <p className="home-welcome__title">Hi there.</p>
        <p className="home-welcome__desc">Choose your service</p>
        <svg
          width="46"
          height="27"
          viewBox="0 0 46 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.4263 2.13167C39.1874 0.396898 42.017 0.403636 43.7698 2.14678C45.5484 3.91552 45.5415 6.79579 43.7545 8.55604L27.9123 24.1612C25.1874 26.8453 20.8126 26.8453 18.0877 24.1612L2.24553 8.55609C0.458515 6.79581 0.451668 3.91551 2.23029 2.14675C3.98315 0.403622 6.81271 0.396898 8.57383 2.13168L18.0877 11.5032C20.8126 14.1874 25.1874 14.1874 27.9123 11.5033L37.4263 2.13167Z"
            fill="black"
          />
        </svg>
      </div>
      <HomeCards></HomeCards>
    </div>
  );
}

export default Home;
