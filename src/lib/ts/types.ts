export type PeriodType = "daily" | "weekly" | "monthly";

export type CardType = "work" | "play" | "study" | "exercise" | "social" | "selfcare";


type TimeFrameType = {
    current: number,
    previous: number
}

export type CardInfoType = {
    [k in CardType]: {
        title: string,
        bg: string;
        timeframes: {
            [l in PeriodType]: TimeFrameType
        }
    }
}
