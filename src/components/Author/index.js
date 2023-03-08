import styled from "styled-components";

export default function Author({ blog }) {
  return (
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
  );
}

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
