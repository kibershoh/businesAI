import styled from 'styled-components';

export const MissionContainer = styled.div`
  background: linear-gradient(90deg, #1a252f 0%, #2e3b46 100%);
  color: #fff;
  text-align: center;
  padding: 100px 20px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  line-height: 1.2;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;