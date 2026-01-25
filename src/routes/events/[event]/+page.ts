import { CommunityEvents } from "$lib/store/events";
import { error, redirect } from "@sveltejs/kit";
import { get } from "svelte/store";

export const load = ({ params }) => {
  if (
    !params.event ||
    !get(CommunityEvents).find((p) => p.id === params.event)
  ) {
    error(404, "Event could not be found.");
  }

  return {
    title: get(CommunityEvents).find((p) => p.id === params.event)!.title,
  };
};
