import React from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { services } from './ProductsData'
import './products.css'

const ServiceCard = ({ index, path, title, name, icon }) => {
    return (
        <Tilt className='tilt'>
            <motion.div 
                className='card'
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            >
                <div
                    options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                    }}
                    className='card-content'
                >
                    <img
                        src={icon}
                        alt='web-development'
                        className='card-img'
                        draggable={false}
                    />
                    <div className='download'>
                        <Link to={path}>
                            <div className='circle'>
                                <i class="ri-download-cloud-2-line"></i>
                            </div>
                        </Link>
                    </div>
                    <h3 className='card-title'>
                        {name}
                        <p>{title}</p>
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    )
};

const Products = () => {

    return (
        <section id='products'>
            <div className='container'>
                <div className='kits'>
                    <div className="kits_title">
                        <motion.h1 variants={textVariant()}>
                            Products:
                        </motion.h1>
                        <motion.p variants={textVariant()}>
                            Drum kits & Loop kits for Pirates of Sound
                        </motion.p>
                    </div>
                    <div className='kits_cards'>
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} index={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionWrapper(Products);