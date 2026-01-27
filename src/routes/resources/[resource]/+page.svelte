<script lang="ts">
  import { page } from "$app/state";
  import { findResourceByID } from "$lib/store/resources";

  let resource = $derived.by(() => {
    return findResourceByID(page.params.resource!)!;
  });
</script>

<h1>{resource.title}</h1>

<style>
  * {
    margin: 0;
  }
</style>
