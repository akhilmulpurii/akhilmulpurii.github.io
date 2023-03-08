import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";
import Header from "@/components/Header";
import BlogItem from "@/components/BlogItem";
import Footer from "@/components/Footer";

const topics = ["Frontend", "Backend", "Design UI/UX", "DevOps", "Gaming"];

export default function Home({ blogs }) {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSelectTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  // Function for filter - filter based on searchText
  // and also based on selected topics
  const filterBlogs = (blog) => {
    if (
      searchText &&
      !blog.title.includes(searchText) &&
      !blog.description.includes(searchText)
    ) {
      return false;
    }

    if (selectedTopics.length > 0) {
      // If selectedTopics is not empty
      // then filter based on selected topics
      return selectedTopics.some((topic) => blog.tags.includes(topic));
    }

    return true;
  };

  const filteredBlogs = blogs.filter(filterBlogs);

  return (
    <Page>
      <Head>
        <title>My Blogs</title>
      </Head>
      <Header />
      <BlogContainer>
        <UpperNavigation>
          <Searchbar
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
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

        {filteredBlogs.length ? (
          filteredBlogs.map((blog, index) => (
            <BlogItem
              blog={blog}
              key={blog.slug}
              isLast={index === blogs.length - 1}
            />
          ))
        ) : (
          <EmptyBlogSection>
            <h1>No blogs found</h1>
          </EmptyBlogSection>
        )}
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

  @media (max-width: 768px) {
    width: 100%;
    margin: 5px;
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

  @media (max-width: 1024px) {
    display: none;
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

  @media (max-width: 768px) {
    margin: 5px;
  }
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

const EmptyBlogSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  color: #a3b2c1;
  min-height: 50vh;
  & h1 {
    margin: 0;
    font-weight: 400;
  }
`;
