import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.scss";

const portfolioData = [
  {
    id: 3,
    name: "Todo App",
    image: "https://raw.githubusercontent.com/mouneeshgangadhari/portfolio/main/image2.jpg",
    link: "https://github.com/mouneeshgangadhari/ToDo",
    category: "Development",
  },
  {
    id: 4,
    name: "Crop-Damage Estimation",
    image: "https://github.com/mouneeshgangadhari/portfolio/blob/main/image3.png?raw=true",
    link: "https://github.com/mouneeshgangadhari/Crop-Damage-Estimation-Using-Satellite-Image-and-Transformer-model",
    category: "Deep-learning",
  },
  {
    id: 2,
    name: "Key-Logger",
    image: "https://raw.githubusercontent.com/mouneeshgangadhari/portfolio/main/image1.png",
    link: "https://github.com/mouneeshgangadhari/KeyLogger",
    category: "CyberSecurity",
  },
  {
    id: 5,
    name: "EtherVote E-Voting System using Blockchain Technology",
    image: "https://raw.githubusercontent.com/mouneeshgangadhari/portfolio/refs/heads/main/image4.webp",
    link: "https://github.com/mouneeshgangadhari/EtherVote-E-Voting-System-using-Blockchain-Technology",
    category: "BlockChain",
  }
];

const filterData = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "CyberSecurity" },
  { filterId: 3, label: "Development" },
  { filterId: 4, label: "Deep-learning" },
  { filterId: 5, label: "BlockChain" }
];

const Projects = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.category === filterData.find(f => f.filterId === filteredValue)?.label);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={item.id}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="overlay">
                {index === hoveredValue && (
                  <div className="overlay-content">
                    <p>{item.name}</p>
                  </div>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
