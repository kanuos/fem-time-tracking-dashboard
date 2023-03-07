import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/svelte"
import Header from "../components/Header.svelte";

beforeEach(() => {
    render(Header, { period: "daily" })
})

afterEach(cleanup)

describe("Unit Test => Header.svelte", () => {
    const { getByRole, getAllByLabelText, debug } = screen;
    it("should render the header component", () => {
        const headerEl = getByRole("banner");
        expect(headerEl).toBeTruthy();
    })

    it("should display the profile image", () => {
        const profileFigure = getByRole("figure", { name: /profile-pic-container/i });
        const profileImg = getByRole("img", { name: /profile-pic/i });

        expect(profileFigure).toBeTruthy();
        expect(profileImg).toBeTruthy();
        expect(profileImg.hasAttribute("src")).toBe(true);
        expect(profileImg.getAttribute("src")).toMatch(/image-jeremy.png/i);
        expect(profileImg.getAttribute("alt")).toMatch(/jeremy robson/i);
    })

    it("should display the profile details", () => {
        const profileName = getByRole("heading", { level: 1 });
        expect(profileName).toBeTruthy();
        expect(profileName.textContent).toMatch(/jeremy robson/i)
    })

    it("should display the period selector buttons", () => {
        const selectorBtns = getAllByLabelText("period-selector-btn");
        selectorBtns.forEach(btn => {
            expect(btn.tagName).toMatch(/button/i)
            expect(btn.hasAttribute("disabled")).toBe(false)
            expect(btn.textContent).toMatch(/[daily | weekly | monthly]/)
            expect(btn.classList.contains("active")).toBe(btn.textContent === "daily")
        })
        expect(selectorBtns.length).toEqual(3)
    })
})