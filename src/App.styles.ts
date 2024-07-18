

import styled from 'styled-components';
import backgroundImage from './images/background.jpg'; 


export const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuizTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ScoreText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const NextButton = styled(Button)`
  background-color: #28a745;
`;

export const StyledQuestionCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  width: 80%; 
  max-width: 600px; 
  text-align: center;
  margin-bottom: 1rem;
`;
