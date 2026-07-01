import React from 'react';
import { useState,useEffect } from 'react';
import Navbar from "../../../components/Navbar";
import "./style.css";
import ICClogo from "../../../img/images/ICClogo.png";
import clublogo from "../../../img/images/ComedyConsClub.png";
import RankDisplay from '../../../components/RankDisplay/index.jsx';
import openmic from "../../../img/images/comedycons/openmic.jpg";
import improv from "../../../img/images/comedycons/improv.jpg";
import HumourNite from "../../../img/images/comedycons/HumorNite.jpg";
import workshops from "../../../img/images/comedycons/workshop.jpg";
import learnerspace from "../../../img/images/comedycons/learnerspace.png"
import learnerspace1 from "../../../img/images/comedycons/learnerspace1.png";
import ASS from "../../../img/images/comedycons/annualstandupshowcase.jpg"
import LR from "../../../img/images/comedycons/LR.jpg"
import r1 from "../../../img/images/comedycons/r1.jpg"
import r2 from "../../../img/images/comedycons/r2.jpg"
import r3 from "../../../img/images/comedycons/r3.jpg"
import r4 from "../../../img/images/comedycons/r4.jpg"
import r5 from "../../../img/images/comedycons/r5.jpg"
import r6 from "../../../img/images/comedycons/r6.jpg"
import r7 from "../../../img/images/comedycons/r7.jpg"
import ihh_photo from "../../../img/images/comedycons/viraj_pondkule.jpg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
const ComedyCons = () => {
  const [showAdditionalEvents, setShowAdditionalEvents] = useState(false);
  const images = [r1, r2, r3, r4, r5, r6, r7];
  const handleLoadMore = () => {
    setShowAdditionalEvents(!showAdditionalEvents);

  };
  const settings = {
    dots: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    swipe : true
  };
  useEffect(() => {
    AOS.init({
      duration : 1100 ,
    });
  }, []);
  const comedyItems = [
    {
      title: 'Workshop',
      description: 'Interactive sessions with pros to sharpen your comedy timing and scriptwriting.',
      image: workshops,
    },
    {
      title: 'Learner Space',
      description: 'We have curated a "Stand Up Comedy 101" course which covers everything from writing to performing your very own original set. The goal of this course is to help you turn every funny thought and story into the best possible material on stage.',
      image: learnerspace1,
    },
    {
      title: 'SSOC',
      description: 'Comedy cons a detailed course for comedy enthusiasts under ',
      image: learnerspace,
    },
  ];

  return (
    <div
    className="comedy-page-wrapper"
    style={{overflowX:"hidden"}}
>
        <Navbar/>
        <div className="cover_img_comedy">

    <div className="hero-dark-overlay"></div>

    <div className="hero-content">

        <p className="hero-club">

            IIT BOMBAY HUMOUR CLUB

        </p>

        <h1 className="hero-title">

            Comedy<span>Cons</span>

        </h1>

        <div className="hero-divider"></div>

        <h2 className="hero-subtitle">

            Where Every Punchline
            Finds An Audience

        </h2>

        <p className="hero-small">

            Stand-up • Improv • Sketch • Open Mic

        </p>

        <button
            className="hero-btn"
            onClick={() =>
                document
                    .querySelector(".events_")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    })
            }
        >
            Explore Events
        </button>

        <div className="hero-socials">

            <a
                href="https://www.instagram.com/comedycons_iitb/"
                target="_blank"
                rel="noreferrer"
            >
                <i className="bi bi-instagram"></i>
            </a>

            <a
                href="https://www.youtube.com/@ComedyCons_IITB"
                target="_blank"
                rel="noreferrer"
            >
                <i className="bi bi-youtube"></i>
            </a>

        </div>

    </div>

</div>
        <section id="about" className="about-section">
          <div className='ind_head'  data-aos="fade-right">
            <h4 className='ind_head_h4 introtext'>
              The Humour Club of IIT Bombay
            </h4>
            <p className='ind_head_p introparafont'>
              Comedy Cons is the Comedy Club of IIT Bombay. Our club is the ultimate hub of humour, creativity and self-expression on the IITB campus. We provide a platform for beginners and enthusiasts to excel in the field of comedy by conducting regular workshops, jamming sessions and open mics with professional artists and senior students to guide our members.
