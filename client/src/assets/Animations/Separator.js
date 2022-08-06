const Separator = props => {
  return (
    <svg
      className={props.styles}
      alt="separator"
      width={38}
      height={125}
      fill="none"
      {...props}
    >
      <path fill="#4239A7" d="M30.571 0h6.793v125h-6.793z" />
      <path fill="#A73939" d="M0 23.777h6.793v77.446H0z" />
    </svg>
  );
};

export default Separator;
