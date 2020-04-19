import React, {useState} from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
// import Image from "../elements/Image";
// import Modal from "../elements/Modal";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // };

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // };

const startVideo = ( ) => {
  setVideomodalactive(true);
}

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              On Demand{" "}
              <span className="text-color-primary">Child Care</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
              With the push of a button, find a babysitter your kids love. 
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
               
              {!videoModalActive && 
               <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    onClick={startVideo}
                  >
                    I need a nanny!
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    onClick={startVideo}
                  >
                    I'm a nanny and I'm available!
                  </Button>
                </ButtonGroup>
                }
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >

          { videoModalActive && 
            <iframe
              style={{ border: "none", height: "600px", width: "100%" }}
              src="https://us04web.zoom.us/wc/join/6703013138"
              sandbox="allow-forms allow-scripts allow-same-origin"
              allow="microphone; camera"
              title="virtual-nanny"
            ></iframe>}
            {/* <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} /> 
            </a>*/}
          </div>
          {/* <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
