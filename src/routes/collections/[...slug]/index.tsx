import { component$ } from "@builder.io/qwik";
import BreadCrumbs from "../../components/breadcrumbs";
import {
  useContext,
  useContextProvider,
  createContextId,
} from "@builder.io/qwik";
import { APP_STATE } from '~/constants'

export default component$(() => {
  useContextProvider(APP_STATE,123)
  return (
    <>
      <BreadCrumbs items={[{name:'Electronic / Collection',slug:'2',id:'3'}]}/>
      <div>
      
      </div>
    </>
  );
});
