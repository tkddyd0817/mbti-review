import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ResultContainer = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  max-width: 36rem;      /* 원하는 최대 너비 */
  margin: 3rem ;     /* 위아래 여백 + 가운데 정렬 */
  padding: 2.5rem 2rem; 
  margin-left:25rem /* 내부 여백 */
`;


const TestTitle = styled.h1`

  margin-left: 40rem;
`;

const ResultTitle = styled.h1`
  font-size: 1.875rem; /* text-3xl */
  font-weight: bold;
  color: #ef4444;      /* text-primary-color */
  margin-bottom: 1.5rem;
  margin-left:3rem
`;

const ResultDesc = styled.p`
  font-size: 1.125rem; /* text-lg */
  color: #374151;      /* text-gray-700 */
  margin-bottom: 1.5rem;
`;

const ResultButton = styled.button`
  width: 100%;
  background: #dc2626; /* bg-red-600 */
  color: #fff;
  padding: 0.75rem 0;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  transition: background 0.3s;
  cursor: pointer;
  &:hover {
    background: #b91c1c; /* bg-red-700 */
  }
`;

const TestPage = ({ user }) => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);

    try {
      await createTestResult({
        userId: user.id,
        nickname: user.nickname,
        result: mbtiResult,
        visibility: true,
      });
    } catch (error) {
      console.error("결과 저장 실패:", error);
    }
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <div>
      {!result ? (
        <>
          <TestTitle>MBTI 테스트</TestTitle>
          <TestForm onSubmit={handleTestSubmit} />
        </>
      ) : (
  <ResultContainer>
  <ResultTitle>테스트 결과: {result}</ResultTitle>
  <ResultDesc>
    {mbtiDescriptions[result] || "해당 성격 유형에 대한 설명이 없습니다."}
  </ResultDesc>
  <ResultButton onClick={handleNavigateToResults}>
    결과 페이지로 이동하기
  </ResultButton>
</ResultContainer>
       
      )}
    </div>
  );
};

export default TestPage;



