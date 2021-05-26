import About from "@/views/About.vue";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

describe("About.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  const router = new VueRouter();
  let wrapper;

  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(About, {
      localVue,
      vuetify,
      router,
    });
  });

  test("is Vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  test("check if text set correctly", () => {
    expect(wrapper.text()).toContain("Technologien");
    expect(wrapper.text()).toContain("MongoDB Atlas");
  });

  test("check if data has set correctly and is accessible", () => {
    expect(wrapper.vm.$data.technologien).toHaveLength(5);
    expect(wrapper.vm.$data.features).toHaveLength(10);
  });
});
