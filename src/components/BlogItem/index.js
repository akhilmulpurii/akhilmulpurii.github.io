import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import styled from "styled-components";

export default function Blog({ blog, isLast }) {
  return (
    <Fragment>
      <BlogItem href={`/blogs/${blog.slug}`}>
        <Column>
          <UserSection>
            <AvatarImage src={blog.avatarUrl} />
            <UserDetails>
              <NameRow>
                <UserName>{blog.author}</UserName>
                <span className="dot">•</span>
                <Timestamp>{blog.date}</Timestamp>
              </NameRow>
              <Designation>{blog.role}</Designation>
            </UserDetails>
          </UserSection>
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

const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  background: lightcyan;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 2px;
`;

const Timestamp = styled.span`
  font-size: 0.8rem;
  color: #a3b2c1;
  font-weight: 500;
`;

const NameRow = styled.div`
  display: flex;
  align-items: center;
  & .dot {
    margin: 0 8px;
    color: #a3b2c1;
  }
`;

const Designation = styled.span`
  font-size: 0.75rem;
  color: #a3b2c1;
  font-weight: 400;
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