</p>
            <section className="secy" data-aos="zoom-in">
            <div className="secy-divs">
        <div className="secy-div" style={{height:"220px",width:"220px"}}>
          <img src={ihh_photo} className=""></img>
        </div>
        <div>
          <h4 className='about_us_h4'>Viraj Pondkule</h4>
          <p>Institute Humour Nominee</p>
          <div className="links">
          <a href="https://www.linkedin.com/in/viraj-pondkule-30817b30b/" className="linkedin"><i className="bi bi-linkedin"></i></a>
          <a href="mailto:virajpondkule3100@gmail.com" className="email"><i className="bi bi-envelope"></i></a>
          <a href="https://www.instagram.com/v.i.r.a.j.3100/" className="instagram"><i className="bi bi-instagram"></i></a>          
          </div>
        </div>
      </div>
    </section>
          </div>
          <div className='ind_img logo' data-aos="fade-left">
            <img src={clublogo}></img>
          </div>
        </section>
        <div className='events_'>
          <h4 className='about_us_h4 text-center' >Events</h4>
          <div class="flagship">
            <div className='events_div rotating-bg-card' data-aos="zoom-in">
            <div>
              <img src={ASS}></img>
            </div>
            <div className='events_1_div highlighted-text-div'>
              <div style={{textAlign:"center"}}>
              </div>
              <div className='events_desc'>
                <h4>
                Annual StandUp Showcase (ASS)
                </h4>
                <h4>
                {/* Venue: Convocation Hall  */}
                </h4>
                <p>
                It marks the biggest Comedy showcase in the institute. The Institute witnesses amazing performances from various genres, all of which are handpicked from the best of the best during yearlong efforts.</p>
              </div>
            </div>
          </div>
          </div>
          <div className='events_divs'>
          <div className='events_div' data-aos="zoom-in">
            <div>
              <img src={LR}></img>
            </div>
            <div className='events_1_div'>
              <div style={{textAlign:"center"}}>
              </div>
              <div className='events_desc'>
                <h4>
                 Laughter Riots
                </h4>
                <h4>
                  {/* Venue:LTPCSA */}
                </h4>
                <p>The ultimate Stand Up Comedy showdown where 4 teams of freshers, each mentored by our beloved seniors compete for the trophy.</p>
              </div>
            </div>
          </div>
          <div className='events_div' data-aos="zoom-in">
            <div>
              <img src={HumourNite}></img>
            </div>
            <div className='events_1_div'>
              <div style={{textAlign:"center"}}>
              </div>
              <div className='events_desc'>
                <h4>
                  Humour Nite
                </h4>
                <h4>
                  {/* Venue:-LTPCSA */}
                </h4>
                <p>
                A fun orientation to our club where freshers take the stage for the first time
                </p>
              </div>
            </div>
          </div>
          </div>
          <div className='events_divs'>
          {showAdditionalEvents &&
          <>
          <div className='events_div' data-aos="zoom-in">
            <div>
              <img src={openmic}></img>
            </div>
            <div className='events_1_div'>
              <div style={{textAlign:"center"}}>
              </div>
              <div className='events_desc'>
                <h4>
                Open Mics
                </h4>
                <h4>
                {/* Venue: Roots Room 7PM */}
                </h4>
                <p>
                The stage is set, the spotlight is on, and the laughter is about to erupt!
                </p>
              </div>
            </div>
          </div>
          <div className='events_div' data-aos="zoom-in">
            <div>
              <img src={improv}></img>
            </div>
            <div className='events_1_div'>
              <div style={{textAlign:"center"}}>
              </div>
              <div className='events_desc'>
                <h4>
                  Improv Nite
                </h4>
                <h4>
                  {/* Venue:-LTPCSA */}
                </h4>
                <p>
                Get ready for the Improv Master Finals, where laughter is the only language we speak fluently!
                </p>
              </div>
            </div>
          </div>
          </>
          }
        </div>
        <div className='text-center' data-aos="zoom-in">
          <button className="button-34 text-center" onClick={handleLoadMore}>{showAdditionalEvents ? 'Load Less' : 'Load More'}</button>
        </div>
        <div className='achievements'>
          <h4 className='about_us_h4 text-center' data-aos="zoom-in">Achievements</h4>
          <div className='achieve_divs'>
            <RankDisplay className ="rankDisplay" initialRank={100} header='Inter IIT 7.0' Subtext='Improv'/>
            <RankDisplay className ="rankDisplay" initialRank={100} header='Inter IIT 7.0' Subtext='Cup' centertext='Overall Comedy' onlytext={true}/>
            <RankDisplay className ="rankDisplay" initialRank={100} header='Inter IIT 7.0' Subtext='Stand Up' finalRank={2}/>
          </div>
        </div>
        </div>
        <div className='gallery_divs' data-aos="zoom-in">
          <h4 className='about_us_h4 text-center '>Photo Gallery</h4>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div className='gallery_' key={index}>
                <img src={image} alt={`image-${index}`} />
              </div>
            ))}
          </Slider>
        </div>
        <section className="comedy-section">
          <h2 className="comedy-title">🎤 Learn Comedy</h2>
          <div className="comedy-grid">
            {comedyItems.map((item, index) => (
              <div className="comedy-card" key={index}>
                <img src={item.image} alt={item.title} className="comedy-img" />
                <h3 className="comedy-card-title">{item.title}</h3>
                <p className="comedy-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      <footer id="footer2" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <img src={ICClogo} alt="" />
              </a>
             <div className="social-links mt-3">
                <a href="https://x.com/Cult_IITB/" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="https://www.facebook.com/IITBCult/" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/culturals.iitb" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="https://linkedin.com/company/culturals-iit-bombay" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4 className="about_us_h4">Contact Us</h4>
              <p className="about_us_p" style={{color:"grey"}}>
                Old SAC <br />
                IIT Bombay<br />
                Mumbai,India <br /><br />
                <strong>Phone:</strong> +91 81692 53646<br />
                <strong>Email:</strong> gseccult@iitb.ac.in<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default ComedyCons;
