import React from 'react';
import './home.css';

const Home = () => {
    return (
      <div>
        <header>
          <div className="logo">Study Group Hub</div>
          <nav>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#signup">Sign Up</a></li>
            </ul>
          </nav>
        </header>
  
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Study Group Hub</h1>
            <p>Discover the power of collaboration and knowledge sharing.</p>
            <a href="#signup" className="cta-button">Get Started</a>
          </div>
        </section>
  
        <section id="features" className="features">
          <div className="feature">
            <i className="fa fa-comments"></i>
            <h2>Real-time Communication</h2>
            <p>Engage in instant collaboration and discussion within study groups.</p>
          </div>
  
          <div className="feature">
            <i className="fa fa-file"></i>
            <h2>File Sharing</h2>
            <p>Share documents and notes seamlessly in real time.</p>
          </div>
          {/* Add more features as needed */}
        </section>
  
        <section id="how-it-works" className="how-it-works">
          <h2>How It Works</h2>
          <p>Joining a study group and collaborating on assignments is easy with Study Group Hub. Follow these simple steps:</p>
          <ul>
            <li>Create an account on Study Group Hub.</li>
            <li>Browse and discover study groups based on your interests or courses.</li>
            <li>Join a study group or create your own and invite friends.</li>
            <li>Start collaborating, sharing files, and scheduling study sessions.</li>
          </ul>
        </section>
  
        <section id="testimonials" className="testimonials">
          <h2>What Users Say</h2>
          <div className="testimonial">
            <p>"Study Group Hub transformed the way I approach assignments. The collaboration features are fantastic!"</p>
            <span>- John Doe</span>
          </div>
          {/* Additional testimonials as needed */}
        </section>
  
        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? We'd love to hear from you.</p>
          <a href="#signup" className="cta-button">Sign Up Now</a>
        </section>
  
        <footer>
          <p>&copy; 2023 Study Group Hub. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  export default Home;