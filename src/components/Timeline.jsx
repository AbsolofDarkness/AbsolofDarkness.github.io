import { MDBCol, MDBRow } from "mdbreact";
import React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <MDBRow>
      <MDBCol md="12">
        <div className="profile-timeline">
          <div className="timeline">
            <span className="timeline-icon" />
            <span className="year">2018 - 2019</span>
            <div className="timeline-content">
              <h3 className="title">Full-Stack Developer</h3>
              <span className="description text-left">
                Northwestern University, Evanston, USA
                <ul>
                  <li>Created responsive websites from scratch</li>
                  <li>Developed front-end and back-end of web applications.</li>
                  <li>
                    Develop web applications according to the client's
                    requirement.
                  </li>
                  <li>Make web apps in React.js</li>
                </ul>
              </span>
            </div>
          </div>
          <div className="timeline">
            <span className="timeline-icon" />
            <span className="year">2014 - 2016</span>
            <div className="timeline-content">
              <h3 className="title">3D Gaming & App Development</h3>
              <span className="description text-left">
                Lake County High Schools Technology Campus, Grayslake, USA
                <ul>
                  <li>2D/3D Game Programming</li>
                  <li>Android App Development</li>
                  <li>
                    Introduction to addressing computer hardware and software,
                    networking, telecommunications, and computer related issues
                  </li>
                </ul>
              </span>
            </div>
          </div>
          <div className="timeline">
            <span className="timeline-icon" />
            <span className="year">2012 - 2016</span>
            <div className="timeline-content">
              <h3 className="title">High School Diploma</h3>
              <span className="description text-left">
                Adlai E Stevenson High School, Lincolnshire, USA
                <ul>
                  <li>Web Programming</li>
                  <li>2D/3D Game Development in Unity3D</li>
                  <li>C++/Java Programming</li>
                </ul>
              </span>
            </div>
          </div>
          <div className="timeline">
            <span className="timeline-icon" />
            <span className="year">2011</span>
            <div className="timeline-content">
              <h3 className="title">Web Design & Flash Animation</h3>
              <p className="description">iD Tech Camp, Evanston, USA</p>
            </div>
          </div>
        </div>
      </MDBCol>
    </MDBRow>
  );
};

export default Timeline;
