import { useState } from "react";
import Lottie from "react-lottie-player";

import NessieData from "../assets/Lochness Monster.json";
import astronautData from "../assets/Astronaut.json";
import arrowData from "../assets/Animated Arrow.json";
import robotData from "../assets/Robot 404.json";
import carData from "../assets/Car 404.json";
import noDataData from "../assets/No Data 404.json";
import loadingData from "../assets/Loading.json";
import mailData from "../assets/Mail.json";

const NessieMonsterLottie = props => {
  return (
    <Lottie
      loop={+props.loop || true}
      animationData={NessieData}
      play
      style={{ marginTop: 20, width: "70%", height: +props.height || 600 }}
    />
  );
};

export const Nessie = NessieMonsterLottie;

const AstronautLottie = props => {
  const [isDelayed, setIsDelayed] = useState(false);

  setTimeout(() => {
    setIsDelayed(true);
  }, props.delay);

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

const RobotLottie = props => {
  return (
    <Lottie
      loop={true}
      animationData={robotData}
      play
      style={{ marginTop: 30, width: "70%", height: +props.height || 600 }}
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
        marginTop: 100,
        width: "70%",
        height: +props.height || 600,
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
      style={{ width: "70%", height: +props.height || 600 }}
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
