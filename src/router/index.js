import Vue from 'vue'
import VueRouter from 'vue-router'
import FormRadio from 'components/form-radio/form-radio'
import FormCheckout from 'components/form-checkout/form-checkout'
import FormCascader from 'components/form-cascader/form-cascader'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        //默认显示
        {
            path: '/',
            redirect: '/formRadio'
        },
        {
            path: '/formRadio',
            component: FormRadio,
            name: 'formRadio'
        },
        {
            path: '/formCheckOut',
            component: FormCheckout,
            name: 'formCheckOut'
        },
        {
            path: '/formCascader',
            component: FormCascader,
            name: 'formCascader'
        }
    ]
})