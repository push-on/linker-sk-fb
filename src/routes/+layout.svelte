<script lang="ts">
  import "../app.postcss"
  import { AppShell, AppBar, LightSwitch } from "@skeletonlabs/skeleton"
  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from "@floating-ui/dom"
  import { storePopup } from "@skeletonlabs/skeleton"
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar background="backdrop-brightness-75">
      <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">🔗 Linker app</strong>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <a href="/login" class="btn btn-sm variant-outline-primary">login</a>
        <a href="/" class="btn btn-sm variant-outline-primary">home</a>
        <LightSwitch />
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <slot />
</AppShell>
