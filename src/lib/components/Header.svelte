<script lang="ts">
  import type { PeriodType } from "../ts/types";
  import PeriodSelector from "./PeriodSelector.svelte";
  //   props
  export let period: PeriodType;
</script>

<!-- header component -->
<header>
  <section>
    <figure aria-label="profile-pic-container">
      <img
        aria-label="profile-pic"
        src="/image-jeremy.png"
        alt="Jeremy Robson"
      />
    </figure>
    <div>
      <small class="opacity-90"> Report for </small>
      <h1 aria-label="profile-name">Jeremy Robson</h1>
    </div>
  </section>
  <ul aria-label="period-selector-list">
    <li>
      <PeriodSelector selectedPeriod={period} period="daily" on:change-period />
    </li>
    <li>
      <PeriodSelector
        selectedPeriod={period}
        period="weekly"
        on:change-period
      />
    </li>
    <li>
      <PeriodSelector
        selectedPeriod={period}
        period="monthly"
        on:change-period
      />
    </li>
  </ul>
</header>

<style lang="postcss">
  header {
    @apply w-full grid grid-rows-2 max-w-sm lg:max-w-[16rem] lg:grid-rows-3;
  }

  header > section {
    @apply flex items-center lg:flex-col lg:items-start lg:justify-center gap-4 p-8 w-full h-full rounded-xl bg-header z-10 relative row-start-1 row-end-2 lg:row-end-3;
  }

  figure {
    @apply h-16 w-16 block rounded-full p-0.5 bg-neutral-4;
  }

  figure > img {
    @apply block h-full w-full rounded-full object-cover;
  }

  header div {
    @apply flex flex-col items-start text-neutral-4 lg:w-min;
  }

  h1 {
    @apply text-2xl font-light lg:text-4xl lg:break-words;
  }

  ul {
    @apply bg-neutral-2 p-8 -translate-y-2 z-0 relative h-fit flex items-center justify-between rounded-b-xl lg:flex-col lg:items-start lg:gap-y-4 row-start-2 row-end-3 lg:row-start-3 lg:row-end-4;
  }
</style>
