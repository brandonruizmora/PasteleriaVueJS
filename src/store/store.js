import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
    state() {
        return {
            pedidos: [{
                id: 'pedido1',
                name: 'Brandon',
                phone: '1234567890',
                email: 'correo@correo.com',
                description: 'descp',
                toggle: '#pedido1'
            },{
                id: 'pedido2',
                name: 'Brandon 2',
                phone: '1234567890',
                email: 'correo@correo.com',
                description: 'descp',
                toggle: '#pedido2'
            }],
            form: {
                name: '',
                phone: '',
                email: '',
                description: ''
            }
        }
    },
    mutations: {
        // CHANGENAME(state, payload) {
        //     state.form.name = payload
        // },
        CHANGEFORM(state, payload) {
            state.form = {
                name: payload.name,
                phone: payload.phone,
                email: payload.email,
                description: payload.description
            }
        },
        ADDPEDIDO(state, payload) {
            state.pedidos = [...state.pedidos, {
                id: 'pedido' + (state.pedidos.length + 1),
                name: payload.name,
                phone: payload.phone,
                email: payload.email,
                description: payload.description,
                toggle: '#pedido' + (state.pedidos.length + 1)
            }];
        }
    }
})

export default store;