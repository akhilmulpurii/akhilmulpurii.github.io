import Link from "next/link";
import styled from "styled-components";

export default function MaintenanceCard() {
  return (
    <Container>
      <Inner>
        <Top>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 0v10h12V5H4zm2 2h8a1 1 0 110 2H6a1 1 0 110-2zm0 4h8a1 1 0 110 2H6a1 1 0 110-2z"
              clipRule="evenodd"
            />
          </svg>
        </Top>
        <Bottom>
          <p>Something new is getting cooked up here!</p>
        </Bottom>
        <HomeButton href="/">Go Home</HomeButton>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100vh;
  border-radius: 0.5rem;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Top = styled.div`
  flex-shrink: 0;
  margin-bottom: 2rem;
  & svg {
    height: 5rem;
    width: 5rem;
    color: #fff;
  }
`;

const Bottom = styled.div`
  margin-left: 0.75rem;

  & p {
    font-size: 2rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: #fff;
  }
`;

const HomeButton = styled(Link)`
  /* styled button to go back to home */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none !important;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #20e3b2;
  }
`;
