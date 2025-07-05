import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
   margin-left: 30rem;
`;

const Card = styled.div`
  background: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  padding: 2rem;
  width: 24rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const InfoText = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  color: #ef4444;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      // 로그인 API 호출
      const data = await login(formData);
      // 사용자 프로필 정보 가져오기
      const userData = await getUserProfile();
      // 사용자 상태 업데이트 (토큰 포함)
      setUser({ ...userData, token: data.accessToken });
      // 페이지 이동
      navigate("/profile");
    } catch (error) {
      console.error(error);
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <Wrapper>
      <Card>
        <Title>로그인</Title>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <InfoText>
          계정이 없으신가요? <StyledLink to="/signup">회원가입</StyledLink>
        </InfoText>
      </Card>
    </Wrapper>
  );
};

export default Login;
