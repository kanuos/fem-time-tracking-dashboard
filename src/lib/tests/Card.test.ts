import { describe, it, expect, afterEach } from "vitest"
import { cleanup, render, screen } from "@testing-library/svelte"
import Card from "../components/Card.svelte"
import type { CardType } from "../ts/types";


afterEach(cleanup)
const { getByRole, getByLabelText } = screen;

describe('Unit Test => Card.svelte', () => {
    it("should render the card", () => {
        render(Card, { period: "daily", type: "play" })
        const article = getByRole("article", { name: /profile-card/i });
        expect(article).toBeTruthy();
    })
    it("should contain the info", () => {
        render(Card, { period: "daily", type: "play" })
        const h2 = getByRole("heading", { level: 2, name: /play/ })
        const currentData = getByRole("listitem", { name: /current-data/i });
        expect(h2).toBeDefined()
        expect(currentData).toBeDefined();
    })

    describe('previous data label', () => {
        it("should render yesterday", () => {
            render(Card, { period: "daily", type: "play" })
            const previousData = getByLabelText("previous-data")
            expect(previousData.textContent).toMatch(/yesterday/i)
        })

        it("should render last week", () => {
            render(Card, { period: "weekly", type: "play" })
            const previousData = getByLabelText("previous-data")
            expect(previousData.textContent).toMatch(/last week/i)
        })

        it("should render last month", () => {
            render(Card, { period: "monthly", type: "play" })
            const previousData = getByLabelText("previous-data")
            expect(previousData.textContent).toMatch(/last month/i)
        })
    })

    describe('display proper image and figure background color', () => {
        it("render the work card", () => {
            testImgAndFigure("work")
        })
        it("render the play card", () => {
            testImgAndFigure("play")

        })
        it("render the study card", () => {
            testImgAndFigure("study")

        })
        it("render the exercise card", () => {
            testImgAndFigure("exercise")

        })
        it("render the social card", () => {
            testImgAndFigure("social")

        })
        it("render the self-care card", () => {
            testImgAndFigure("selfcare")

        })
    })


    it("should contain the ellipsis button", () => {
        render(Card, { period: "daily", type: "play" })
        const btn = getByRole("button", { name: /menu-icon/i })
        expect(btn).toBeDefined();
    })
})

// utils
function getImageAndFigure(name: string): { img: HTMLElement, figure: HTMLElement } {
    const img = getByLabelText(`${name}-img`)
    const figure = getByLabelText(`${name}-figure`)
    return {
        img, figure
    }
}

function testImgAndFigure(type: CardType) {
    render(Card, { type, period: "daily" })
    const { img, figure } = getImageAndFigure(type)

    expect(img).toBeDefined();
    expect(img.getAttribute("src")).toMatch(new RegExp(type, "i"))
    expect(figure).toBeDefined();
    expect(figure.classList.contains(`bg-${type}`)).toBe(true)
}
