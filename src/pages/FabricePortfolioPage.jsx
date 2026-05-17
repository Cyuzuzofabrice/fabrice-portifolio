import React, { useState } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Mail,
  ExternalLink,
} from "lucide-react";

import profilePic from "../assets/profile.jpg";

export default function FabricePortfolioPage() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        /* RESET */
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
          background: #0b0b0f;
          font-family: system-ui, Arial;
        }

        body {
          background: #0b0b0f;
        }

        .app {
          min-height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        /* THEMES */
        .dark {
          background: #0b0b0f;
          color: white;
        }

        .light {
          background: #f6f7fb;
          color: #111;
        }

        /* MAIN WRAPPER */
        .container {
          width: 100%;
          max-width: 1100px;
        }

        /* NAVBAR */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          margin: 15px;
          border-radius: 16px;
          backdrop-filter: blur(12px);
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #4f9cff;
        }

        .nav {
          display: flex;
          gap: 18px;
        }

        .nav a {
          text-decoration: none;
          color: inherit;
          font-size: 14px;
          opacity: 0.8;
        }

        .nav a:hover {
          opacity: 1;
        }

        .icon-btn {
          background: transparent;
          border: 1px solid #444;
          padding: 8px;
          border-radius: 10px;
          cursor: pointer;
          color: inherit;
        }

        /* HERO */
        .hero {
          text-align: center;
          padding: 80px 20px;
        }

        .hero img {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #4f9cff;
          margin-bottom: 20px;
        }

        .hero h1 {
          font-size: 40px;
        }

        .hero span {
          color: #4f9cff;
        }

        .hero p {
          margin-top: 12px;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.8;
          line-height: 1.6;
        }

        .btns {
          margin-top: 25px;
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .btn {
          padding: 10px 18px;
          border-radius: 25px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .primary {
          background: #4f9cff;
          color: white;
        }

        .outline {
          border: 1px solid #4f9cff;
        }

        /* SECTIONS */
        .section {
          padding: 60px 20px;
          text-align: center;
        }

        .section h2 {
          font-size: 26px;
          margin-bottom: 20px;
        }

        /* SKILLS */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }

        .card {
          padding: 15px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
        }

        /* PROJECT */
        .project {
          margin-top: 20px;
          padding: 25px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .tags span {
          background: rgba(79,156,255,0.2);
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 12px;
          margin: 3px;
          display: inline-block;
        }

        /* RESPONSIVE */
        @media(max-width:768px){
          .hero h1 { font-size: 28px; }
          .nav { display: none; }
        }
      `}</style>

      <div className={dark ? "app dark" : "app light"}>
        <div className="container">

          {/* NAV */}
          <div className="navbar">
            <div className="logo">
              <img src={profilePic} />
              <div>
                <b>Hi, I'm Fabrice C.</b><br />
                <small>Software Engineer • AUCA</small>
              </div>
            </div>

            <div className="nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </div>

            <button className="icon-btn" onClick={() => setDark(!dark)}>
              {dark ? <Sun /> : <Moon />}
            </button>
          </div>

          {/* HERO */}
          <div className="hero" id="home">
            <img src={profilePic} />

            <h1>
              Hi, I’m <span>Fabrice C.</span>
            </h1>

            <p>
              Software Engineering student at AUCA passionate about web development,
              UI/UX design, digital marketing, and creative content creation.
            </p>

            <div className="btns">
              <a className="btn primary" href="#projects">
                Projects <ExternalLink size={16} />
              </a>

              <a className="btn outline" href="#contact">
                Contact <Mail size={16} />
              </a>
            </div>
          </div>

          {/* ABOUT */}
          <div className="section" id="about">
            <h2>About Me</h2>
            <p>
             I’m  a Software Engineering student at AUCA with hands-on experience in software development, digital marketing, sales, and freelancing.

I have worked as a Digital Marketing Officer, where I developed skills in online branding, social media strategy, content creation, and audience engagement. I also gained professional experience as a Sales Executive at Afriglobal, where I improved my communication, client management, and business development skills.

In addition, I work as a freelance creator on Shopify-based projects, helping businesses build online presence and improve their digital sales performance.

My technical focus is in Software Development, UI/UX Design, and building modern web applications. I enjoy combining technology, creativity, and business strategy to build impactful digital solutions.

I am passionate about continuous learning, innovation, and creating products that solve real-world problems..
            </p>
          </div>

          {/* SKILLS */}
          <div className="section" id="skills">
            <h2>Skills</h2>

            <div className="grid">
              {[
                "React Development",
                "UI/UX Design",
                "Digital Marketing",
                "Graphic Design",
                "Video Editing",
                "Social Media Management",
              ].map((s) => (
                <div className="card" key={s}>{s}</div>
              ))}
            </div>
          </div>

          {/* PROJECT */}
          <div className="section" id="projects">
            <h2>Projects</h2>

            <div className="project">
              <h3>N9NE Platform</h3>
              <p>
                A digital ecosystem combining software engineering, branding,
                design, content creation, Digital creative, and social media managent. 
              </p>

              <div className="tags">
                <span>software development</span>
                <span>UI/UX</span>
                <span>Branding</span>
                <span>Creative Tech</span>
                 <span>Digital creative</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}