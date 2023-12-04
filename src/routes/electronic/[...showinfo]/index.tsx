import { component$, useStore,useTask$,useSignal,$,useVisibleTask$ } from "@builder.io/qwik";
import BreadCrumbs from '~/components/breadcrumbs'
import { useLocation } from '@builder.io/qwik-city';
import { APP_STATE } from "~/constants";
import './index.css'

export default component$(() => {
  const loc = useLocation()
  const store=useStore({
    baseUrl:'../../../public/img',
    path:loc.params.showinfo.split('=')
  })
  let text = useSignal('');
 
  // useTask$(async () => {
  //   console.log('start????????333')
  //   // const size = 40;
  //   // const array = [];
  //   // array.push(0, 1);
  //   // for (let i = array.length; i < size; i++) {
  //   //   array.push(array[i - 1] + array[i - 2]);
  //   //   await delay(100);
  //   // }
  //   // fibonacci.value = array;
  //   // console.log()
  // });
  // useVisibleTask$()
  useTask$(async ({track}) => {
    console.log('start')
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log('1000ms');
        resolve();
      }, 1000);
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log('2000ms');
        resolve();
      }, 2000);
    });
  });
  useTask$(async ({track}) => {
    track(() => text.value);
    console.log('track')
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     console.log('1000ms');
    //     resolve();
    //   }, 1000);
    // });
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     console.log('2000ms');
    //     resolve();
    //   }, 2000);
    // });
   
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     console.log('1000ms');
    //     resolve();
    //   }, 1000);
    // });
    
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     console.log('2000ms');
    //     resolve();
    //   }, 2000);
    // });
    
  });
  // useVisibleTask$(({ cleanup }) => {
  //   console.log('useVisibleTask$')
  // });
  // const delay = $((time: number) => new Promise((res) => {setTimeout(()=>{
  //   console.log(time,'time')
  //   res;
  // }, time)}))
 
  return (
    <>
      <div>
        <BreadCrumbs items={[{name:'Electronic',slug:'2',id:'3'}]}/>
        <div class="showinfo">
          <div class="showImg">
            <img src={`${store.baseUrl}/${store.path[1]?store.path[1]:'1'}.jpeg`} width={200} height={200} />
          </div>
            <div class="showin">
              <h3>商品</h3>
              <div class="info">
                <p>名称：电子设备</p>
                <p>详情：多人竞技、真实体验</p>
                <input
            type="text"
            value={text.value}
            onChange$={$((event:any) => {
              if (event.target.value !== "") {
                text.value = event.target.value;
              }
            })}
          />
              </div>
              
            </div>
        </div>
      </div>
    </>
  )
})