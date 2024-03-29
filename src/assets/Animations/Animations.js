import { useState, useEffect } from "react";
import Lottie from "react-lottie-player";

import NessieData from "./Lochness Monster.json";
import astronautData from "./Astronaut.json";
import arrowData from "./Animated Arrow.json";
import robotData from "./Robot 404.json";
import carData from "./Car 404.json";
import noDataData from "./No Data 404.json";
import loadingData from "./Loading.json";
import mailData from "./Mail.json";
import successCheck from "./Success.json";
import FoliageRight from "./FoliageRight.json";
import RightFoliageOcean from "./Right Foliage Ocean.json";
import RightFoliageMagenta from "./Right Foliage Magenta.json";
import RightFoliageLeaf from "./Right Foliage Leaf.json";
import RightFoliageCanary from "./Right Foliage Canary.json";

import { useSelector } from "react-redux";

const AstronautLottie = (props) => {
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDelayed(true);
    }, props.delay);

    // Clear the delay when the component unmounts
    return () => {
      setIsDelayed(false);
    };
  }, [props.delay]);

  return (
    <Lottie
      loop={+props.loop || 2}
      play={isDelayed}
      animationData={astronautData}
      style={{ width: +props.width || 550, height: +props.height || 550 }}
    />
  );
};

export const Astronaut = AstronautLottie;

const ArrowLottie = (props) => {
  return (
    <Lottie
      loop={true}
      animationData={arrowData}
      play
      style={{
        width: +props.width || 80,
        height: +props.height || 80,
      }}
    />
  );
};

export const AnimatedArrow = ArrowLottie;

const NessieMonsterLottie = (props) => {
  return (
    <Lottie
      loop={+props.loop || true}
      animationData={NessieData}
      play
      style={{
        marginTop: +props.marginTop || -10,
        height: +props.height || 700,
      }}
    />
  );
};

export const Nessie = NessieMonsterLottie;

const RobotLottie = (props) => {
  return (
    <Lottie
      loop={true}
      animationData={robotData}
      play
      style={{
        marginTop: +props.marginTop || -50,
        height: +props.height || 550,
      }}
    />
  );
};

export const Robot = RobotLottie;

const CarLottie = (props) => {
  return (
    <Lottie
      loop={true}
      animationData={carData}
      play
      style={{
        height: +props.height || 400,
        marginTop: +props.marginTop || -100,
      }}
    />
  );
};

export const Car = CarLottie;

const NoDataLottie = (props) => {
  return (
    <Lottie
      loop={true}
      animationData={noDataData}
      play
      style={{
        marginTop: +props.marginTop || 0,
        width: "70%",
        height: +props.height || 600,
      }}
    />
  );
};

export const NoData = NoDataLottie;

const LoadingLottie = (props) => {
  return (
    <Lottie
      loop={true}
      animationData={loadingData}
      play
      style={{
        width: "70%",
        height: "50%",
      }}
    />
  );
};

export const Loading = LoadingLottie;

const MailLottie = (props) => {
  return (
    <Lottie
      loop={true}
      animationData={mailData}
      play
      style={{
        width: +props.width || 215,
        height: +props.height || 215,
      }}
    />
  );
};

export const Mail = MailLottie;

const SuccessLottie = (props) => {
  return (
    <Lottie
      loop={true}
      animationData={successCheck}
      play
      style={{
        width: +props.width || 300,
        transform: "translateY(1.3rem)",
      }}
    />
  );
};

export const Success = SuccessLottie;

const FoliageRightLottie = (props) => {
  const storeColour = useSelector((state) => state.colours.colour);

  const foliageAnimations = {
    default: FoliageRight,
    canary: RightFoliageCanary,
    ocean: RightFoliageOcean,
    magenta: RightFoliageMagenta,
    leaf: RightFoliageLeaf,
  };

  const animationData =
    foliageAnimations[storeColour] || foliageAnimations["default"];

  return (
    <Lottie
      loop={true}
      animationData={animationData}
      play
      style={{
        width: props.width, // "43vw"
        position: "fixed",
        bottom: -5,
        right: 0,
      }}
    />
  );
};

export const FoliageRightSide = FoliageRightLottie;
