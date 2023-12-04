import { qwik } from 'qwik'; 

export let shopInfo = qwik.state([]);  

export const setShopInfo=(newShopInfo:any)=>{
    shopInfo = newShopInfo;  
    qwik.render();
}