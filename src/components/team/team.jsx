import React,{ useEffect } from "react";
import './style.css';
import TeamCard from "./teamCard/teamCard";
import teamInfo from "../assets/TeamInfo/TeamInfo";
import AOS from "aos";
import 'aos/dist/aos.css';
import Bgvideo from "../assets/nebula.mp4";

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="team-container" data-aos="fade-in">
      {/* Background video */}
      <video autoPlay loop muted className="bg-vid">
        <source src={Bgvideo} type="video/mp4" />
      </video>

      {/* Team Sections */}
      {Object.entries(teamInfo).map(([designation, members], index) => (
        <div key={index} className="designation-section" data-aos="fade-in">
          <h2>{designation}</h2>
          <div className="cards-container" data->{members.map((member, idx) => (
              <TeamCard
                key={idx}
                photo={member.photo}
                name={member.name}
                social={member.social}
              />
            ))}
            </div>
        </div>
      ))}
    </div>
  );
}
