import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    // googleでログイン
    // Login.js の loginInWithGoogle 関数内
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('ログイン成功！', result.user); // これが出るかチェック
        localStorage.setItem('isAuth', 'true');
        setIsAuth(true);
        navigate('/');
      })
      .catch((error) => {
        console.error('ログイン失敗...', error.message); // エラーが出れば原因がわかる
      });
  };
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Google でログイン</button>
    </div>
  );
};

export default Login;
