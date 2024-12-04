import {React} from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import "./teamCard.css";


export default function TeamCard({ photo, name, social }) {
  
  return (
    <div className="card" >
      <img src={photo} alt={name} className="photo" />
      
      <h3 style={{color:"black"}}>{name}</h3>

      <div className="socialIcons">
        {social.github && <a href={social.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
        {social.gmail && <a href={social.gmail} target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>}
        {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
      </div>
    </div>
  );
}
