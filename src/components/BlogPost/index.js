import { Fragment } from "react";
import BlogHero from "../BlogHero";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function BlogPost({ frontmatter, markdown }) {
  return (
    <Fragment>
      <BlogHero blog={frontmatter} />
      <BlogSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15, delay: 0.3 }}
      >
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </BlogSection>
    </Fragment>
  );
}

const BlogSection = styled(motion.div)`
  padding: 32px;
  margin-top: 32px;
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #fff;
  font-weight: 400;
  letter-spacing: 0.08rem;
  a {
    color: #fff;
    text-decoration: underline;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 32px;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 32px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 32px;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 32px;
  }

  p {
    margin: 0;
    margin-bottom: 32px;
  }

  ul {
    margin: 0;
    margin-bottom: 32px;
    padding-left: 32px;
  }

  li {
    margin: 0;
    margin-bottom: 16px;
  }

  img {
    width: 100%;
    height: auto;
    margin: 0;
    margin-bottom: 32px;
  }

  blockquote {
    margin: 0;
    margin-bottom: 32px;
    padding-left: 32px;
    border-left: 4px solid #fff;
  }

  code {
    background-color: #fff;
    color: #000;
    padding: 4px;
    border-radius: 4px;
  }
`;
