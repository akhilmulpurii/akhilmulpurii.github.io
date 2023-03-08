import Image from "next/image";
import styled from "styled-components";
import Author from "../Author";

export default function BlogHero({ blog }) {
  return (
    <BlogHeroContainer>
      <TagsContainer>
        {blog?.tags?.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
      <BlogHeroText>
        <BlogHeroTitle>{blog.title}</BlogHeroTitle>
        <BlogHeroDescription>{blog.description}</BlogHeroDescription>
      </BlogHeroText>
      <AuthorContainer>
        <Author blog={blog} />
      </AuthorContainer>
      <BlogHeroImage
        src={blog.mainImage}
        width={300}
        height={225}
        alt={`${blog.title} Main Image`}
      />
    </BlogHeroContainer>
  );
}

const BlogHeroContainer = styled.div`
  padding: 32px;
  margin: 0 auto;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const Tag = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.08rem;
`;

const BlogHeroImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 64px;
`;

const BlogHeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BlogHeroTitle = styled.h1`
  font-size: 4vw;
  font-weight: 400;
  color: #fff;
  margin: 0;
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
    font-size: 6vw;
  }
`;

const BlogHeroDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  margin: 0 auto;
  text-align: center;
  line-height: 1.5;

  letter-spacing: 0.08rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;
