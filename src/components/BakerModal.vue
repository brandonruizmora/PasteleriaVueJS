<template>
    <div class="container rounded border border-dark my-5">
        <div class="row">
            <div class="col-12 my-5">
                <h2 class="text-center text-pink">Hola pastelero</h2>
            </div>
            <div class="col-12">
                <div class="row">
                    <div class="col-12 col-md-6 text-center">
                        <h3>Sabores restantes:</h3>
                        <p>
                            Chocolate:
                            <b>120</b>
                        </p>
                        <p>
                            Vainilla:
                            <b>127</b>
                        </p>
                        <p>
                            Limón:
                            <b>162</b>
                        </p>
                        <p>
                            Fresa:
                            <b>192</b>
                        </p>
                    </div>
                    <div class="col-12 col-md-6 text-center">
                        <h3>Adornos restantes:</h3>
                        <p>
                            Chocolate fundido
                            <b>59</b>
                        </p>
                        <p>
                            Glaseado
                            <b>20</b>
                        </p>
                        <p>
                            Betún
                            <b>87</b>
                        </p>
                        <p>
                            Frutos
                            <b>10</b>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div v-for="pedido in pedidos" v-bind:key="pedido.name">
                    <span>{{pedido.name}}</span>
                </div>
            </div>
            <div class="col-12">
                <div class="accordion" id="accordionBaker" v-for="pedido in pedidos" v-bind:key="pedido.id">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                v-bind:data-bs-target="pedido.toggle"
                            >Pedido {{pedido.name}}</button>
                        </h2>
                        <div
                            v-bind:id="pedido.id"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#accordionBaker"
                        >
                            <div class="accordion-body">
                                <p>
                                    <b>Nombre:</b> {{pedido.name}}
                                    <br />
                                    <b>Teléfono:</b> {{pedido.phone}}
                                    <br />
                                    <b>Correo:</b> {{pedido.email}}
                                    <br />
                                    <b>Descripción:</b> {{pedido.description}}
                                    <br />
                                    <b>Sabores:</b> Chocolate y Fresa.
                                    <br />
                                    <b>Adornos:</b> Betún
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {

        const store = useStore();

        const pedidos = computed(() => store.state.pedidos);

        return {
            pedidos
        }
    }
}
</script>