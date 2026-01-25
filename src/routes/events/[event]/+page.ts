import { CommunityEvents } from "$lib/store/events";
import { error, redirect } from "@sveltejs/kit";

export const load = ({ params }) => {
  if (!params.event || !CommunityEvents.find((p) => p.id === params.event)) {
    error(404, "Event could not be found.");
  }
};
