import { describe, it, expect, afterEach, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/svelte";
import App from "../../App.svelte";

beforeEach(() => {
    render(App);
})
afterEach(cleanup)
const { getAllByRole, getAllByLabelText, debug } = screen;


describe('Integration test', () => {
    it("should show 5 profile cards", () => {
        const allCards = getAllByRole("article", { name: /profile-card/i });
        expect(allCards.length).toEqual(6)
    })

    describe("should update the UI with period specific data", () => {
        it("should render the default app", async () => {

            const previousPeriodLabels = getAllByLabelText("previous-data");
            const periodSelectorBtns = getAllByRole("button", { name: /period-selector/i })

            // default set to week
            let activeBtn = getActiveButton(periodSelectorBtns);
            expect(activeBtn.textContent).toMatch(/week/i)
            checkPreviousLabels(previousPeriodLabels, new RegExp(/last week/, "i"))

            // user clicks daily
            const dailyPeriodSelector = periodSelectorBtns.find(btn => btn.textContent === "daily");
            await fireEvent.click(dailyPeriodSelector);

            // active btn should be daily
            // the labels should show - yesterday
            activeBtn = getActiveButton(periodSelectorBtns);
            expect(activeBtn.textContent).toMatch(/daily/i);
            checkPreviousLabels(previousPeriodLabels, new RegExp(/yesterday/, "i"))

            // monthly button is clicked
            const monthlyPeriodSelector = periodSelectorBtns.find(btn => btn.textContent === "monthly");
            await fireEvent.click(monthlyPeriodSelector);

            // active btn should be monthly
            // the labels should show - last month
            activeBtn = getActiveButton(periodSelectorBtns);
            expect(activeBtn.textContent).toMatch(/monthly/i);
            checkPreviousLabels(previousPeriodLabels, new RegExp(/last month/, "i"))

            // clicking on monthly button when the active is already monthly doesn't change anything
            await fireEvent.click(monthlyPeriodSelector);
            activeBtn = getActiveButton(periodSelectorBtns);
            expect(activeBtn.textContent).toMatch(/monthly/i);
            checkPreviousLabels(previousPeriodLabels, new RegExp(/last month/, "i"))

            // clicking on weekly - 
            // the labels should show - last week
            const weeklyPeriodSelector = periodSelectorBtns.find(btn => btn.textContent === "weekly");
            await fireEvent.click(weeklyPeriodSelector);
            activeBtn = getActiveButton(periodSelectorBtns);
            expect(activeBtn.textContent).toMatch(/weekly/i);
            checkPreviousLabels(previousPeriodLabels, new RegExp(/last week/, "i"))


        })
    })
})


// utils 
function getActiveButton(allBtns: HTMLElement[]) {
    return allBtns.find(el => el.classList.contains("active"));
}

function checkPreviousLabels(labels: HTMLElement[], match: RegExp) {
    labels.forEach(label => {
        expect(label.textContent).toMatch(match);
    })

}