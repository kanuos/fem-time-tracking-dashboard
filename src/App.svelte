<script lang="ts">
  import Card from "./lib/components/Card.svelte";
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

<main class="bg-neutral-1 min-h-screen grid place-content-center p-6 lg:p-0">
  <section
    class="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 w-full h-auto max-w-6xl gap-6"
  >
    <Header on:change-period={changePeriod} bind:period />
    <Card type="work" bind:period />
    <Card type="play" bind:period />
    <Card type="study" bind:period />
    <Card type="exercise" bind:period />
    <Card type="social" bind:period />
    <Card type="selfcare" bind:period />
  </section>
</main>
