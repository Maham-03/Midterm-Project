import React from 'react'
import { Button } from './button'
import './footer.css'
import { Link } from 'react-router-dom'

const footer = () => {
    return (
        <div className='footer-container'>
          <section className="footer-subs">
            <p className='footersubs-head'>
                Join our React JS subscription to experience the depth of coding
            </p>
            <p className='footersubs-text'>
                You can unsubscribe at any time
            </p>
            <div className='input-areas'>
            <form>
                <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
            </div>
          </section>
          <div className='footer-links'>
            <div className='footerlink-wrap'>
                <div className='footerlink-item'>
                    <h2>About Us</h2>
                    <Link to='/signup'>How it works</Link>
                    <Link to='/'>How can we help you</Link>
                </div>
                <div className='footerlink-item'>
                    <h2>Contact Us</h2>
                    <Link to='/signup'>Helpline services available!</Link>
                    <Link to='/'>Get along easily</Link>
                </div>
            </div>
          </div>
          <section className='social-media'>
            <small className='website-rights'> REACT JS 2024</small>
            <div className='socialmedia-wrap'>
              <div className="social-icons">
                <Link to='/' className='socialicon-fb'>
                   <i className='fab fa-facebook'></i>
                </Link>
                
                <Link to='/' className='socialicon-insta'>
                   <i className='fab fa-instagram'></i>
                </Link>

                <Link to='/' className='socialicon-yt'>
                   <i className='fab fa-youtube'></i>
                </Link>

                <Link to='/' className='socialicon-linkedin'>
                   <i className='fab fa-linkedin'></i>
                </Link>

                <Link to='/' className='socialicon-twitter'>
                   <i className='fab fa-twitter'></i>
                </Link>
              </div>
            </div>
          </section>
          
        </div>
      )
    }
export default footer
