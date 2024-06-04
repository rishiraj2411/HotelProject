import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Hotel3() {
  return (
    <div>
      <nav>
      <div class="nav__bar">
        <div class="nav__header">
          <div class="logo nav__logo">
            <div>TJ</div>
            <span
              >Taj<br /><span>Hotel<br /></span>Group</span
            >
          </div>
        </div>
        <ul class="nav__links" id="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#room">Room</a></li>
        </ul>
      </div>
    </nav>

    <header class="header" id="home">
      <div class="section_container header_container"></div>
    </header>

    <section class="room__container" id="room">
      <p class="section__subheader">Hotels</p>
      <h2 class="section__header">Taj Exotica Resort & Spa</h2>
      <div class="room__grid">
        <div class="room__card">
          <img src="Images/R8.jpg" alt="room" />
          <div class="room_card_details">
            <div>
              <p class="section__subheader">ROOM DETAILS</p>
              <h3 class="section__header">DELUXE ROOM KING BED</h3>
              <span>34 Sq m | Up to 3 guests | King Size BED</span>
              <h4>Best Available Rate- Room Only</h4>
              <ul>
                <li>Accommodation on room only basis</li>
                <li>Inclusive of standard Wi-Fi</li>
                <li>Applicable taxes extra</li>
              </ul>
              <br />
              <p>MEMBER RATE: ₹ 7,055</p>
              <button class="btn">Login/Join</button>
              <p>STANDARD RATE: ₹ 8,300</p>
              <button class="btn">book now</button>
              <h4>Breakfast Inclusive Rate</h4>
              <ul>
                <li>
                  Inclusive of buffet breakfast at a designated dining venue
                </li>
                <li>Inclusive of standard Wi-Fi</li>
                <li>Applicable taxes extra</li>
              </ul>
              <p>MEMBER RATE: ₹ 8,075</p>
              <button class="btn">Members only</button>
              <p>STANDARD RATE: ₹ 9,500</p>
              <button class="btn">book now</button>
            </div>
          </div>
        </div>
        <div class="room__card">
          <img src="Images/R9.jpg" alt="room" />
          <div class="room_card_details">
            <div class="room_card_details">
              <div>
                <p class="section__subheader">ROOM DETAILS</p>
                <h2 class="section__header">EXECUTIVE SUITE KING BED</h2>
                <span>85 Sq m | Up to 4 guests | King Size BED</span>
                <h4>Best Available Rate- Room Only</h4>
                <ul>
                  <li>Accommodation on room only basis</li>
                  <li>Inclusive of high speed Wi-Fi</li>
                  <li>Access to EXECUTIVE Lounge</li>
                </ul>
                <br />
                <p>MEMBER RATE: ₹ 10,055</p>
                <button class="btn">Login/Join</button>
                <p>STANDARD RATE: ₹ 12,300</p>
                <button class="btn">book now</button>
                <h4>Breakfast Inclusive Rate</h4>
                <ul>
                  <li>
                    Inclusive of buffet breakfast at a designated dining venue
                  </li>
                  <li>Inclusive of high speed Wi-Fi</li>
                  <li>Applicable taxes extra</li>
                </ul>
                <p>MEMBER RATE: ₹ 9,075</p>
                <button class="btn">Members only</button>
                <p>STANDARD RATE: ₹ 8,500</p>
                <button class="btn">book now</button>
              </div>
            </div>
          </div>
        </div>
        <div class="room__card">
          <img src="Images/R7.jpg" alt="room" />
          <div class="room_card_details">
            <div class="room_card_details">
              <div>
                <p class="section__subheader">ROOM DETAILS</p>
                <h2 class="section__header">PREMIER ROOM TWIN BED</h2>
                <span>50 Sq m | Up to 2 guests | Twin Size BED</span>
                <h4>Best Available Rate- Room Only</h4>
                <ul>
                  <li>Accommodation on room only basis</li>
                  <li>Inclusive of standard Wi-Fi</li>
                  <li>Complimentary minibar</li>
                </ul>
                <br />
                <p>MEMBER RATE: ₹ 7,055</p>
                <button class="btn">Login/Joins</button>
                <p>STANDARD RATE: ₹ 8,300</p>
                <button class="btn">book now</button>
                <h4>Breakfast Inclusive Rate</h4>
                <ul>
                  <li>
                    Inclusive of buffet breakfast at a designated dining venue
                  </li>
                  <li>Inclusive of standard Wi-Fi</li>
                  <li>Complimentary minibar</li>
                </ul>
                <p>MEMBER RATE: ₹ 8,075</p>
                <button class="btn">Members only</button>
                <p>STANDARD RATE: ₹ 9,500</p>
                <button class="btn">book now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="Map">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.602732535627!2d73.52355637502329!3d4.100959295872795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7c59b69897cf%3A0x47d379fc3118a3ba!2sTaj%20Exotica%20Resort%20%26%20Spa!5e0!3m2!1sen!2sin!4v1717351959389!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
      <div class="hotel-info">
        <h2>Contact Us</h2>
        <form class="contact-form" action="/submit_form" method="post">
          <div class="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div class="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              required
            ></textarea>
          </div>
          <div class="form-group full-width">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <div class="logo footer__logo">
            <div>TJ</div>
            <span
              >Taj<br /><span>Hotel<br /></span>Group</span
            >
          </div>
          <ul class="footer__socials">
            <li>
              <a href="#"><i class="ri-youtube-fill"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-instagram-line"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-linkedin-fill"></i></a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Services</h4>
          <div class="footer__links">
            <li><a href="#">Online Booking</a></li>
            <li><a href="#">Room Customization</a></li>
            <li><a href="#">Special Offers</a></li>
            <li><a href="#">Customer Support</a></li>
          </div>
        </div>
        <div class="footer__col">
          <h4>Contact Us</h4>
          <div class="footer__links">
            <li>
              <span><i class="ri-phone-fill"></i></span>
              <div>
                <h5>Phone Number</h5>
                <p>+91 987654321</p>
              </div>
            </li>
            <li>
              <span><i class="ri-record-mail-line"></i></span>
              <div>
                <h5>Email</h5>
                <p>info@hotelTajGroupindia.com</p>
              </div>
            </li>
            <li>
              <span><i class="ri-map-pin-2-fill"></i></span>
              <div>
                <h5>Location</h5>
                <p>
                  Taj M G Road, Bengaluru 41/3, Mahatma Gandhi Road, Key
                  Landmarks
                </p>
              </div>
            </li>
          </div>
        </div>
      </div>
      <div class="footer__bar">Copyright © 2024 by Rishiraj</div>
    </footer>
    </div>
  )
}
