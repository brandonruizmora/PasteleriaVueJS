<template>
    <div class="container rounded border border-dark my-5">
        <div class="row">
            <div class="col-12 my-5">
                <h2>Crea tu pastel favorito</h2>
                <form v-on:submit="changeForm">
                    <div class="mb-3">
                        <label class="form-label">Nombre</label>
                        <!-- <input type="text" class="form-control" v-bind:value="name" v-on:change="changeValueName" /> -->
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            v-bind:value="name"
                            autocomplete="off"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Teléfono</label>
                        <input
                            type="text"
                            class="form-control"
                            id="phone"
                            v-bind:value="phone"
                            autocomplete="off"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Correo Electrónico</label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            v-bind:value="email"
                            autocomplete="off"
                            required
                        />
                        <div class="form-text">No se compartira con nadie</div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Descripción general</label>
                        <div class="form-floating">
                            <input
                                type="text"
                                class="form-control"
                                id="description"
                                placeholder="Leave a comment here"
                                style="height: 100px"
                                v-bind:value="description"
                                autocomplete="off"
                            />
                            <label for="floatingTextarea2">Escribe tus deseos...</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <h3>Elija sus sabores preferidos:</h3>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="saborChocolate" />
                                <label class="form-check-label">Chocolate</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="saborVainilla" />
                                <label class="form-check-label">Vainilla</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="saborLimon" />
                                <label class="form-check-label">Limón</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="saborFresa" />
                                <label class="form-check-label">Fresa</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <h3>Elija sus adornos preferidos:</h3>
                            <div class="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="decoradoChocolate"
                                />
                                <label class="form-check-label">Chocolate fundido</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="decoradoGlaseado"
                                />
                                <label class="form-check-label">Glaseado</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="decoradoBetun" />
                                <label class="form-check-label">Betún</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="decoradoFrutos" />
                                <label class="form-check-label">Frutos</label>
                            </div>
                        </div>
                    </div>
                    <div class="my-5 d-flex justify-content-center">
                        <button type="submit" class="mx-auto btn bg-pink text-white">Enviar</button>
                    </div>
                </form>
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

        const name = computed(() => store.state.form.name);
        const phone = computed(() => store.state.form.phone);
        const email = computed(() => store.state.form.email);
        const description = computed(() => store.state.form.description);

        // const changeValueName = (e) => {
        //     store.commit('CHANGENAME', e.target.value);
        // }

        const changeForm = (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.toLowerCase();
            const phone = document.getElementById('phone').value.toLowerCase();
            const email = document.getElementById('email').value.toLowerCase();
            const description = document.getElementById('description').value.toLowerCase();

            const sabores = [];

            const saborChocolate = document.getElementById('saborChocolate').checked;
            if (saborChocolate === true) {
                sabores.push('Chocolate');
            }

            const saborVainilla = document.getElementById('saborVainilla').checked;
            if (saborVainilla === true) {
                sabores.push('Vainilla');
            }

            const saborLimon = document.getElementById('saborLimon').checked;
            if (saborLimon === true) {
                sabores.push('Limón');
            }

            const saborFresa = document.getElementById('saborFresa').checked;
            if (saborFresa === true) {
                sabores.push('Fresa');
            }

            const decorado = [];

            const decoradoChocolate = document.getElementById('decoradoChocolate').checked;
            if (decoradoChocolate === true) {
                decorado.push('Chocolate fundido');
            }

            const decoradoGlaseado = document.getElementById('decoradoGlaseado').checked;
            if (decoradoGlaseado === true) {
                decorado.push('Glaseado');
            }

            const decoradoBetun = document.getElementById('decoradoBetun').checked;
            if (decoradoBetun === true) {
                decorado.push('Betún');
            }

            const decoradoFrutos = document.getElementById('decoradoFrutos').checked;
            if (decoradoFrutos === true) {
                decorado.push('Frutos');
            }

            if (sabores.length > 0 && decorado.length > 0) {
                store.commit('ADDPEDIDO', {
                    name: name,
                    phone: phone,
                    email: email,
                    description: description,
                    flavours: sabores,
                    ornaments: decorado
                });
                document.getElementById('name').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('email').value = '';
                document.getElementById('description').value = '';
                document.getElementById('saborChocolate').checked = false;
                document.getElementById('saborVainilla').checked = false;
                document.getElementById('saborLimon').checked = false;
                document.getElementById('saborFresa').checked = false;
                document.getElementById('decoradoChocolate').checked = false;
                document.getElementById('decoradoGlaseado').checked = false;
                document.getElementById('decoradoBetun').checked = false;
                document.getElementById('decoradoFrutos').checked = false;
                alert('Se agrego su pedido a la lista de ordenes, su número de orden es: 495939294');
            } else {
                alert('Debes seleccionar al menos 1 sabor y 1 decoración');
            }

        }
        return {
            name,
            phone,
            email,
            description,
            // changeValueName,
            changeForm

        }
    }
}
</script>