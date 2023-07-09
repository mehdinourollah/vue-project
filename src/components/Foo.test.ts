import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FooVue from "./Foo.vue";
import exp from "constants";

describe("Foo", () => {
    it("renders properly", () => {
        const wrapper = mount(FooVue);
        // expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('input').exists()).toBeTruthy()
    })

    it("has input", () => {
        const wrapper = mount(FooVue);
        // expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('input').exists()).toBeTruthy()
    })
});
