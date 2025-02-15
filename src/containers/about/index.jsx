import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { FaDatabase } from 'react-icons/fa';
import { DiJava, DiPython} from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import "./styles.scss";
const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }

  return age;
};

const personalDetails = [
  {
    label: "Name",
    value: "Mouneesh Gangadhari",
  },
  {
    label: "Age",
    value: calculateAge("2003-06-08"),
  },
  {
    label: "Address",
    value: "Hyderabad, Telangana, India",
  },
  {
    label: "Email",
    value: "gangadharimouneesh@gmail.com",
  },
  {
    label: "Contact No",
    value: "8523051130",
  },
];

const jobSummary =
  "As a software engineering , I bring a diverse set of skills to the table, combining foundational programming knowledge with a growing expertise in web development. I have hands-on experience with Java and Python, leveraging object-oriented programming principles to build efficient and scalable applications. My intermediate proficiency in HTML, CSS, JavaScript, and React allows me to create dynamic and responsive web interfaces. Additionally, I am developing my understanding of cybersecurity principles, which enhances my ability to build secure and resilient applications. My strong problem-solving abilities, eagerness to learn, and commitment to continuous improvement make me a valuable asset to any team.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
             
             
              <div>
                <SiJavascript size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiJava size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiPython size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
