import "./Hero.css";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="innerWidth hero-section">
        <div className="hero-left">
          <h1 class="headings">Unlock a World of <span id="grad">Knowledge</span></h1>
          <p>
            At Vidhyakosh, discover study materials, courses,<br />
            and notes tailored to your academic journey.<br />
            Upload, share, and collaborate with fellow learners to<br />
            elevate your study experience.
          </p>
          <button className="button-blue">Get Started</button>
        </div>
        <div className="hero-right">
          <img src="./src/assets/Img.png" alt="hi" />
        </div>
      </div>
    </section>
  );
}

export default Hero;