import React from 'react';
import {bottomDivider} from '../helper_functions/misc_elements';

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-top">
        <div className="footer-tree-left"/>
        <span>
          {"Interested in seeing the source code? "}
          <a href="https://github.com/nequalszero/ReiClone"
             className="footer-top-linktag">
            Check it out
          </a>
          {" on this page."}
        </span>
        <div className="footer-tree-right"/>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-centered">
          <div className="footer-details">
            <div className="footer-container">
              <h2 className="footer-title">ABOUT</h2>
              <p className="footer-text">
                In case you haven't figured it out, this isn't a real shopping website.
                You can't buy anything. Sorry!
                GearFix is a full-stack application designed with a Rails back end and PostgreSQL database,
                utilizing React.js with a Redux pattern on the front end. <a href="https://www.rei.com/">REI.com</a> was the source of
                inspiration for this application.
              </p>
              <p className="footer-text">
                <a href="https://github.com/nequalszero/ReiClone">Click here</a> to see my code!
              </p>
            </div>
            <div className="footer-container">
              <h2 className="footer-title">WHAT IS REI?</h2>
              <p className="footer-text">
                REI is a national outdoor retail co-op dedicated to inspiring, educating and outfitting its
                members and the community for a lifetime of outdoor adventure and stewardship. <a href="https://www.rei.com/about-rei.html">
                Read their story</a>
              </p>
            </div>
            <div className="footer-container">
              <h2 className="footer-title">LINKS</h2>
              <p className="link-text">
                <div className="linked-in-container">
                  <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                  <a href="https://www.linkedin.com/in/travis-ludlum">LinkedIn</a>
                </div>
                <div className="github-container">
                  <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                  <a href="https://github.com/nequalszero">Github</a>
                </div>
              </p>
            </div>
          </div>
          <div className="footer-bottom-border" />;
        </div>
      </div>
    </div>
  );
};

export default Footer;
