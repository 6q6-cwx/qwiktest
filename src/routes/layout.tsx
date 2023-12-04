import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Header from "~/components/header";
import Footer from "~/components/footer";
import Menu from "~/components/menu";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div>
      <Header />
      <div>
        <Menu />
        <Slot />
      </div>
      <Footer />
    </div>
  );
});
