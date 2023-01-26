import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserJoin = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [inputEmail, setInputEmail] = useState('');
 
  const handleInputId = (e) => {
    setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }

  const handleConfirmPw = (e) => {
    setConfirmPw(e.target.value)
  }

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value)
  }

// login 버튼 클릭 이벤트
  const onClickJoin = () => {
      console.log('click Join')
  }

  return(
    <div className="skew-y-1 w-3/4 px-4">
      <form>
        <div className="mb-4">
          <label htmlFor="input_id">아이디</label>
          <input type="text" name="input_id" id="input_id" onChange={handleInputId} value={inputId}
            className="w-full h-8 border"/>
        </div>
        <div className="mb-4">
          <label htmlFor="input_pw">비밀번호</label>
          <input type="text" name="input_pw" id="input_pw" onChange={handleInputPw} value={inputPw}
            className="w-full h-8 border"/>
        </div>
        <div className="mb-4">
          <label htmlFor="confirm_pw">비밀번호 확인</label>
          <input type="text" name="confirm_pw" id="confirm_pw" onChange={handleConfirmPw} value={confirmPw}
            className="w-full h-8 border"/>
        </div>
        <div className="mb-4">
          <label htmlFor="input_email">E-mail</label>
          <input type="text" name="input_email" id="input_email" onChange={handleInputEmail} value={inputEmail}
            className="w-full h-8 border"/>
        </div>
        <div>
          <button type='button' onClick={onClickJoin} className="w-full py-3 rounded bg-yellow-400 text-white text-lg font-bold">회원가입</button>
        </div>
        <div className="flex justify-between mt-4">
          <Link to="/" className="text-sm text-amber-400">메인으로</Link>
          <Link to="/login" className="text-sm text-slate-600">로그인</Link>
        </div>
      </form>
    </div>
  )
}

export default UserJoin;
