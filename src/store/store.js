import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
    state() {
        return {
            pedidos: [{
                id: 'pedido1',
                name: 'Brandon',
                phone: '1234567890',
                email: 'brandon@correo.com',
                description: 'Con un mensaje de felicidades',
                toggle: '#pedido1',
                flavours: ['Chocolate', 'Fresa'],
                ornaments: ['Betún']
            },{
                id: 'pedido2',
                name: 'María',
                phone: '0987654321',
                email: 'maria@correo.com',
                description: 'Que el limón no este muy agrio',
                toggle: '#pedido2',
                flavours: ['Vainilla', 'Limón'],
                ornaments: ['Frutos']
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
                toggle: '#pedido' + (state.pedidos.length + 1),
                flavours: payload.flavours,
                ornaments: payload.ornaments
            }];
        }
    }
})

export default store;