import { writable } from "svelte/store";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = async () => {
  return {
    title: "Events",
  };
};
