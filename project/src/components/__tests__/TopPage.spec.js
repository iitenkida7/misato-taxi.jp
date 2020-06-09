import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'
import Component from '@/App.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter()

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Component, {
    router
  })
})