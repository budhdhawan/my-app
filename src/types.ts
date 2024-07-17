// src/types.ts
export type Difficulty = 'easy' | 'medium' | 'hard';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: Difficulty;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
