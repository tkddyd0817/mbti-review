
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
     <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            회원가입
          </h1>
          <AuthForm mode="signup" onSubmit={handleSignup} />
          <p className="text-center text-sm text-gray-500 mt-4">
            이미 계정이 있으신가요?{" "}
            <Link
              to="/login"
              className="text-red-500 font-bold hover:underline"
            >
              로그인
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;