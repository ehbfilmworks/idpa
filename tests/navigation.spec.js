import {mount} from '@vue/test-utils'
import {describe, it, expect} from 'vitest'
import Navigation from '@/components/navigation.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/offer', name: 'offer', component: { template: '<div>Angebot</div>' } },
    { path: '/projects', name: 'projects', component: { template: '<div>Projekte</div>' } },
    { path: '/info', name: 'info', component: { template: '<div>Über uns</div>' } },
    { path: '/contact', name: 'contact', component: { template: '<div>Kontakt</div>' } },
    {
      path: '/equipment',
      name: 'equipment',
      component: { template: '<div>Equipment</div>' }
    }
  ]
})

describe('Navigation', () => {
    it('renders the equipment link', async () => {
        router.push('/')
        await router.isReady()
        const wrapper = mount(Navigation, {
          global: {
            plugins: [router]
          }
        })
        const equipmentLink = wrapper.find('a[href="/equipment"]')
        expect(equipmentLink.exists()).toBe(true)
    })
})
