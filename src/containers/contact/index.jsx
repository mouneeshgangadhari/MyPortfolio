import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./styles.scss";

const Contact = () => {
  const email = "gangadharimouneesh@example.com";
  const phoneNumber = "+918523051130";
  const mailtoLink = `mailto:${email}?subject=Contact%20Form%20Submission&body=Hello%20${"mouneeshgangadhari"},%0D%0A%0D%0AThis%20is%20a%20message%20from%20the%20contact%20form.%0D%0A%0D%0A%20%0D%0A%0D%0A%20%0D%0AThank%20you!`;
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[\s+()\-]/g, "")}`;
  const githubLink = "https://github.com/mouneeshgangadhari";
  const leetcodeLink = "https://leetcode.com/u/Mouneesh116/";
  const linkedinLink = "https://www.linkedin.com/in/mouneesh-gangadhari-72786925b/";

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <div className="contact__content__info">
          <p className="contact__content__info__details">
            <strong>Email:</strong>{" "}
            <a href={mailtoLink} className="contact__content__email-link">
              {email}
            </a>
          </p>
          <p className="contact__content__info__details">
            <strong>Phone:</strong>{" "}
            <a href={whatsappLink} className="contact__content__phone-link">
              {phoneNumber}
            </a>
          </p>
          <p className="contact__content__info__details">
            <strong>GitHub:</strong>{" "}
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{ marginRight: "10px" }} />
            </a>
          </p>
          <p className="contact__content__info__details">
            <strong>LeetCode:</strong>{" "}
            <a href={leetcodeLink} target="_blank" rel="noopener noreferrer">
              <SiLeetcode size={30} style={{ marginRight: "10px" }} />
            </a>
          </p>
          <p className="contact__content__info__details">
            <strong>LinkedIn:</strong>{" "}
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ marginRight: "10px" }} />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
