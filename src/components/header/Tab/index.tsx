import { component$, Slot } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import './index.css'

export default component$(({link,title}:any) => {
    return <div class='linksty'>
           <Link href={link}>
              {title}
           </Link>
          </div>
    ;
  });