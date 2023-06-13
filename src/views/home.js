import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import GalleryCard13 from '../components/gallery-card13'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <section className="home-hero">
        <video
          src="https://richieworrells3.s3.amazonaws.com/Media/demo+reel.mp4"
          loop
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <header data-thq="thq-navbar" className="home-navbar">
          <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
          <div className="home-container01">
            <h1 className="home-text">Richie Worrell</h1>
          </div>
          <span className="home-text01">Guitarist • Vocalist • Producer</span>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container02">
                <img alt="image" src="/logo.svg" className="home-image" />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text02">About</span>
                <span className="home-text03">Features</span>
                <span className="home-text04">Pricing</span>
                <span className="home-text05">Team</span>
                <span className="home-text06">Blog</span>
              </nav>
              <div className="home-container03">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon02">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon04">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon06">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="home-text07">Session Work</span>
                <span className="home-text08">Lessons</span>
                <span className="home-text09">Discography</span>
                <span className="home-text10">About</span>
                <span className="home-text11">Contact</span>
              </nav>
            </div>
            <div
              data-thq="thq-navbar-btn-group"
              className="home-btn-group"
            ></div>
            <div data-thq="thq-burger-menu" className="home-burger-menu1">
              <svg viewBox="0 0 1024 1024" className="home-icon08">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu1">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav3"
              >
                <div className="home-container04">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="home-image1"
                  />
                  <div data-thq="thq-close-menu" className="home-menu-close1">
                    <svg viewBox="0 0 1024 1024" className="home-icon10">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav4"
                >
                  <span className="home-text12">About</span>
                  <span className="home-text13">Features</span>
                  <span className="home-text14">Pricing</span>
                  <span className="home-text15">Team</span>
                  <span className="home-text16">Blog</span>
                </nav>
                <div className="home-container05">
                  <button className="home-login1 button">Login</button>
                  <button className="button">Register</button>
                </div>
              </div>
              <div className="home-icon-group1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon12"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon14"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon16"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </header>
        <div className="home-hero-content">
          <a
            href="https://www.airgigs.com/session-guitarists/3055/Professional-Electric-Guitar-Tracks-and-Solos"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link button"
          >
            <span className="home-text17">
              <span>Book a Session</span>
              <br></br>
            </span>
          </a>
        </div>
      </section>
      <div className="home-about-me">
        <div className="home-container06">
          <img alt="image" src="/img_8308-700h.jpeg" className="home-image2" />
          <div className="home-container07">
            <div className="home-testimonial">
              <div className="home-container08">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon18"
                >
                  <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
                </svg>
              </div>
              <h1 className="home-text20">
                <span>About Me:</span>
                <br></br>
              </h1>
              <span className="home-text23">
                <span>
                  I am a guitarist, vocalist, drummer, producer, and engineer
                  from the Applachian Mountains of Southwest Virginia. I have 15
                  years of experience playing and recording music.
                </span>
                <br></br>
                <br></br>
                <span>
                  {' '}
                  I&apos;ve worked on a number of studio albums spanning a wide
                  range of genres, playing electric guitar, acoustic guitar,
                  singing, engineering, and mixing. Music is my passion, and
                  I&apos;d love to pour that passion into your project
                </span>
                <br></br>
              </span>
              <div className="home-container09">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon20"
                >
                  <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-social-bar">
        <a
          href="https://www.tiktok.com/@richieworrell"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link01"
        >
          <img
            alt="image"
            src="/tiktok-svgrepo-com1.svg"
            className="home-image3"
          />
        </a>
        <a
          href="https://www.instagram.com/richieworrell/"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link02"
        >
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon22">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
        </a>
        <a
          href="https://www.youtube.com/channel/UCu21VcWN0iX4Pb555neRnqw"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link03"
        >
          <svg viewBox="0 0 1024 1024" className="home-icon24">
            <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100087567780783"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link04"
        >
          <svg viewBox="0 0 602.2582857142856 1024" className="home-icon26">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </a>
      </div>
      <div className="home-testimonials">
        <div className="home-container10">
          <h1 className="home-text29">
            <span className="home-text30">Session Work Testimonials:</span>
            <br></br>
          </h1>
          <div className="home-testimonial1">
            <img
              alt="image"
              src="/airgigs%20(3)-400h.png"
              className="home-image4"
            />
          </div>
        </div>
        <div className="home-testimonial2">
          <img
            alt="image"
            src="/airgigs%20(2)-800w.png"
            className="home-image5"
          />
        </div>
      </div>
      <h1 className="home-text32">Discography:</h1>
      <div className="home-discography">
        <a
          href="https://open.spotify.com/album/25nYUhmcj4Sto4f5uQRAGj?si=oQP4lYIdSyqgK_Wiexn5Jg"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard13
            title="Indian Summer"
            subtitle="2022"
            image_src="https://richieworrells3.s3.amazonaws.com/Media/Indian+Summer+cover+P.jpg"
            rootClassName="rootClassName"
            className="home-component"
          ></GalleryCard13>
        </a>
        <a
          href="https://open.spotify.com/album/0NnfdtczMZVBbFWBnazwxB?si=ACOsImyESkew4ZS9wIJknQ"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard13
            title="Bloom - Long Live the Pilot"
            subtitle="2021"
            image_src="https://richieworrells3.s3.amazonaws.com/Media/IMG_8232.jpg"
            rootClassName="rootClassName5"
            className="home-component1"
          ></GalleryCard13>
        </a>
        <a
          href="https://open.spotify.com/album/1SSpfmnJFrEJYUkNKQHJOd?si=Cf75_DLXRJ6aa428Cm1uEQ"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard13
            title="The Spirit &amp; The Bride - Grace Church"
            subtitle="2018"
            image_src="https://richieworrells3.s3.amazonaws.com/Media/IMG_8231.jpg"
            rootClassName="rootClassName4"
            className="home-component2"
          ></GalleryCard13>
        </a>
        <a
          href="https://open.spotify.com/album/6Op90iXzvFFnS3qkoHxdVG?si=-BQ-AyncTVWsu88A7ufoTA"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard13
            title="Alt-Rock, But It's Banjo Music"
            subtitle="2019"
            image_src="https://richieworrells3.s3.amazonaws.com/Media/IMG_8228.jpg"
            rootClassName="rootClassName1"
            className="home-component3"
          ></GalleryCard13>
        </a>
        <a
          href="https://richieworrell.bandcamp.com/album/land-of-sleep"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard13
            title="Land of Sleep"
            subtitle="2017"
            image_src="https://richieworrells3.s3.amazonaws.com/Media/IMG_8227.jpg"
            rootClassName="rootClassName3"
            className="home-component4"
          ></GalleryCard13>
        </a>
        <a
          href="https://open.spotify.com/album/35BsEwkVXdgkYM1BaA2BxG?si=ETjozUYeRIikafrX086nbg"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard13
            title="Moth and Rust - Dogwood &amp; Holly"
            subtitle="2014"
            image_src="https://richieworrells3.s3.amazonaws.com/Media/IMG_8229.jpg"
            rootClassName="rootClassName2"
            className="home-component5"
          ></GalleryCard13>
        </a>
      </div>
      <div className="home-footer">
        <div className="home-content">
          <div className="home-bottom">
            <span className="home-text33">
              © 2023 Richie Worrell- All rights reserved
            </span>
            <button data-role="scroll-top" className="home-button button">
              <img alt="image" src="/arrow.svg" className="home-image6" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Script
          html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
        ></Script>
      </div>
    </div>
  )
}

export default Home
