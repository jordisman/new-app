import React from 'react';
import {NavLink} from 'react-router-dom';
// import NavMember from './NavMember';
import css from '../styles/mentee.module.css';
import footer from './Footer';
import bubbles from '../images/dots.png';
import smiley from '../images/smiley.png';
import yellowCircle from '../images/yellowCircle.png';
import Footer from './Footer';

class Mentee extends React.Component {

  render() {
    const underline = {textDecoration: "none"};
    const textColor = {color: "white"};

    return (
      <div>

        <div className={css.menteeContainer}>

        <div className={css.item40}>
          <div className={css.yellowBubbleWrap}>
            <img src={yellowCircle} className={css.yellowBubble} /></div>
          <img src={bubbles} className={css.bubbles} />
          <p  className={css.hello}> Hello Jane, </p>
          <p className={css.wel}> Welcome to our Community! </p>

        </div>


        <div className={css.item42}>
          <div className={css.innerText}>

            <div className={css.smileyCrop}>
              <img src={smiley} className={css.smiley} />
            </div>

            <p className={css.secondTitle}>Networking</p>
            <p>
              Connect with others based on professional skills, industry, personal hobbies and other interests
            </p>
            <div className={css.redBtn}>Networking</div>
          </div>
        </div>

        <div className={css.item43}>
          <div div className={css.innerText}>
            <div className={css.smileyCrop}>
              <img src={smiley} className={css.smiley} />
            </div>

            <p className={css.secondTitle}>Find an Event</p>
            <p>
              Find out more about mentors, hear from industry experts, or meet others at an informal Virtual Happy Hour
            </p>
            <div className={css.redBtn}>Find an Event</div>
          </div>
        </div>


        <div className={css.item44}>
          <div className={css.innerText}>
            <div className={css.smileyCrop}>
              <img src={smiley} className={css.smiley} />
            </div>

            <p className={css.secondTitle}>Be a Mentor</p>
            <p>
              Provide Guidance to 3 Mentees at a time
              Host Workshops
              Build a Personal Brand

            </p>
            <div className={css.redBtn}>Be a Mentor</div>
          </div>
        </div>

        <div className={css.item45}>
          <div className={css.innerText}>
            <div className={css.smileyCrop}>
              <img src={smiley} className={css.smiley} />
            </div>

            <p className={css.secondTitle}>Be a Mentee</p>
            <p>
              Connect one on one with a mentor
              for personalized guidance on how to reach your goals
            </p>
            <div className={css.redBtn}>
              <NavLink to="./BeMentee" style={{...underline, ...textColor}}>
                Be a Mentee
              </NavLink>
            </div>
          </div>
        </div>




        </div>
        <Footer />
      </div>
    )
  }
}

export default Mentee;