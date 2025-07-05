import { useState } from "react";
import { questions } from "../data/questions";
import styled from "styled-components";

const Form = styled.form`
  background: #fff;
  border-radius: 0.5rem;
  padding: 1.5rem;
`;

const QuestionBlock = styled.div`
  margin-bottom: 1.5rem;
`;

const QuestionText = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
`;

const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const OptionLabel = styled.label`
  display: block;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;
  background: ${({ checked }) => (checked ? "#f3f4f6" : "#fff")};
  &:hover {
    background: #f3f4f6;
  }
`;

const RadioInput = styled.input`
  margin-right: 0.5rem;
  accent-color: #ef4444;
`;

const SubmitButton = styled.button`
  width: 100%;
  color: #fff;
  background: #dc2626;
  padding: 0.75rem 0;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  transition: background 0.3s, color 0.3s;
  cursor: pointer;
  &:hover {
    background: #b91c1c;
    color: #ff5a5f;
  }
`;

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" })
  );

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {questions.map((q, index) => (
        <QuestionBlock key={q.id}>
          <QuestionText>{q.question}</QuestionText>
          <OptionGroup>
            {q.options.map((option, i) => (
              <OptionLabel key={i} checked={answers[index]?.answer === option}>
                <RadioInput
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index]?.answer === option}
                  onChange={() => handleChange(index, option)}
                />
                {option}
              </OptionLabel>
            ))}
          </OptionGroup>
        </QuestionBlock>
      ))}
      <SubmitButton type="submit">제출하기</SubmitButton>
    </Form>
  );
};

export default TestForm;
