import './style.css';
import RotatingGlobe from '../globe/globe';
export default function Aboutus(){
    return(
        <>
    <div className='main-globe-container'>
      <RotatingGlobe/>
      <div>
        <h1 className='heading'>About Us</h1>
        <p className='textContent'>Welcome to the Space Club of PSIT Kanpur, where we embark on thrilling journeys beyond the limits of our planet and explore the vast wonders of the cosmos. Founded with a passion for space exploration and a commitment to fostering scientific curiosity, our club brings together like-minded students who dream of making their mark in the fields of astronomy, astrophysics, space technology, and aerospace engineering.
        At the Space Club, we aim to inspire and nurture the next generation of space enthusiasts and professionals. </p>
      </div>
    </div>
        </>
    )
}