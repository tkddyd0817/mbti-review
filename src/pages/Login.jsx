
import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";

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
      navigate('/profile');
    } catch (error) {
        console.error(error)
      alert('로그인에 실패했습니다.');
    }
  };

  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          로그인
        </h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <p className="text-center text-sm text-gray-500 mt-4">
          계정이 없으신가요?{" "}
          <Link to="/signup" className="text-red-500 font-bold hover:underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;