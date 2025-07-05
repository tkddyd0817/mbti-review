import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #f3f4f6;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  height: 4rem;
  display: flex;
  align-items: center;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: #1f2937;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #dc2626;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #1f2937;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #dc2626;
  }
`;

const Layout = ({ isAuthenticated, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <Nav>
        <NavContainer>
          <StyledLink to="/">홈</StyledLink>
          <NavLinks>
            {isAuthenticated ? (
              <>
                <StyledLink to="/profile">프로필</StyledLink>
                <StyledLink to="/test">테스트</StyledLink>
                <StyledLink to="/results">결과 목록</StyledLink>
                <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
              </>
            ) : (
              <>
                <StyledLink to="/login">로그인</StyledLink>
                <StyledLink to="/signup">회원가입</StyledLink>
              </>
            )}
          </NavLinks>
        </NavContainer>
      </Nav>
      <div style={{ paddingTop: "4rem" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
