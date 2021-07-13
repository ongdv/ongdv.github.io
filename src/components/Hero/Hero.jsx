import React, { useContext, useState, useEffect } from 'react';
import { useRef } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import './hero.css';

const TITLE_LIST = ['발전하는','노력하는','공부하는', '백엔드', '프론트엔드', '클라우드', '안드로이드', 'IOS', '웹', '서버', 'AWS', 'Test Driven', '사진을 좋아하는', '미래지향적인', 'React.js', "Javascript", "Vue.js", "Spring", "Java", "Python"]

const Header = () => {
  const divRef = useRef();
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [titles, setTitles] = useState(TITLE_LIST[0]);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    
  }, []);

  useEffect(() => {
    setInterval(() => {
      divRef.current.classList.remove("typewriter");
      divRef.current.offsetWidth
      setTitles(getTitle());
      divRef.current.classList.add("typewriter")
    }, 5000);
}, [])

  const getTitle = ()  =>{
    let num;
    while(true){
      num = getRandomInt();
      if(titles !== TITLE_LIST[num]){
        break;
      }
    }
    return TITLE_LIST[num]
  }

  const getRandomInt = () => {
    const min = Math.ceil(0);
    const max = Math.floor(TITLE_LIST.length);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            <div className="typewriter" ref={divRef}>
              {titles} {' '}
            </div>
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
