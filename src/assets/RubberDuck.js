// Ultimate Honking technology
let honk1 = new Audio("https://files.catbox.moe/fl7wzu.ogg");
let honk2 = new Audio("https://files.catbox.moe/mejpp4.ogg");
let honk3 = new Audio("https://files.catbox.moe/s2pvvx.ogg");
// let honk4 = new Audio("https://files.catbox.moe/by7mer.ogg");

const dice = () => Math.floor(Math.random() * 4);

const honkHandler = () => {
  let randomAudio = [honk1, honk2, honk3]; // , honk4
  let audio = randomAudio[dice()];
  audio.play();
};

const RubberDuck = props => {
  return (
    <svg onClick={honkHandler} alt="duck" width={64} height={64.001} {...props}>
      <path
        shapeRendering="geometricPrecision"
        d="M50 26.001s-4-2-4-4c0-4 4-2 8-8C54 14.001 52 0 38 0 26 0 22 10.001 22 16.001c0 10 6 10 6 16 0 2-2 4-8 4-10 0-14-10-14-10s-6 4-6 14c0 12 8 24 26 24h10c6 0 18-8 18-18s-6-10-6-14 2-6 2-6z"
        fill={props.colour}
      />
      <path
        d="M60 16.001c-4 0-6-2-6-2-4 6-8 4-8 8 0 2 4 4 4 4 4 0 14-6 14-8s-2-2-4-2z"
        fill="#f83"
      />
      <circle cx={48} cy={12.001} r={2} fill="#333" />
    </svg>
  );
};

export default RubberDuck;
