function Hero() {
  return (
    <section className="hero">

      <div className="hero-image">
        <img
          src="https://via.placeholder.com/250"
          alt="profile"
        />
      </div>

      <div className="hero-content">
        <h1>K. Abhilash</h1>

        <h2>B.Tech Student</h2>

        <h3>KLH University (2025 - 2029)</h3>

        <p>
          Passionate about Web Development,
          Cloud Computing, Cyber Security,
          and Artificial Intelligence.
        </p>

        <div className="hero-buttons">
          <button>Download Resume</button>
          <button className="secondary">
            Contact Me
          </button>
        </div>
      </div>

    </section>
  );
}

export default Hero;