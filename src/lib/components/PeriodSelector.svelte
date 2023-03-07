<!-- period selector button => daily | weekly | monthly -->
<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { PeriodType } from "../ts/types";

  //   props
  export let period: PeriodType;
  export let selectedPeriod: PeriodType = "weekly";

  //   dispatcher to emit events listenable by
  const dispatch = createEventDispatcher();

  //   callbacks
  // function is exported for testing purpose
  export function handleChangePeriod() {
    dispatch("change-period", { period });
  }
</script>

<button
  aria-label="period-selector-btn"
  on:click={handleChangePeriod}
  class:active={selectedPeriod === period}
>
  {period}
</button>

<style lang="postcss">
  button {
    @apply text-sm capitalize border-0 outline-0 text-neutral-3 hover:text-neutral-4 transition-all font-medium opacity-80;
  }
  .active {
    @apply text-neutral-4 opacity-100;
  }
</style>
