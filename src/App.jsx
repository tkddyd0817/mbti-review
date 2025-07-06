// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// 필요한 컴포넌트와 페이지 임포트
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import TestPage from "./pages/TestPage";
// import TestResultPage from './pages/TestResultPage';
// import TestResultList from './pages/TestResultList';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // 1. 사용자 상태 초기화
  const [user, setUser] = useState(() => {
    // localStorage에서 'user' 키로 저장된 값을 가져옵니다.
    const savedUser = localStorage.getItem("user");
    // 저장된 값이 있으면 JSON.parse로 객체로 변환, 없으면 null 반환
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 2. 인증 여부 판단
  const isAuthenticated = !!user; // user가 null이 아니면 true

  // 3. 사용자 상태 변화에 따른 localStorage 업데이트
  useEffect(() => {
    if (user) {
      // 로그인 상태: 사용자 정보를 localStorage에 저장
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      // 로그아웃 상태: localStorage에서 사용자 정보 삭제
      localStorage.removeItem("user");
    }
  }, [user]); // user 상태가 변경될 때마다 실행

  return (
    <Routes>
      <Route
        element={<Layout isAuthenticated={isAuthenticated} setUser={setUser} />}
      >
        {/* // <Layout isAuthenticated={isAuthenticated} setUser={setUser}> */}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test" element={<TestPage  />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
          {/* <Route path="/test" element={<TestPage user={user} />} /> */}
          {/* <Route path="/results" element={<TestResultList user={user} />} />
          <Route path="/result/:id" element={<TestResultPage user={user} />} />   */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
