import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f9fafb;
  min-height: 100vh;
  margin-top: 4rem;
  margin-left: 6rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  text-align: center;
  color: #4b5563;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  padding: 1.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const CardDesc = styled.p`
  color: #4b5563;
`;

const Center = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const StyledLink = styled(Link)`
  background: #ef4444;
  color: #fff;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: inline-block;
  font-weight: 500;
  transition: background 0.2s;
  &:hover {
    background: #dc2626;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Title>무료 성격 테스트</Title>
        <Description>
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </Description>
        <Grid>
          <Card>
            <CardTitle>성격 유형 검사</CardTitle>
            <CardDesc>
              자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을
              미치는지 알아보세요.
            </CardDesc>
          </Card>
          <Card>
            <CardTitle>성격 유형 이해</CardTitle>
            <CardDesc>
              다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
            </CardDesc>
          </Card>
          <Card>
            <CardTitle>팀 평가</CardTitle>
            <CardDesc>
              팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
              배워보세요.
            </CardDesc>
          </Card>
        </Grid>
        <Center>
          <StyledLink to="/test">내 성격 알아보러 가기</StyledLink>
        </Center>
      </Container>
    </Wrapper>
  );
};

export default Home;
