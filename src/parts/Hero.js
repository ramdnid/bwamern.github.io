import React from 'react';

import ImageHero from 'assets/images/hero-image.png';
import FrameHero from 'assets/images/hero-frame.png';
import IconCities from 'assets/icons/cities.svg';
import IconTreasure from 'assets/icons/treasure.svg';
import IconTravelers from 'assets/icons/travelers.svg';

import Button from 'elements/Button';

import formatNumber from 'utils/formatNumber';

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }

  return (
    //   Section Hero, under the navbar
    <section className='container pt-4'>
      <div className='row align-items-center'>
        {/* Hero Left */}
        <div className='col-auto pr-5' style={{ width: 530 }}>
          {/* Title */}
          <h1 className='font-weight-bold line-height-1 mb-3'>
            Forget Busy Work,
            <br />
            Start Next Vacation
          </h1>
          {/* End of Title */}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          {/* Description */}
          <p
            className='mb-4 font-weight-light text-gray-500 w-75'
            style={{ lineHight: '170%' }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          {/* End of Description */}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          {/* Button */}
          <Button
            className='btn px-5'
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          {/* End of Button */}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          {/* Icon Information */}
          <div className='row' style={{ marginTop: 80 }}>
            {/* Item hero */}
            <div className='col-auto' style={{ marginRight: 35 }}>
              <img
                width='36'
                height='36'
                src={IconTravelers}
                alt={`${props.data.travelers} travelers`}
              />
              <h6 className='mt-3'>
                {formatNumber(props.data.travelers)}{' '}
                <span className='text-gray-500 font-weight-light'>
                  Travelers
                </span>
              </h6>
            </div>
            {/* End of item hero */}

            {/* Item hero */}
            <div className='col-auto' style={{ marginRight: 35 }}>
              <img
                width='36'
                height='36'
                src={IconTreasure}
                alt={`${props.data.treasures} treasure`}
              />
              <h6 className='mt-3'>
                {formatNumber(props.data.treasures)}{' '}
                <span className='text-gray-500 font-weight-light'>
                  Treasure
                </span>
              </h6>
            </div>
            {/* End of item hero */}

            {/* Item hero */}
            <div className='col-auto' style={{ marginRight: 35 }}>
              <img
                width='36'
                height='36'
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className='mt-3'>
                {formatNumber(props.data.cities)}{' '}
                <span className='text-gray-500 font-weight-light'>cities</span>
              </h6>
            </div>
            {/* End of item hero */}
          </div>
          {/* End of Icon Information */}
        </div>
        {/* End of Hero Left */}
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        {/* Hero Right / Hero image */}
        <div className='col-6 pl-5'>
          <div style={{ width: 520, height: 410 }}>
            <img
              src={ImageHero}
              alt='Staycation'
              className='img-fluid position-absolute'
              style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
            />
            <img
              src={FrameHero}
              alt='Staycation'
              className='img-fluid position-absolute'
              style={{ margin: '0 -15px -15px 0' }}
            />
          </div>
        </div>
        {/* End of Hero Right */}
      </div>
    </section>
  );
}
