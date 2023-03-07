import styled from "styled-components";

export default function BadgePin() {
  return (
    <Badge>
      <svg viewBox="0 0 320 320" width="200" height="200">
        <defs>
          <path
            id="circlePath"
            d=" M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 "
          />
        </defs>

        <circle cx="150" cy="150" r="150" className="circleBg" fill="#000" />
        <g className="circleText ">
          <use xlinkHref="#circlePath" fill="none" />
          <text
            fontFamily="Roboto Serif"
            fontSize="25"
            fontWeight="400"
            letterSpacing={"0.5em"}
            fill="#fff"
          >
            <textPath xlinkHref="#circlePath">
              GET IN TOUCH · GET IN TOUCH ·
            </textPath>
          </text>
        </g>
      </svg>
      <svg
        viewBox="0 0 24 24"
        height={"100px"}
        width={"100px"}
        className="circleIcon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M6.48804 17.488L17.988 5.98804"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M5.98804 8.98789L5.9881 17.6449C5.9881 17.8476 6.15245 18.012 6.3552 18.012L14.988 18.012"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    </Badge>
  );
}

const Badge = styled.div`
  display: inline-block;
  background: transparent;
  border-radius: 50%;
  position: relative;
  margin: 0 !important;
  padding: 0 !important;
  & svg {
    overflow: visible;
  }

  & .circleBg {
    fill: #e5008d;
  }

  & .circleText {
    position: relative;
    transform-origin: 150px 150px;
    animation: spin-badge 60s linear infinite;
  }

  & .circleIcon {
    position: absolute;
    top: 47%;
    left: 47%;
    transform: translate(-50%, -50%);
  }

  @keyframes spin-badge {
    100% {
      transform: rotate(360deg);
    }
  }
`;
