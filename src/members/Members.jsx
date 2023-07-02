import React from "react";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { yt, ig, sc } from "../assets";
import { experiences } from "./MembersData";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion"
import "./members.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#000",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #fff" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='members-pfp'>
          <img
            src={experience.icon}
            alt={experience.title}
            className='members-pfp-img'
          />
        </div>
      }
    >
      <div>
        <h3 className='members-name'>{experience.title}</h3>
        <p
          className='members-ocupation'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='members-socials'>
          <li
            className='socials'
          >
            <div className="socials-text"><img src={yt} /><span><Link to={experience.yt}>youtube</Link></span></div>
            <div className="socials-text"><img src={ig} /><span><Link to={experience.ig}>instagram</Link></span></div>
            <div className="socials-text"><img src={sc} /><span><Link to={experience.sc}>soundcloud</Link></span></div>
          </li>
      </ul>
    </VerticalTimelineElement>
  );
};

const Sailors = () => {
  return (
    <div id="sailors">
      <div className="conteiner">
        <motion.div variants={textVariant()} className="members-title">
          <h1>
            Sailors:
          </h1>
          <p>
            13 members of the NIGHTFALL Collective
          </p>
        </motion.div>
        <div className="members-title-hidden">
          <h1>
            Sailors:
          </h1>
          <p>
            13 members of the NIGHTFALL Collective
          </p>
        </div>
        <div className='vtl'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Sailors);