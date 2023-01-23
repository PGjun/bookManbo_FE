import React, { useState } from "react";
import { Link } from "react-router-dom";


const UserLogin = () => {
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
 
  const handleInputId = (e) => {
    setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }

// login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log('click login')
  }

  return(
    <div className="skew-y-1 w-2/3 px-4">
      <form>
        <div className="mb-6">
          <input type="text" name="input_id" id="input_id" placeholder="ID" onChange={handleInputId} value={inputId}
            className="w-full h-9 border-b"/>
        </div>
        <div className="mb-8">
          <input type="password" name="input_pw" id="input_pw" placeholder="Password" onChange={handleInputPw} value={inputPw}
            className="w-full h-9 border-b"/>
        </div>
        <div>
          <button type='button' onClick={onClickLogin} className="w-full py-3 rounded bg-yellow-400 text-white text-lg font-bold">LOGIN</button>
        </div>
        <div className="flex justify-between mt-6">
          <Link to="/" className="text-sm text-slate-400">비밀번호 찾기</Link>
          <Link to="/join" className="text-sm text-amber-400">회원가입</Link>
        </div>
      </form>
    </div>
  )
}

export default UserLogin;
