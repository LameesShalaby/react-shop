import React from 'react'
import './About.css'
import aboutLeft from '../../assets/assets/images/about-left-image.jpg'
import teamMember from '../../assets/assets/images/team-member-01.jpg'
import teamMember2 from '../../assets/assets/images/team-member-02.jpg'
import teamMember3 from '../../assets/assets/images/team-member-03.jpg'
import service1 from '../../assets/assets/images/service-01.jpg'
import service2 from '../../assets/assets/images/service-02.jpg'
import service3 from '../../assets/assets/images/service-03.jpg'



const About = () => {
  return (
    <>
      <div>
        {/* ***** Main Banner Area Start ***** */}
        <div className="page-heading about-page-heading" id="top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content animate__animated animate__fadeInDown animate__delay-1s">
                  <h2>About Our Company</h2>
                  <span>Awesome, clean &amp; creative HTML5 Template</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Main Banner Area End ***** */}
        {/* ***** About Area Starts ***** */}
        <div className="about-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 animate__animated animate__fadeInLeft animate__delay-2s">
                <div className="left-image">
                  <img src={aboutLeft} alt="" />
                </div>
              </div>
              <div className="col-lg-6 animate__animated animate__fadeInRight animate__delay-2s">
                <div className="right-content">
                  <h4>About Us &amp; Our Skills</h4>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
                  <div className="quote">
                    <i className="fa fa-quote-left" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod kon tempor incididunt ut labore.</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-behance" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ***** About Area Ends ***** */}
        {/* ***** Our Team Area Starts ***** */}
        <section className="our-team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 animate__animated animate__fadeInDown animate__delay-3s">
                <div className="section-heading">
                  <h2>Our Amazing Team</h2>
                  <span>Details to details is what makes Hexashop different from the other themes.</span>
                </div>
              </div>
              <div className="col-lg-4 animate__animated animate__fadeInUp animate__delay-3s">
                <div className="team-item">
                  <div className="thumb">
                    <div className="hover-effect">
                      <div className="inner-content">
                        <ul>
                          <li><a href="#"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                          <li><a href="#"><i className="fa fa-behance" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <img src={teamMember} />
                  </div>
                  <div className="down-content">
                    <h4>Ragnar Lodbrok</h4>
                    <span>Product Caretaker</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 animate__animated animate__fadeInUp animate__delay-3s">
                <div className="team-item">
                  <div className="thumb">
                    <div className="hover-effect">
                      <div className="inner-content">
                        <ul>
                          <li><a href="#"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                          <li><a href="#"><i className="fa fa-behance" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <img src={teamMember2} />
                  </div>
                  <div className="down-content">
                    <h4>Ragnar Lodbrok</h4>
                    <span>Product Caretaker</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 animate__animated animate__fadeInUp animate__delay-3s">
                <div className="team-item">
                  <div className="thumb">
                    <div className="hover-effect">
                      <div className="inner-content">
                        <ul>
                          <li><a href="#"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                          <li><a href="#"><i className="fa fa-behance" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <img src={teamMember3}/>
                  </div>
                  <div className="down-content">
                    <h4>Ragnar Lodbrok</h4>
                    <span>Product Caretaker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Our Team Area Ends ***** */}
        {/* ***** Services Area Starts ***** */}
        <section className="our-services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12  animate__animated animate__fadeInDown animate__delay-4s">
                <div className="section-heading">
                  <h2>Our Services</h2>
                  <span>Details to details is what makes Hexashop different from the other themes.</span>
                </div>
              </div>
              <div className="col-lg-4 animate__animated animate__fadeInUp animate__delay-4s">
                <div className="service-item">
                  <h4>Synther Vaporware</h4>
                  <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                  <img src={service1} alt="" />
                </div>
              </div>
              <div className="col-lg-4 animate__animated animate__fadeInUp animate__delay-4s">
                <div className="service-item">
                  <h4>Locavore Squidward</h4>
                  <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                  <img src={service2} alt="" />
                </div>
              </div>
              <div className="col-lg-4 animate__animated animate__fadeInUp animate__delay-4s">
                <div className="service-item">
                  <h4>Health Gothfam</h4>
                  <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                  <img src={service3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Services Area Ends ***** */}
        {/* ***** Subscribe Area Starts ***** */}
        <div className="subscribe">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 animate__animated animate__fadeInLeft animate__delay-5s">
                <div className="section-heading">
                  <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                  <span>Details to details is what makes Hexashop different from the other themes.</span>
                </div>
                <form id="subscribe" action={`${true}`} method="POST">
                  <div className="row">
                    <div className="col-lg-5">
                      <fieldset>
                        <input name="name" type="text" id="name" placeholder="Your Name" required />
                      </fieldset>
                    </div>
                    <div className="col-lg-5">
                      <fieldset>
                        <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required />
                      </fieldset>
                    </div>
                    <div className="col-lg-2">
                      <fieldset>
                        <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane" /></button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 animate__animated animate__fadeInRight animate__delay-5s">
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li>Store Location:<br /><span>Sunny Isles Beach, FL 33160, United States</span></li>
                      <li>Phone:<br /><span>010-020-0340</span></li>
                      <li>Office Location:<br /><span>North Miami Beach</span></li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Work Hours:<br /><span>07:30 AM - 9:30 PM Daily</span></li>
                      <li>Email:<br /><span>info@company.com</span></li>
                      <li>Social Media:<br /><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About