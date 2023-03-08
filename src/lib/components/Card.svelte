<script lang="ts">
  import type { CardInfoType, CardType, PeriodType } from "../ts/types";
  import metadata from "../../../public/data.json";
  //   props
  export let period: PeriodType;
  export let type: CardType;

  //   maps card type to tailwind color
  const CARD_INFO: CardInfoType = {
    work: {
      ...metadata[0],
      bg: "bg-work",
    },
    play: {
      ...metadata[1],
      bg: "bg-play",
    },
    study: {
      ...metadata[2],
      bg: "bg-study",
    },
    exercise: {
      ...metadata[3],
      bg: "bg-exercise",
    },
    social: {
      ...metadata[4],
      bg: "bg-social",
    },
    selfcare: {
      ...metadata[5],
      bg: "bg-selfcare",
    },
  };

  export function getPreviousPeriodLabel(p: PeriodType) {
    switch (p) {
      case "daily":
        return "Yesterday";
      case "weekly":
        return "Last Week";
      case "monthly":
        return "Last Month";
    }
  }

  export function singluarOrPlural(hrs: number): "hr" | "hrs" {
    if (Math.abs(hrs) <= 1) return "hr";
    return "hrs";
  }
</script>

<!-- card component -->
<article
  aria-label="profile-card"
  class="w-full h-full lg:flex flex-col justify-between lg:hover:scale-105 transition-all lg:w-52 lg:aspect-square lg:drop-shadow-lg"
>
  <figure
    aria-label="{type}-figure"
    class="{CARD_INFO[type].bg} w-full rounded-t-xl relative z-0"
  >
    <img
      aria-label="{type}-img"
      src={`/icon-${type}.svg`}
      alt=""
      class="object-cover block w-12 h-12  ml-auto"
    />
  </figure>
  <div
    class="bg-neutral-2 w-full p-4 rounded-xl relative z-10 -mt-3 hover:bg-card-base lg:h-full"
  >
    <div class="flex items-center justify-between">
      <h2 class="text-neutral-4 font-medium capitalize text-sm">
        {type}
      </h2>
      <button
        aria-label="menu-icon"
        type="button"
        class="inline-flex items-center gap-0.5 group outline-none focus:outline-none border-none"
      >
        <span
          class="h-1 w-1 block rounded-full bg-neutral-3 group-hover:bg-neutral-4 transition-all"
        /><span
          class="h-1 w-1 block rounded-full bg-neutral-3 group-hover:bg-neutral-4 transition-all"
        /><span
          class="h-1 w-1 block rounded-full bg-neutral-3 group-hover:bg-neutral-4 transition-all"
        />
      </button>
    </div>
    <ul
      class="flex items-center justify-between mt-4 lg:flex-col lg:items-start"
    >
      <li
        aria-label="current-data"
        class="text-neutral-4 text-2xl font-light lg:text-4xl"
      >
        {CARD_INFO[type].timeframes[period].current}{singluarOrPlural(
          CARD_INFO[type].timeframes[period].current
        )}
      </li>
      <li class="text-sm text-neutral-4">
        <small aria-label="previous-data">
          {getPreviousPeriodLabel(period)} &mdash; {CARD_INFO[type].timeframes[
            period
          ].previous}{singluarOrPlural(
            CARD_INFO[type].timeframes[period].previous
          )}
        </small>
      </li>
    </ul>
  </div>
</article>
