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

const AstronautLottie = props => {
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDelayed(true);
    }, props.delay);

    // Clear the delay when the component unmounts
    return () => {
      setIsDelayed(false);
    };
  }, []);

  return (
    <Lottie
      loop={+props.loop || 2}
      play={isDelayed}
      animationData={astronautData}
      style={{ width: +props.width || 620, height: +props.height || 620 }}
    />
  );
};

export const Astronaut = AstronautLottie;

const ArrowLottie = props => {
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

const NessieMonsterLottie = props => {
  return (
    <Lottie
      loop={+props.loop || true}
      animationData={NessieData}
      play
      style={{
        marginTop: +props.marginTop || -150,
        height: +props.height || 600,
      }}
    />
  );
};

export const Nessie = NessieMonsterLottie;

const RobotLottie = props => {
  return (
    <Lottie
      loop={true}
      animationData={robotData}
      play
      style={{
        marginTop: +props.marginTop || -50,
        height: +props.height || 600,
      }}
    />
  );
};

export const Robot = RobotLottie;

const CarLottie = props => {
  return (
    <Lottie
      loop={true}
      animationData={carData}
      play
      style={{
        height: +props.height || 600,
        marginTop: +props.marginTop || -100,
      }}
    />
  );
};

export const Car = CarLottie;

const NoDataLottie = props => {
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

const LoadingLottie = props => {
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

const MailLottie = props => {
  return (
    <Lottie
      loop={true}
      animationData={mailData}
      play
      style={{
        width: +props.width || 200,
        height: +props.height || 200,
      }}
    />
  );
};

export const Mail = MailLottie;

const SuccessLottie = props => {
  return (
    <Lottie
      loop={true}
      animationData={successCheck}
      play
      style={{
        width: +props.width || 130,
        height: +props.height || 150,
        transform: "translateY(1.4rem)",
      }}
    />
  );
};

export const Success = SuccessLottie;
