import {
  component$,
  $,
  useStore,
  useTask$,
  useContextProvider,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import "./index.css";
import { APP_STATE } from "~/constants";
import ShowInfo from "~/components/showInfo";


export default component$(() => {

  const store = useStore({
    menuList: [
      {
        link: "/electronic",
        name: "Electron",
        id: "1",
      },
      {
        link: "/electronic",
        name: "Electron",
        id: "2",
      },
      {
        link: "/electronic",
        name: "Electron",
        id: "3",
      },
    ],
    // shopInfo: { link: "", src: "", name: "", id: "" },
  });

  useContextProvider(APP_STATE, 123);

  return (
    <div>
      <div class="top">
        <h1>Hi Qwik👋</h1>
      </div>
      <div class="bottom">
        <h1>Show & Some</h1>
        <div class="bottomImg">
          {store.menuList.map((item) => { 
            // console.log('llll7777')           
            return <ShowInfo items={item} key={item.id}/>;
          })}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
