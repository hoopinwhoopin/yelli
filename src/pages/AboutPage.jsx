import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';

import ImageWrapper from '../components/ImageWrapper';
import ScrollToTop from '../components/ScrollToTop';


import mainImg1 from '../assets/img/unsplash/frame-13.jpg';
import mainImg2 from '../assets/img/unsplash/frame-10.jpg';
import mainImg3 from '../assets/img/unsplash/sun-11.jpg';

import mainImgComp1 from '../assets/img/unsplash-compressed/frame-13.jpg';
import mainImgComp2 from '../assets/img/unsplash-compressed/frame-10.jpg';
import mainImgComp3 from '../assets/img/unsplash-compressed/sun-11.jpg';

import eyecareImg from '../assets/img/unsplash/store-7.jpg';
import eyecareImgComp from '../assets/img/unsplash-compressed/store-7.jpg';

function AboutPage() {
  useEffect(() => {
    document.title = 'The Grayscale Experience | Grayscale Clothes Online Store';
  }, []);

  return (
    <main className="story py-0">
      <section className="story-header">
        <h1 className="story-header__title">An Eye for Better Clothes</h1>
        <p className="story-header__text">
          Our designs are carefully crafted to capture the latest fashion trends
          while ensuring maximum comfort and functionality. With a range of
          unique styles and color options, we are confident that our collection
          has something to suit every taste and personality.
        </p>
        <p className="story-header__text">
          Our clothes are crafted with attention to detail, utilizing the latest
          materials and technology to ensure the highest quality products.
          Elevate your Clothes game with Grayscale clothes.
        </p>
      </section>

      <section className="story-main">
        <ImageWrapper className="story-main__panel panel-1">
          <ProgressiveImage src={mainImg1} placeholder={mainImgComp1}>
            {(src, loading) => (
              <img
                src={src}
                alt="Guy in office wearing clothes and a denim jacket"
                className={`story-main__img ${loading && 'img--loading'} grayscale`}
                loading="lazy"
              />
            )}
          </ProgressiveImage>
        </ImageWrapper>
        <div className="story-main__panel panel-2 about-us">
          <h2 className="story-main__title">About us</h2>
          <p className="story-main__text">
            Grayscale was born of a simple mission - to create high-quality,
            stylish clothes that would empower people to express themselves with
            confidence.
          </p>
          <p className="story-main__text">
            Founded by a group of passionate designers and Clothes enthusiasts,
            we started our journey with a commitment to crafting clothes that
            would stand the test of time, both in terms of durability and style.
          </p>
          <p className="story-main__text">
            Today, we continue to build on that legacy by designing unique and
            trendsetting clothes that reflect the spirit and creativity of our
            brand. Join us as we continue to redefine Clothes fashion and bring
            our vision to life.
          </p>
          <Link to="/products/" className="story-main__btn-link">
            Browse Products
          </Link>
        </div>
        <div className="story-main__panel panel-3 black">
          <h2 className="story-main__title">Clothes For Everyone</h2>
          <p className="story-main__text">
            At Grayscale, we believe that everyone should have access to stylish
            and affordable clothes. That&apos;s why we strive to create clothes
            that are not only trendy and fashionable, but also accessible for
            everyone.
          </p>
          <p className="story-main__text">
            From classic to contemporary, our clothes are designed to suit every
            taste and style, making it easy for our customers to find the
            perfect pair of clothes.
          </p>
          <p className="story-main__text">
            Our commitment to accessibility is at the heart of everything we do,
            and we take pride in helping people around the world to see better
            and look their best.
          </p>
          <Link to="/products/black" className="story-main__btn-link">
            Browse clothes
          </Link>
        </div>
        <ImageWrapper className="story-main__panel panel-4">
          <ProgressiveImage src={mainImg2} placeholder={mainImgComp2}>
            {(src, loading) => (
              <img
                src={src}
                alt="Woman wearing round black and a beige cape"
                className={`story-main__img ${loading && 'img--loading'} grayscale`}
                loading="lazy"
              />
            )}
          </ProgressiveImage>
        </ImageWrapper>
        <ImageWrapper className="story-main__panel panel-5">
          <ProgressiveImage src={mainImg3} placeholder={mainImgComp3}>
            {(src, loading) => (
              <img
                src={src}
                alt="Guy wearing vintage round sunclothes and a printed shirt"
                className={`story-main__img ${loading && 'img--loading'} grayscale`}
                loading="lazy"
              />
            )}
          </ProgressiveImage>
        </ImageWrapper>
        <div className="story-main__panel panel-6 sunclothes">
          <h2 className="story-main__title">Responsible Fiber</h2>
          <p className="story-main__text">
            We are committed to making a positive impact on the world around us.
            We believe that as a business, we have a responsibility to give back
            to the communities we serve and to protect the planet we all call
            home.
          </p>
          <p className="story-main__text">
            From using sustainable materials and manufacturing practices to
            supporting local charities and non-profits, we are constantly
            striving to make a difference.
          </p>
          <p className="story-main__text">
            When you choose our brand, you are not just getting a pair of
            stylish and functional clothes - you are also joining us in our
            commitment to making a positive impact on the world.
          </p>
          <Link to="/products/sunclothes" className="story-main__btn-link">
            Browse Sunnies
          </Link>
        </div>
      </section>

      <section className="story-eyecare bg-black grayscale">
        <div className="story-eyecare__info">
          <h3 className="story-eyecare__title">
            Our commitment to proper Clothes
          </h3>
          <p className="story-eyecare__text">
            We believe that everyone deserves access to high-quality eyecare,
            and that is why we have partnered with various organizations to
            promote awareness and support initiatives that make vision care
            accessible to those in need.
          </p>
          <p className="story-eyecare__text">
            With every purchase, we also provide educational resources and
            support to help our customers take care of their eyes and maintain
            good eye health for years to come.
          </p>

          <Link to="/eyecare" className="story-eyecare__link">
            Learn more
          </Link>
        </div>
        <ImageWrapper className="story-eyecare__img-wrapper">
          <ProgressiveImage src={eyecareImg} placeholder={eyecareImgComp}>
            {(src, loading) => (
              <img
                src={src}
                alt="Guy wearing vintage round sunclothes and a printed shirt"
                className={`story-eyecare__img ${loading && 'img--loading'} grayscale`}
                loading="lazy"
              />
            )}
          </ProgressiveImage>
        </ImageWrapper>
      </section>

      <section className="story-visit">Visit us</section>
      <ScrollToTop />
    </main>
  );
}
export default AboutPage;
