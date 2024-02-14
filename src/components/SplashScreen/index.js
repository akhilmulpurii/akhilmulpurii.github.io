import { Component } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import Head from "next/head";

const keywords = [
  {
    direction: "right",
    keywords: [
      "REACT.JS",
      "JAVASCRIPT",
      "NEXT.JS",
      "REDUX.JS",
      "TYPESCRIPT",
      "HTML",
      "CSS",
    ],
  },
  {
    direction: "left",
    keywords: [
      "FLUTTER",
      "REACT NATIVE",
      "NODE.JS",
      "GATSBY",
      "IOS",
      "ANDROID",
    ],
  },
  {
    direction: "right",
    keywords: [
      "SOFTWARE",
      "FRONT-END",
      "MYSQL",
      "GRAPHQL",
      "MONGODB",
      "EXPRESS.JS",
      "HAPI.JS",
    ],
  },
  {
    direction: "left",
    keywords: ["REACT.JS", "JAVA", "SWIFT", "AWS", "AZURE"],
  },
];

const boldWords = [
  "REACT.JS",
  "FRONT-END",
  "AWS",
  "TYPESCRIPT",
  "NODE.JS",
  "NEXT.JS",
  "FLUTTER",
  "GRAPHQL",
];

function SplashMessage() {
  const getColor = (word) => (boldWords.includes(word) ? "#ffc300" : "#231d1f");

  return (
    <Container>
      <Head>
        <title>Akhil Mulpuri | Full Stack Web Developer</title>
      </Head>
      {keywords.map((k, _) => (
        <Line
          animate={{
            opacity: 1,
          }}
          initial={{ opacity: 0 }}
          transition={{ delay: (_ + 1) * 0.1 }}
          key={_}
          direction={k.direction}
          delay={(_ + 1) * 250}
        >
          {k.keywords.map((keyword) => (
            <KeyWord
              key={keyword}
              direction={k.direction}
              color={getColor(keyword)}
              className="keyword"
            >
              {keyword}
            </KeyWord>
          ))}
        </Line>
      ))}
    </Container>
  );
}

export default function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1700);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return SplashMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  white-space: nowrap;
`;

const Line = styled(motion.div)`
  width: 100%;
  display: inline-block;
  ${({ direction, delay }) =>
    direction &&
    css`
      animation: ${direction}Marquee ${Math.random() < 0.5 ? 15 : 18}s linear
        infinite;
      animation-: ${-delay}ms;
    `}

  @keyframes rightMarquee {
    100% {
      transform: translate(-100%, 0);
    }
  }

  @keyframes leftMarquee {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

const KeyWord = styled.span`
  font-size: 10vw;
  font-weight: bold;
  ${({ direction }) => direction && css`margin-${direction}: 5rem;`}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;
