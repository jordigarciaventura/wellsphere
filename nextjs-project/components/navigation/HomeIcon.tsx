export interface IconProps {
  solidColor?: string;
  gradientColors?: string[];
  useSolidColor?: boolean;
}

const HomeIcon = ({
  solidColor = "#000",
  gradientColors = ["#9C2CF3", "#3A49F9"],
  useSolidColor = false,
}: IconProps) => {
  return (
    <svg
      width="34"
      height="35"
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.21283 17.6598C0.262995 17.6598 -0.212688 16.5115 0.45895 15.8398L15.5525 0.746261C16.2632 0.0357517 17.4153 0.0357517 18.126 0.746261L33.2196 15.8398C33.8912 16.5115 33.4155 17.6598 32.4657 17.6598C31.8769 17.6598 31.3995 18.1372 31.3995 18.726V32.2201C31.3995 33.2253 30.5847 34.0402 29.5795 34.0402H26.8495C23.3313 34.0402 20.4793 31.1882 20.4793 27.67V24.94C20.4793 22.9296 18.8496 21.2999 16.8393 21.2999C14.8289 21.2999 13.1992 22.9296 13.1992 24.94V27.67C13.1992 31.1882 10.3472 34.0402 6.82907 34.0402H4.09902C3.09384 34.0402 2.27899 33.2253 2.27899 32.2201V18.726C2.27899 18.1372 1.80165 17.6598 1.21283 17.6598Z"
        fill={useSolidColor ? solidColor : "url(#paint0_linear_159_1081)"}
      />
      {!useSolidColor && (
        <defs>
          <linearGradient
            id="paint0_linear_159_1081"
            x1="16.9648"
            y1="-5.39475"
            x2="18.9257"
            y2="38.2218"
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

export default HomeIcon;
