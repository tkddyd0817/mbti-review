import { useState } from "react";
import styled from "styled-components";

const Form = styled.form``;

const InputBlock = styled.div`
  margin-bottom: 1rem;
  
`;

const Input = styled.input`
margin-left: 1.5rem;
height: 2rem;
  width: 80%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  outline: none;
  transition: box-shadow 0.2s, border-color 0.2s;
  &:focus {
    border-color: #ef4444;
    box-shadow: 0 0 0 2px #fecaca;
  }
`;

const SubmitButton = styled.button`
margin-left: 1.5rem;
height: 3rem;
  width: 88%;
  padding: 0.5rem 0;
  font-weight: bold;
  color: #fff;
  background: #ef4444;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: #dc2626;
  }
`;

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    userid: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // 부모 컴포넌트에 데이터 전달
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputBlock>
        <Input
          type="text"
          name="userid"
          value={formData.userid}
          onChange={handleChange}
          placeholder="아이디"
          required
        />
      </InputBlock>
      <InputBlock>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
          required
        />
      </InputBlock>
      {/* 회원가입 모드일 때만 닉네임 입력 */}
      {mode === "signup" && (
        <InputBlock style={{ marginBottom: "1.5rem" }}>
          <Input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임"
            required
          />
        </InputBlock>
      )}
      <SubmitButton type="submit">
        {mode === "login" ? "로그인" : "회원가입"}
      </SubmitButton>
    </Form>
  );
};

export default AuthForm;
