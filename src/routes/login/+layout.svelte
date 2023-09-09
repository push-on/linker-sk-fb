<script lang="ts">
  import { goto } from "$app/navigation"
  import { Step, Stepper } from "@skeletonlabs/skeleton"
  import { onMount } from "svelte"
  import { fly } from "svelte/transition"

  onMount(() => {
    goto("/login")
  })

  function onStepHandler(e: {
    detail: { state: { current: number; total: number }; step: number }
  }): void {
    console.log("event:step", e)
    if (e.detail.state.current === 0) {
      goto("/login")
    } else if (e.detail.state.current === 1) {
      goto("/login/username")
    } else if (e.detail.state.current === 2) {
      goto("/login/photo")
    }
  }
</script>

<div class="w-full flex justify-center items-center py-10 ">
  <div class="backdrop-brightness-75 w-modal px-10 py-10 rounded-3xl shadow-3xl ">
    <Stepper active="variant-filled-primary" buttonNext="variant-ghost-primary"   on:step={onStepHandler}>
      <Step >
        <svelte:fragment slot="header" >login</svelte:fragment>
        <slot />
      </Step>
      <Step>
        <svelte:fragment slot="header">username</svelte:fragment>
        <slot />
      </Step>
      <Step>
        <svelte:fragment slot="header">photo</svelte:fragment>
        <slot />
      </Step>
    </Stepper>
  </div>
</div>
