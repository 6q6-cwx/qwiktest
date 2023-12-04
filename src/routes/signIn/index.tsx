import { component$, useSignal,$,useTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import './index.css'
export default component$(() => {
  const navigate = useNavigate();
  const username = useSignal("");
  const password = useSignal("");

  const login=$(() => {
    console.log(username.value,'username.value')
    console.log(password.value,'password.value')
        if(username.value&&password.value){
            navigate('/');
        }
	})
  useTask$(() => {
    console.log('hellow');
  });
  return (
    <div>
      <div class="login">
        <div class="title">登陆页面</div>
        <div class="loginform">
          <label html-for="firstName" class="text-sm text-gray-500">
            姓名:
          </label>
          <input
            type="text"
            value={username.value}
            onChange$={$((event:any) => {
              if (event.target.value !== "") {
                username.value = event.target.value;
              }
            })}
          />
        </div>
        <div class="loginform">
          <label html-for="firstName" class="text-sm text-gray-500">
            密码:
          </label>
          <input
            type="text"
            value={password.value}
            onChange$={$((event:any) => {
              if (event.target.value !== "") {
                password.value = event.target.value;
              }
            })}
          />
        </div>
        <button class='submit' onClick$={login}>登陆</button>
      </div>
    </div>
  );
});
