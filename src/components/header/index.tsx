import { component$,useStore } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import Tab from "./Tab";
import './index.css'
import Search from "./Search";
export default component$(() => {
   const store=useStore({
     menuList:[
        {
            link:'/electronic',
            title:'电子产品',
            id:'e'
        },
        {
            link:'/electronic',
            title:'家庭用品',
            id:'bb'
        },
        {
            link:'/electronic',
            title:'运动用品',
            id:'33'
        },
     ]
   })
    return <div>
           <div class='loginfo'>
             <Link href='/signIn' >
                Login ➡️
             </Link>
           </div>
           <div class="menu">
            {
                store.menuList.map((item)=>{
                    return(
                    <Tab
                    link={item.link}
                    title={item.title}
                    key={item.id}
                  />
                    ) 
                })
            }
            <Search/>
           </div>
    </div>
    ;
  });