import type { IGlobalSvgProps } from "@components/ui/icons/svgTypes";

const CheckSign = ({ width, height, className }: IGlobalSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 24}
      height={height ? height : 25}
      viewBox="0 0 24 25"
      fill="none"
      className={className}
    >
      <path
        d="M20.1306 4.63996C19.8118 4.65121 19.5193 4.81996 19.3506 5.08996L10.3206 18.905L4.47058 13.85C4.21933 13.5893 3.84246 13.4918 3.49558 13.6006C3.15058 13.7075 2.89371 14 2.83371 14.3562C2.77371 14.7143 2.91808 15.0743 3.21058 15.29L9.90058 21.08C10.1106 21.2581 10.3881 21.3368 10.66 21.2975C10.9337 21.2562 11.1756 21.1006 11.3256 20.87L20.9706 6.13996C21.1768 5.83808 21.1937 5.44808 21.0156 5.12933C20.8375 4.81246 20.4943 4.62308 20.1306 4.63996Z"
        fill="url(#paint0_linear_259_849)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_259_849"
          x1="2.82031"
          y1="5.6807"
          x2="23.4095"
          y2="8.56044"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#61CFDD" />
          <stop offset={1} stopColor="#52CC92" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CheckSign;
