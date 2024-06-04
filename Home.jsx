import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <nav>
      <div class="nav__bar">
        <div class="nav__header">
          <div class="logo nav__logo">
            <div>TJ</div>
            <span
              >Taj<br /><span>Hotel<br /></span>Group</span
            >
          </div>
          <div class="nav__menu__btn" id="menu-btn">
            <i class="ri-menu-line"></i>
          </div>
        </div>
        <ul class="nav__links" id="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#room">Hotel</a></li>
          <li><a href="#feature">Feature</a></li>
          <li><a href="#news">Activity</a></li>
          <li><a href="/login">LOGIN/JOIN</a></li>
        </ul>
      </div>
    </nav>

      <header className="header" id="home">
        <div class="section__container header__container">
          <p class="section__subheader"></p>
          <h1>
            Welcome to Your <br />
            Ultimate Escape
          </h1>
        </div>
      </header>

      <section class="booking">
        <div class="section__container booking__container">
          <form id="bookingForm" action="/" onsubmit="return validateForm()">
            <div class="input__group">
              <label for="arrival">Arrival Date</label>
              <input type="date" id="arrival" placeholder="Your Arrival Date" />
            </div>
            <div class="input__group">
              <label for="departure">Departure Date</label>
              <input
                type="date"
                id="departure"
                placeholder="Your Departure Date"
              />
            </div>
            <div class="input__group">
              <label for="guests">Guests</label>
              <input type="number" id="guests" placeholder="No Of Guests" />
            </div>
            <div class="input__group">
              <label for="hotels">Hotel</label>
              <select id="hotels" required>
                <option value="">Select a Hotel</option>
                <option value="Taj Skyline">Taj Skyline</option>
                <option value="Taj Maldives">Taj Maldives</option>
                <option value="Taj Random">Taj Random</option>
              </select>
            </div>
            <button type="submit" class="btn">
              Check Availability
            </button>
          </form>
        </div>
      </section>

      <section class="about" id="about">
        <div class="section__container about__container">
          <div class="about__grid">
            <div class="about__image">
              <img src="Images/about-2.jpg" alt="about" />
            </div>
            <div class="about__card">
              <span>
                <i class="ri-user-line"></i>
              </span>
              <h4>Strong Team</h4>
              <p>
                Unlocking Hospitality Excellence And Ensures Your Perfect Stay
              </p>
            </div>
            <div class="about__image">
              <img src="Images/about-2.jpg" alt="about" />
            </div>
            <div class="about__card">
              <span>
                <i class="ri-calendar-check-line"></i>
              </span>
              <h4>Luxury Room</h4>
              <p>Experience Unrivaled Luxury at Our Exquisite Luxury Rooms</p>
            </div>
          </div>
          <div class="about__content">
            <p class="section__subheader">ABOUT US</p>
            <h2 class="section__header">Discover Our Underground</h2>
            <p class="section__description">
              Welcome to a Taj Hotel Group realm of extraordinary
              accommodationswhere luxury, comfort, and adventure converge. Our
              underground hotels offer an unparalleled escape from the ordinary,
              inviting you to explore a subterranean world of wonders.
            </p>
          </div>
        </div>
      </section>

      <section class="hotel__room__container" id="room">
        <p class="section__subheader">Hotels</p>
        <h2 class="section__header">FEATURED TAJ HOTELS</h2>
        <div class="hotel__room__grid">
          <div class="hotel__room__card">
            <img src="Images/taj.jpg" alt="room" />
            <div class="hotel__room__card__detaills">
              <div>
                <h4>TAJ MAHAL PALACE</h4>
                <h5>Branches : Mumbai, India</h5>
              </div>
              <Link to="/hotel1">
                <button class="cardbtn">
                View Room
              </button>
              </Link>
            </div>
          </div>
          <div class="hotel__room__card">
            <img src="Images/lake.jpg" alt="room" />
            <div class="hotel__room__card__detaills">
              <div>
                <h4>TAJ LAKE PALACE</h4>
                <h5>Branches : Udaipur, India</h5>
              </div>
              <button to="/hotel2" class="cardbtn">
                View Room
              </button>
            </div>
          </div>
          <div class="hotel__room__card">
            <img src="Images/maldives.jpg" alt="room" />
            <div class="hotel__room__card__detaills">
              <div>
                <h4>TAJ EXOTICA RESORT</h4>
                <h5>Branches : Maldives</h5>
              </div>
              <button class="cardbtn">
                View Room
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="intro">
        <div class="section__container intro__container">
          <div class="intro__cotent">
            <p class="section__subheader"></p>
            <h2 class="section__header">Meet With Our Luxury Place</h2>
            <p class="section__description">
              Whether you're seeking a cozy and exclusive hideaway or an
              immersive journey beneath the surface, Hotel Taj Group promises to
              be an unforgettable stay, where the depths of comfort and
              excitement await your arrival.
            </p>
          </div>
          <div class="intro__video">
            <video src="Images/luxury.mp4" autoplay muted loop></video>
          </div>
        </div>
      </section>

      <section class="section__container feature__container" id="feature">
        <p class="section__subheader">FACILITIES</p>
        <h2 class="section__header">Core Features</h2>
        <div class="feature__grid">
          <div class="feature__card">
            <h4>Have High Rating</h4>
            <p>
              We take pride in curating a selection of hotels that consistently
              receive high ratings and positive reviews.
            </p>
          </div>
          <div class="feature__card">
            <h4>Quite Hours</h4>
            <p>
              We understand that peace and uninterrupted rest are essential for
              a rejuvenating experience.
            </p>
          </div>
          <div class="feature__card">
            <h4>Best Location</h4>
            <p>
              At our hotel booking website, we take pride in offering
              accommodations in the most prime and sought-after locations.
            </p>
          </div>
          <div class="feature__card">
            <br />
            <h4>Free Cancellation</h4>
            <p>
              We understand that travel plans can change unexpectedly, which is
              why we offer the flexibility of free cancellation.
            </p>
          </div>
          <div class="feature__card">
            <br />
            <h4>Payment Options</h4>
            <p>
              Our hotel booking website offers a range of convenient payment
              options to suit your preferences.
            </p>
          </div>
          <div class="feature__card">
            <br />
            <h4>Special Offers</h4>
            <p>
              Whether you're planning a romantic getaway, or a business trip,
              our carefully curated special offers cater to all your needs.
            </p>
          </div>
        </div>
      </section>

      <section class="section__container news__container" id="news">
        <div class="news__header">
          <div>
            <h2 class="section__header">&copy Taj Hotel Group Feeds</h2>
          </div>
        </div>
        <div class="news__grid">
          <div class="news__card">
            <img src="Images/news-1.jpg" alt="news" />
            <div class="news__card__title">
              <p>24th May 2024</p>
              <p>By Rishiraj</p>
            </div>
            <h4>Exploring Local Culinary Gems: A Foodie's Guide.</h4>
            <br />
            <p>
              Join Rishiraj as he takes you on a gastronomic adventure through
              the neighborhood surrounding our hotel.
            </p>
          </div>
          <div class="news__card">
            <img src="Images/news-2.jpg" alt="news" />
            <div class="news__card__title">
              <p>25th May 2024</p>
              <p>By Zeel</p>
            </div>
            <h4>Balancing Mind, Body, and Soul at Our Hotel.</h4>
            <br />
            <p>
              Discover holistic spa treatments, fitness facilities, and
              mindfulness practices that will leave you feeling refreshed.
            </p>
          </div>
          <div class="news__card">
            <img src="Images/news-3.jpg" alt="news" />
            <div class="news__card__title">
              <p>26th May 2024</p>
              <p>By Khushi</p>
            </div>
            <h4>Exploring Outdoor Activities Near Our Hotel.</h4>
            <br />
            <p>
              From hiking and biking trails to water sports and wildlife
              encounters, she highlights ways to experience nature's wonders.
            </p>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="section__container footer__container">
          <div class="footer__col">
            <div class="logo footer__logo">
              <div>TJ</div>
              <span>
                Taj
                <br />
                <span>
                  Hotel
                  <br />
                </span>
                Group
              </span>
            </div>
            <ul class="footer__socials">
              <li>
                <a href="#">
                  <i class="ri-youtube-fill"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ri-instagram-line"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Services</h4>
            <div class="footer__links">
              <li>
                <a href="#">Online Booking</a>
              </li>
              <li>
                <a href="#">Room Customization</a>
              </li>
              <li>
                <a href="#">Video Tour</a>
              </li>
              <li>
                <a href="#">Special Offers</a>
              </li>
              <li>
                <a href="#">Customer Support</a>
              </li>
            </div>
          </div>
          <div class="footer__col">
            <h4>Contact Us</h4>
            <div class="footer__links">
              <li>
                <span>
                  <i class="ri-phone-fill"></i>
                </span>
                <div>
                  <h5>Phone Number</h5>
                  <p>+91 987654321</p>
                </div>
              </li>
              <li>
                <span>
                  <i class="ri-record-mail-line"></i>
                </span>
                <div>
                  <h5>Email</h5>
                  <p>info@hotelTajGroupindia.com</p>
                </div>
              </li>
              <li>
                <span>
                  <i class="ri-map-pin-2-fill"></i>
                </span>
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
    </>
  );
}
