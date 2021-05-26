import Register from "@/components/Register.vue";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Vuex from "vuex";

describe("Register.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  const router = new VueRouter();
  let wrapper;
  let store;
  let mutations;

  beforeEach(() => {
    vuetify = new Vuetify();
    mutations = {
      SET_ERRORMESSAGE: jest.fn(),
    };
    (store = new Vuex.Store({
      mutations,
    })),
      (wrapper = mount(Register, {
        localVue,
        vuetify,
        router,
        store,
      }));
  });

  test("is Vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  test("check v-model name", async () => {
    const emailtext = wrapper.find("#name");
    await emailtext.setValue("testuser");

    expect(emailtext.element.value).toBe("testuser");
  });

  test("check v-model email", async () => {
    const emailtext = wrapper.find("#email");
    await emailtext.setValue("test@mail.com");

    expect(emailtext.element.value).toBe("test@mail.com");
  });

  test("check v-model password", async () => {
    const emailtext = wrapper.find("#password");
    await emailtext.setValue("password");

    expect(emailtext.element.value).toBe("password");
  });
});
