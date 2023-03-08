import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import BlogItem from "@/components/BlogItem";
import Footer from "@/components/Footer";

const topics = ["Frontend", "Backend", "Design UI/UX", "DevOps", "Gaming"];

export default function Home({ blogs }) {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleSelectTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  return (
    <Page>
      <Head>
        <title>My Blogs</title>
      </Head>
      <Header />
      <BlogContainer>
        <UpperNavigation>
          <Searchbar placeholder="Search..." />
          <TopicsContainer>
            <span>My topics :</span>
            {topics.map((topic) => (
              <TopicChip
                key={topic}
                isSelected={selectedTopics.includes(topic)}
                onClick={() => handleSelectTopic(topic)}
              >
                {topic}
              </TopicChip>
            ))}
          </TopicsContainer>
        </UpperNavigation>
        <ArticleText>Articles</ArticleText>
        <hr />

        {blogs.map((blog, index) => (
          <BlogItem
            blog={blog}
            key={blog.slug}
            isLast={index === blogs.length - 1}
          />
        ))}
      </BlogContainer>
      <Footer />
    </Page>
  );
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync("./content/blogs");

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      blogs,
    },
  };
}

const UpperNavigation = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;

// Rounded search bar with a magnifying glass icon and smooth animation
const Searchbar = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #2f3135;
  padding: 0 20px;
  box-sizing: border-box;
  /* transition: 0.5s; */
  background: #1f2125 url("/search.png") no-repeat 10px center;
  padding-left: 40px;
  background-size: 20px;
  font-weight: 500;
  color: #fff;
  &:focus {
    border-color: #3f4155;
    background-color: #2f3135;
    background-position: 10px center;
    outline: none;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & span {
    color: #a3b2c1;
    font-size: 1rem;
    margin-right: 10px;
  }
`;

const TopicChip = styled.div`
  background-color: #2f3135;
  color: #fff;
  padding: 12px 24px;
  border-radius: 20px;
  margin: 0 5px;
  cursor: pointer;
  transition: 0.5s;
  user-select: none;
  font-size: 0.8rem;

  &:hover {
    background-color: #75004d;
  }
  &:active {
    scale: 0.8;
  }
  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: #e5008d;
  `}
`;

const ArticleText = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 24px;
`;

const BlogContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 32px;
  & hr {
    margin: 20px 0;
    border: 1px solid #1f2125;
  }
`;

const Page = styled.div`
  min-height: 100vh;
`;
