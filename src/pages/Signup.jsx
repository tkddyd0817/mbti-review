import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
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
  border-radius: 1rem;
  padding: 2rem;
  width: 30rem;
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

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      await register(formData);
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <Wrapper>
      <Card>
        <Title>회원가입</Title>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <InfoText>
          이미 계정이 있으신가요? <StyledLink to="/login">로그인</StyledLink>
        </InfoText>
      </Card>
    </Wrapper>
  );
};

export default Signup;
