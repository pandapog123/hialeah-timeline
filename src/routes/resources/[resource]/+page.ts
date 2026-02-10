import { browser, dev } from "$app/environment";
import {
  CommunityResources,
  findResourceByID,
  OGResources,
  resourceInStore,
  type CommunityResource,
} from "$lib/store/resources.js";
import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
  if (!browser) {
    return {
      title: "Loading Resource",
    };
  }

  let resource: CommunityResource | undefined;
  if (resourceInStore(params.resource)) {
    resource = findResourceByID(params.resource);
  }

  if (!params.resource || !resource) {
    error(404, "Resource could not be found.");
  }

  return {
    title: "tst",
  };
};

export const prerender = true;
