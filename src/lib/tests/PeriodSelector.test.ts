import { describe, it, expect, afterEach, vi } from "vitest"
import { render, fireEvent, cleanup } from "@testing-library/svelte"
import PeriodSelector from "../components/PeriodSelector.svelte"

afterEach(cleanup)

describe('Unit test -> PeriodSelector.svelte', () => {
    it("should render button", async () => {
        const { getByLabelText } = render(PeriodSelector, { period: "daily", selectedPeriod: "weekly" });
        const selectorBtn = getByLabelText("period-selector-btn");
        expect(selectorBtn).not.toBeFalsy();
        expect(selectorBtn.tagName).toMatch(/button/i);
        expect(selectorBtn.textContent).toMatch(/daily/i);
        expect(selectorBtn.hasAttribute("disabled")).toBe(false);
    })

    it("should emit event when button is clicked", async () => {

        const { getByRole, component } = render(PeriodSelector, { period: "daily", selectedPeriod: "weekly" });
        const button = getByRole(/button/i);
        let mockEvent = vi.fn();
        component.$on('change-period', function (event) {
            mockEvent(event.detail);
        });
        await fireEvent.click(button);

        expect(mockEvent).toHaveBeenCalled(); // to check if it's been called
        expect(mockEvent).toHaveBeenCalledTimes(1); // to check how any times it's been called

        await fireEvent.click(button);
        expect(mockEvent).toHaveBeenCalledTimes(2);

        await fireEvent.click(button);
        expect(mockEvent).toHaveBeenCalledTimes(3);
    })
})