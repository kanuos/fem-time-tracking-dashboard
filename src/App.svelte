<script lang="ts">
  import Header from "./lib/components/Header.svelte";
  import type { PeriodType } from "./lib/ts/types";

  // State and behavior
  $: period = "weekly" as PeriodType;

  function changePeriod({ detail }: { detail: { period: PeriodType } }) {
    // update the state with the latest period triggered
    // by the PeriodSelector component via event forwarding
    period = detail.period;
  }
</script>

<main class="bg-neutral-1 min-h-screen grid place-items-center gap-2 p-6">
  <Header on:change-period={changePeriod} bind:period />
</main>
