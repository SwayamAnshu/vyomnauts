import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Modal from 'react-modal';
import 'aos/dist/aos.css';
import './project.css';  // Import your CSS styles

Modal.setAppElement('#root');  // Correct this

const Projects = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projectDetails = {
    CANSAT1: {
      title: "ISRO CANSAT-I",
      description: "Cansats are small devices, about the size of a soft drink can, that simulate real satellite missions by performing tasks like data collection and telemetry. They offer hands-on experience in aerospace engineering, programming, and electronics, mirroring real-world space challenges.In the 2023-24 edition, our team, PSIT Cosmonauts, participated with our CANSAT, Abhay Charan, securing 7th place nationally. This achievement highlighted our technical expertise, innovation, and teamwork, earning recognition from Dr. S. Somanath, ISRO Director, who praised our efforts. This milestone motivates us to excel in future aerospace challenges like the NASA CANSAT competition, marking a proud moment for our team and PSIT."
    },
    CANSAT2: {
      title: "ISRO CANSAT-II",
      description: " After last year's success with our CANSAT, Abhay Charan, which secured 7th place nationwide, we have taken our learnings to heart and are returning stronger than ever. This year, we proudly present our new CANSAT, Rohini Sat, a refined and advanced model designed to meet the rigorous challenges of the competition. Our experience from the 2023-24 competition has sharpened our skills in aerospace engineering, electronics, and programming. With Rohini Sat, we have incorporated several technical improvements to push the limits of what we can achieve. We are confident that this year's entry will surpass the performance of our previous efforts. The recognition we received from Dr. S. Somanath, Director of ISRO, for our last project has fueled our determination to excel further. With a clear vision, advanced preparation, and a more ambitious mission, we are aiming for even greater success in the 2024-25 competition, setting our sights on making a significant mark in the world of aerospace engineering."
    },
    Rocketry: {
      title: "Rocketry",
      description: "Our team has been working tirelessly to prepare for this prestigious event, and we are proud to present our rocket, Trishul, a highly engineered and innovative design aimed at showcasing our expertise in rocketry. This competition is an exciting opportunity to demonstrate our skills in rocket design, propulsion, and launch techniques, and we are eager to make our mark in this groundbreaking event. Trishul is the product of months of careful planning, testing, and refinement, ensuring that it meets the technical and safety standards required for this challenging competition. Participating in India's first rocketry competition is a matter of great pride for us, and we are committed to delivering a performance that will establish Team Sudarshan as a leader in this field. With our dedication, creativity, and technical prowess, we aim to push the boundaries of what is possible in rocketry and leave a lasting impression on this inaugural event."
    },
    Robotics: {
      title: "CHEETAH",
      description: "The Cheetah Robot is known for its agility, speed, and ability to mimic the dynamic movements of a real cheetah, making it a significant engineering and robotics challenge. Inspired by these breakthroughs, we aim to design and build our own version of this cutting-edge robot, casting it as a unique project from our college. Our team is dedicated to mastering the technical complexities involved in building a robot capable of advanced movement and control. From mechanical design to electronics and AI programming, this project will push our skills to the next level. We see this as a chance not only to learn from the innovations of renowned institutions like MIT and IIT Kanpur but also to add our creative improvements to the design. By developing this Cheetah Robot as a college project, we aim to enhance our institution's reputation in the field of robotics and inspire future students to pursue ambitious technological projects. It’s a bold initiative that will mark our entry into the world of advanced robotics."
    },
    RoboticArm: {
      title: "Robotic Arm",
      description: "Detailed description about the Robotic Arm project.Project is ongoing and soon description will be published"
    }
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (project) => {
    setModalOpen(true);
    setModalContent(project);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };
  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",  // Dark semi-transparent background
      backdropFilter: "blur(10px)",           // This is the glass effect
      WebkitBackdropFilter: "blur(10px)",     // For Safari support
    },
    content: {
      background: "rgba(255, 255, 255, 0.7)", // Semi-transparent background for the content
      border: "none",
      borderRadius: "10px",
      padding: "20px",
      maxWidth: "100%",
      margintop:"10%",
     
      margin: "auto",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    },
  };
  

  return (
    <div className="projects-page" data-aos="fade-in">
      <h1 className="projects-heading">Space</h1>
      <div className="projects-container">
        <div className="project-card" data-aos="fade-up" data-aos-delay="100" onClick={() => openModal('CANSAT1')}>
          <h2>ISRO CANSAT-I</h2>
          <div style={{ color: "black" }}>DATE-12/12/23</div>
          <p>The CANSAT India competition is a nationally recognized event organized by the 
            Aeronautical Society of India (ASI), designed to challenge student teams to design, 
            build, and launch miniaturized satellites known as CANSATs.</p>
        </div>
        <div className="project-card" data-aos="fade-up" data-aos-delay="100" onClick={() => openModal('CANSAT2')}>
          <h2>ISRO CANSAT-II</h2>
          <div style={{ color: "black" }}>DATE-12/12/24</div>
          <p>The CANSAT India competition for 2024-25 is a highly anticipated event, and our team, 
            PSIT Vyomnauts, is ready to participate with full enthusiasm and preparation. 
          </p>
        </div>
        <div className="project-card" data-aos="fade-up" data-aos-delay="100" onClick={() => openModal('Rocketry')}>
          <h2>Rocketry</h2>
          <div style={{ color: "black" }}>DATE-12/12/23</div>
          <p>The 2024-25 rocketry competition marks a historic moment as the first-ever rocket competition to be held in India, and we are thrilled to be part of it as Team Sudarshan</p>
        </div>
      </div>

      <h1 className="projects-heading" data-aos="fade-in">Robotics</h1>
      <div className="projects-container">
        <div className="project-card" data-aos="fade-up" data-aos-delay="100" onClick={() => openModal('Robotics')}>
          <h2>CHEETAH</h2>
          <div style={{ color: "black" }}>DATE-12/12/23</div>
          <p>As part of our space club, PSIT Vyomnauts, we are embarking on an exciting project 
            to develop a Cheetah Robot, following the pioneering work done by MIT 
            and later replicated by IIT Kanpur.</p>
        </div>
        <div className="project-card" data-aos="fade-up" data-aos-delay="100" onClick={() => openModal('RoboticArm')}>
          <h2>Robotic Arm</h2>
          <div style={{ color: "black" }}>DATE-12/12/23</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit dslanldnlasd nslakndlklkas lkas ldisjilajdl jdoajsojdojaps dojaspokdpokja jldjlajsd jliasjiljdiljas lidasjildja ...</p>
        </div>
      </div>

      {/* Modal Section */}
      <Modal isOpen={modalOpen} onRequestClose={closeModal} className="modalContent" ariaHideApp={false}
      style={modalStyle}>
        {modalContent && (
          <div className='modalstyle'>
            <h2>{projectDetails[modalContent].title}</h2>
            <p className='modalDescription'>{projectDetails[modalContent].description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Projects;
