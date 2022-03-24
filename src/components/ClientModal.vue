<template>
    <div class="container rounded border border-dark my-5">
        <div class="row">
            <div class="col-12 my-5">
                <h2>Crea tu pastel favorito</h2>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Nombre</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Teléfono</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Correo Electrónico</label>
                        <input type="email" class="form-control" />
                        <div class="form-text">No se compartira con nadie</div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Descripción general</label>
                        <div class="form-floating">
                            <textarea
                                class="form-control"
                                placeholder="Leave a comment here"
                                id="floatingTextarea2"
                                style="height: 100px"
                            ></textarea>
                            <label for="floatingTextarea2">Escribe tus deseos...</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <h3>Elija sus sabores preferidos:</h3>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" />
                                <label class="form-check-label">Chocolate</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" />
                                <label class="form-check-label">Vainilla</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" />
                                <label class="form-check-label">Limón</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" />
                                <label class="form-check-label">Fresa</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <h3>Elija sus adornos preferidos:</h3>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" />
                                <label class="form-check-label">Chocolate fundido</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" />
                                <label class="form-check-label">Glaseado</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" />
                                <label class="form-check-label">Betún</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" />
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