interface Props {
  solidColor?: string;
  gradientColors?: string[];
  useSolidColor?: boolean;
}

const ChatIcon = ({
  solidColor = "#000",
  gradientColors = ["#9C2CF3", "#3A49F9"],
  useSolidColor = false,
}: Props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 33V3.3C0 2.3925 0.323125 1.61563 0.969375 0.969375C1.61563 0.323125 2.3925 0 3.3 0H29.7C30.6075 0 31.3844 0.323125 32.0306 0.969375C32.6769 1.61563 33 2.3925 33 3.3V23.1C33 24.0075 32.6769 24.7844 32.0306 25.4306C31.3844 26.0769 30.6075 26.4 29.7 26.4H6.6L0 33ZM5.1975 23.1H29.7V3.3H3.3V24.9562L5.1975 23.1Z"
        fill={useSolidColor ? solidColor : "url(#paint0_linear_217_1153)"}
      />
      {!useSolidColor && (
        <defs>
          <linearGradient
            id="paint0_linear_217_1153"
            x1="16.5"
            y1="0"
            x2="16.5"
            y2="33"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={gradientColors[0]} />
            <stop offset="1" stopColor={gradientColors[1]} />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
};

export default ChatIcon;
