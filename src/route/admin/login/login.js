import { useState } from "react";
import AdminHead from "../inc/adminHead";
import axios from "axios";

function Login(){

    let [user,setUser] = useState();
    const updateUserId = (value) => {setUser(prevUser => ({...prevUser,
        userId: value}));};

    const updateUserPw = (value) => {setUser(prevUser => ({...prevUser,
        userPw: value}));};
    return(
        <div>
            <AdminHead/>
        <a class="hiddenanchor" id="signup"></a>
        <a class="hiddenanchor" id="signin"></a>
  
        <div class="login_wrapper">
          <div class="animate form login_form">
            <section class="login_content">
              <form>
                <h1 style={{textShadow:"none",color:"white"}}>Loop Motion Studio</h1>
                <div>
                  <input type="text" class="form-control" placeholder="아이디를 입력해주세요" required="" 
                  onChange={(e)=>{
                    updateUserId(e.target.value);
                }}/>
                </div>
                <div>
                  <input type="password" class="form-control" placeholder="비밀번호를 입력해주세요" required="" 
                  onChange={(e)=>{
                    updateUserPw(e.target.value);
                  }}/>
                </div>
                <div>
                  <button class="btn btn-default submit" type="button" style={{textShadow:"none",color:"white",fontSize:"18px"}}
                  onClick={()=>{
                    console.log(" 확인 : " + JSON.stringify(user,null,2));

                    console.log('API 호출');
                    
                    axios.post("/api/admin/login", user
                    ).then(result => {
                        console.log(result.data.status);
                        if(result.data.status == "OK"){
                            window.location.href="/admin/work/init";
                        }
                    }).catch(function (error) {
                        alert(error.response.data.errors[0].message);

                    })
                    
                }}>로그인</button>
                </div>
  
                <div class="clearfix"></div>
  
                <div class="separator">

                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    )
}

export default Login;