import fs from "fs";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Head from "next/head";
import BlogHero from "@/components/BlogHero";
import Header from "@/components/Header";
import styled from "styled-components";

export default function Blog({ frontmatter, markdown }) {
  return (
    <div>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Header />
      <BlogHero blog={frontmatter} />
      <BlogSection>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </BlogSection>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(
    fs.readFileSync(`./content/blogs/${slug}.md`, "utf8")
  );
  let frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown },
  };
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync("./content/blogs");

  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf("."));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
}

const BlogSection = styled.div`
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
