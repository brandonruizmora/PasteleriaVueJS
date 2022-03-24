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
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >Pedido #1</button>
                        </h2>
                        <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div class="accordion-body">
                                <p>
                                    <b>Nombre:</b> Juan Francisco
                                    <br />
                                    <b>Teléfono:</b> 4567845678
                                    <br />
                                    <b>Correo:</b> juan.fran@correo.com
                                    <br />
                                    <b>Descripción:</b> Con ojuelas de maiz porfavor.
                                    <br />
                                    <b>Sabores:</b> Chocolate y Fresa.
                                    <br />
                                    <b>Adornos:</b> Betún
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >Pedido #2</button>
                        </h2>
                        <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div class="accordion-body">
                                <p>
                                    <b>Nombre:</b> Diego Ortiz
                                    <br />
                                    <b>Teléfono:</b> 4567845678
                                    <br />
                                    <b>Correo:</b> die.ort@correo.com
                                    <br />
                                    <b>Descripción:</b> Con splenda en lugar de azucar.
                                    <br />
                                    <b>Sabores:</b> Limón
                                    <br />
                                    <b>Adornos:</b> Frutos
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >Pedido #3</button>
                        </h2>
                        <div
                            id="collapseThree"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div class="accordion-body">
                                <p>
                                    <b>Nombre:</b> Juan Perez
                                    <br />
                                    <b>Teléfono:</b> 4567845678
                                    <br />
                                    <b>Correo:</b> juan.prz@correo.com
                                    <br />
                                    <b>Descripción:</b>
                                    <br />
                                    <b>Sabores:</b> Vainilla
                                    <br />
                                    <b>Adornos:</b> Frutos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>