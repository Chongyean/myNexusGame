import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}

        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a varienty of properties that suit you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Search for Game" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">

            {/* Premium Products*/}
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
              <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            {/*Happy Customers*/}
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
              <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            {/*Award winning msg*/}
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
              <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>

          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
