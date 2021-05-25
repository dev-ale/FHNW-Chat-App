import Room from "@/components/Room.vue";
import { createLocalVue , mount } from "@vue/test-utils";
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueRouter from 'vue-router'



describe("Room.vue", () => {
    const localVue = createLocalVue()
    let vuetify
    let mutations
    let store
    const router = new VueRouter()
    let wrapper

   

    beforeEach(() => {
        vuetify = new Vuetify()
        mutations = {
            SET_CURRENTROOM: jest.fn()
          }
          store = new Vuex.Store({
            mutations
          })
           wrapper = mount(Room, {
            propsData: {
                title: "Room 1",
                color: "blue",
                deletable: true,
                id: "roomid1",
                username: "Peter",
                creator: "Peter",
                role: "Dozent",
            },
            store,
            localVue,
            vuetify,
            router
        });
    
      })
    
    test('is Vue instance', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    })

    test("props are correctly set", () => {
        const title = wrapper.find('#title')
        const creator = wrapper.find('#creator')

        expect(title.text()).toBe("Room 1")
        expect(creator.text()).toBe("Peter")

    })

    test("on click joinRoom is called", () => {
        const joinRoom = jest.fn()
        const btn = wrapper.find('#joinBtn')
        expect(btn.exists()).toBe(true)

        wrapper.setMethods({
            joinRoom: joinRoom
        })
        expect(joinRoom).toHaveBeenCalledTimes(0)
        btn.trigger('click')
        expect(joinRoom).toHaveBeenCalledTimes(1)
      

    })

    test("commit Mutation SET_CURRENTROOM successfully", () => {
        const joinRoom = jest.fn()
        wrapper.find('#joinBtn').trigger('click')

        wrapper.setMethods({
            joinRoom: joinRoom
        })
        expect(mutations.SET_CURRENTROOM.mock.calls).toEqual([[{}, "roomid1"]])
    })
   });
   