interface Props {
  solidColor?: string;
  gradientColors?: string[];
  useSolidColor?: boolean;
}

const InsightsIcon = ({
  solidColor = "#000",
  gradientColors = ["#9C2CF3", "#3A49F9"],
  useSolidColor = false,
}: Props) => {
  return (
    <svg
      width="30"
      height="28"
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0001 22.4143L24.0126 27.8538L21.6209 17.6018L29.5834 10.7038L19.098 9.81426L15.0001 0.145508L10.9022 9.81426L0.416748 10.7038L8.37925 17.6018L5.98758 27.8538L15.0001 22.4143Z"
        fill={useSolidColor ? solidColor : "url(#paint0_linear_449_312)"}
      />
      {!useSolidColor && (
        <defs>
          <linearGradient
            id="paint0_linear_449_312"
            x1="15.0001"
            y1="0.145508"
            x2="15.0001"
            y2="27.8538"
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

export default InsightsIcon;
