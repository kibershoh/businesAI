import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #0b132b;
  color: #fff;
  padding: 3rem 2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Section = styled.div`
  flex: 1;
  min-width: 200px;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  p, a {
    font-size: 0.9rem;
    color: #a9b7d1;
    margin: 0.5rem 0;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;

  &:hover {
    color: #fff;
  }
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #1c2541;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NewsletterBox = styled.div`
  background-color: #1c2541;
  padding: 1.5rem;
  border-radius: 0.5rem;

  input {
    width: calc(100% - 100px);
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  button {
    width: 100px;
    border: none;
    background-color: #007bff;
    color: #fff;
    padding: 0.5rem;
    border-radius: 0 0.5rem 0.5rem 0;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #a9b7d1;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  a {
    margin: 0 0.5rem;
    color: #a9b7d1;

    &:hover {
      color: #fff;
    }

    i {
      font-size: 1.2rem;
    }
  }
`;