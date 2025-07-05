
import AuthForm from '../components/AuthForm';
import { register } from '../api/auth';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      await register(formData);
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (error) {
        console.error(error)
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <AuthForm mode="signup" onSubmit={handleSignup} />
      <p>
        이미 계정이 있으신가요? <Link to="/login">로그인</Link>
      </p>
    </div>
  );
};

export default Signup;