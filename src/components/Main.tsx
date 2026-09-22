import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import { Introduction } from "$customTypes/intro.types";

function Main({ data }: { data: Introduction}) {
  const parser = new DOMParser();

  return (
    <div className="container">
      <div id="main" className="about-section">
        {/* <div className="image-wrapper">
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" />
        </div> */}
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/bibubobee" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/gabriel-ortiz-386a09254" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1 dangerouslySetInnerHTML={{__html: data.title}}></h1>
          <p>{data.subtitle}</p>
          <br/>
          <p className="contact" dangerouslySetInnerHTML={{__html: data.contact}} />

          <div className="mobile_social_icons">
            <a href="https://github.com/bibubobee" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/gabriel-ortiz-386a09254" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;