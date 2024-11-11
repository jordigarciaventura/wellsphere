interface Props {
  solidColor?: string;
  gradientColors?: string[];
  useSolidColor?: boolean;
}

const JournalIcon = ({
  solidColor = "#000",
  gradientColors = ["#9C2CF3", "#3A49F9"],
  useSolidColor = false,
}: Props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.79167 24.2083H5.86979L20.125 9.95313L18.0469 7.875L3.79167 22.1302V24.2083ZM0.875 27.125V20.9271L20.125 1.71354C20.4167 1.44618 20.7387 1.23958 21.0911 1.09375C21.4436 0.947917 21.8142 0.875 22.2031 0.875C22.592 0.875 22.9688 0.947917 23.3333 1.09375C23.6979 1.23958 24.0139 1.45833 24.2813 1.75L26.2865 3.79167C26.5781 4.05903 26.7908 4.375 26.9245 4.73958C27.0582 5.10417 27.125 5.46875 27.125 5.83333C27.125 6.22222 27.0582 6.59288 26.9245 6.94531C26.7908 7.29774 26.5781 7.61979 26.2865 7.91146L7.07292 27.125H0.875ZM19.0677 8.93229L18.0469 7.875L20.125 9.95313L19.0677 8.93229Z"
        fill={useSolidColor ? solidColor : "url(#paint0_linear_449_309)"}
      />
      <defs>
        <linearGradient
          id="paint0_linear_449_309"
          x1="14"
          y1="0.875"
          x2="14"
          y2="27.125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={gradientColors[0]} />
          <stop offset="1" stopColor={gradientColors[1]} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default JournalIcon;
