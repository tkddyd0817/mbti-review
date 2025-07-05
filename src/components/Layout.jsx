import { Link, useNavigate } from "react-router-dom";

// src/components/Layout.jsx
const Layout = ({ isAuthenticated, setUser }) => {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // 사용자 상태를 null로 설정 (로그아웃)
      setUser(null);
      // 홈 페이지로 이동
      navigate('/');
    };
  
    return (
      <nav>
        {/* 네비게이션 바 */}
        {isAuthenticated ? (
          <>
            <Link to="/">홈</Link>
            <Link to="/profile">프로필</Link>
            <Link to="/test">테스트</Link>
            <Link to="/results">결과 목록</Link>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <>
            <Link to="/">홈</Link>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </>
        )}
      </nav>
    );
  };
  
  export default Layout;
  
  