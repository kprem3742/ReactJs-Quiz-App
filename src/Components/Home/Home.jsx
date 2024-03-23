import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>QUIZZ-APP</h1>
      <hr />
      <h4>Subject Selection:</h4>
      {/* Use Link component to navigate to Java component */}
      <Link to="/java">
        <button>Java</button>
      </Link>
      {/* Similarly, define Link components for other subjects */}
      <Link to="/python">
        <button>Python</button>
      </Link>
      <Link to="/GeneralAptitude">
        <button>General Aptitude</button>
      </Link>
    </div>
  );
};

export default Home;
