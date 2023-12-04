import { component$, useSignal,$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import './index.css'


export default component$(() => {
    const searchValue = useSignal('');

    const search=$(()=>{
        console.log(searchValue.value,'searchValue')
    })
    const purchased=$(()=>{
      console.log(searchValue.value,'searchValue')
  })
    return <div class='search'>
            <input 
                type="text"
                placeholder="请输入搜索内容" 
                value={searchValue.value}
                onChange$={$((event:any) => {
                    if (event.target.value !== "") {
                        searchValue.value = event.target.value;
                    }
                  })}
                />
            <button onClick$={search}>搜索</button>
            <button onClick$={purchased}>购物车</button>
          </div>;
  });