import {
  findResourceByID,
  OGResources,
  resourceInStore,
  type CommunityResource,
} from "$lib/store/resources.js";
import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
  let resource: CommunityResource | undefined;

  for (const key in OGResources) {
    if (resourceInStore(params.resource)) {
      resource = findResourceByID(params.resource);
    }
  }

  if (!params.resource || !resource) {
    error(404, "Resource could not be found.");
  }

  return {
    title: resource.title,
  };
};

export const prerender = true;
