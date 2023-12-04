import { component$, Slot, useContext,$,useStore} from "@builder.io/qwik";
import { APP_STATE } from "~/constants";
import { useNavigate } from "@builder.io/qwik-city";


export default component$(({items}:any) => {
  const nav = useNavigate();
  const store=useStore({
    shopInfo:{},
    baseUrl:'../../../public/img'
  })
  const data=useContext(APP_STATE)
  console.log(data,'data====')
  const goShow=$((e:any)=>{
    e.preventDefault();
    nav(`/electronic/imgid=${items.id}`);
    })
  return <div>
            <div onClick$={goShow}>
                <img src={`${store.baseUrl}/${items.id}.jpeg`} width={200} height={200} />
              </div>
      </div>
});
