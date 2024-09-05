import React from "react";
import smcLogo from '../../images/SMC_Logo.gif';
import usericon from '../../images/user.svg';
import logout from '../../images/Log-out.svg';
import { useNavigate } from "react-router-dom"; 





const Header=()=>{
  const navigate = useNavigate();
  const logOut=()=>
  {
    localStorage.clear();
navigate('/')
  }

  const username= localStorage.getItem('back');

  
return(
<>
<div className="header">
<nav class="navbar navbar-expand-md">
  <div className="container">
  <a class="navbar-brand ml-1" href="#"><img src={smcLogo} style={{width:'130px'}}/></a>
  <button class="navbar-toggler mr-1" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
    <div class="navbar-nav align-middle">
      
      <span className="userIcon"><img src={usericon}/></span>
      <span className="userName">{username}</span>
      <span className="userlogin"><img src={logout}/></span>
      <span className="signstatus"onClick={logOut}>Sign Out</span>
     
    </div>
  
  </div>
  </div>
</nav>
</div>
</>
)

}

export default Header;