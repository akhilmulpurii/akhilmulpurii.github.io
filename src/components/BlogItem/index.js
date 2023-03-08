import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import styled from "styled-components";
import Author from "../Author";

export default function Blog({ blog, isLast }) {
  return (
    <Fragment>
      <BlogItem href={`/blogs/${blog.slug}`}>
        <Column>
          <Author blog={blog} />
          <BlogContent>
            <BlogTextSection>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogDescription>{blog.description}</BlogDescription>
            </BlogTextSection>
          </BlogContent>
        </Column>
        <BlogImage
          src={blog.mainImage}
          width={300}
          height={225}
          alt={`${blog.title} Main Image`}
        />
      </BlogItem>
      {!isLast ? <hr /> : <EmptyArea />}
    </Fragment>
  );
}

const BlogItem = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #fff !important;
  text-decoration: none;
  justify-content: space-between;
  margin: 14px 0;
`;

const BlogContent = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const BlogTextSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 70vw;
`;

const BlogTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 14px;
  letter-spacing: 0.5px;
`;

const BlogDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #a3b2c1;
  letter-spacing: 0.5px;
  text-align: justify;
  text-overflow: ellipsis;
  max-height: 400px;
  overflow: hidden;
`;

const BlogImage = styled(Image)`
  border-radius: 10px;
  object-fit: cover;
  margin-left: 32px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmptyArea = styled.div`
  height: 100px;
`;
