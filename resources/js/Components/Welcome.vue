<script setup>

</script>
<template>
    <div>
        <div ref="div_tabla" class=" p-6 lg:p-8 bg-white border-b border-gray-200">
            <button @click="showModal = true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Nuevo Alquiler
            </button>
            <button v-show="selectedRowId != -1" @click="ShowModalEditarAndFillData()" 
                class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-2">
                Editar
            </button>
            <button v-show="selectedRowId != -1" @click="showModalEliminar = true"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2">
                Eliminar
            </button>
            <br> <br>
            <h3 style="font-weight: bold">Filtro</h3>
            <select v-model="filter_Empresa"
                    @change="filterByEmpresa()"
                                            class="block appearance-none w-1/5 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="id_empresa">
                                            <option value="0" selected>Todas las empresas</option>
                                            <option v-for="cliente in clientes" :value="cliente.id">{{ cliente.empresa }}
                                            </option>
                                        </select>
                                        <br>
            <DataTable :ref="tabla_unidadesxalquiler" :rows="unidadesxalquiler" @rowClicked="rowClickHandler" hoverable filter>
                <template #thead="{ sorting, sort }">
                    <table-head sortable="name" :sort="sort" multiple @sorting="sorting">
                        Nro
                    </table-head>
                    <table-head sortable="name" :sort="sort" multiple @sorting="sorting">
                        Nro. Alquiler
                    </table-head>
                    <table-head sortable="name" :sort="sort" multiple @sorting="sorting">
                        Código
                    </table-head>
                    <table-head sortable="name" :sort="sort" multiple @sorting="sorting">
                        Tipo UA
                    </table-head>
                    <table-head sortable="name" :sort="sort" multiple @sorting="sorting">
                        Marca
                    </table-head>
                    <table-head sortable="name" :sort="sort" multiple @sorting="sorting">
                        Procesador
                    </table-head>
                    <table-head sortable="name" :sort="sort" multiple @sorting="sorting">
                        Generación
                    </table-head>
                    <table-head sortable="name" :sort="sort" multiple @sorting="sorting">
                        Empresa
                    </table-head>
                    <table-head sortable="name" :sort="sort" multiple @sorting="sorting">
                        Asesor
                    </table-head>
                    <table-head sortable="name" :sort="sort" multiple @sorting="sorting">
                        Observación
                    </table-head>
                    <table-head sortable="name" :sort="sort" multiple @sorting="sorting">
                        Fecha Creación
                    </table-head>
                </template>
                <template #tbody="{ row }">
                    <table-body class='row_id' v-text="row.id" />
                    <table-body v-text="row.alquiler.id" />
                    <table-body v-text="row.unidad_de_alquiler.codigo" />
                    <table-body v-text="row.unidad_de_alquiler.tipo_ua" />
                    <table-body v-text="row.unidad_de_alquiler.marca" />
                    <table-body v-text="row.unidad_de_alquiler.procesador" />
                    <table-body v-text="row.unidad_de_alquiler.generacion" />
                    <table-body v-text="row.alquiler.empresa.empresa" />
                    <table-body v-text="row.alquiler.asesor.nombre" />
                    <table-body v-text="row.alquiler.observaciones" />
                    <table-body v-text="formattedDate(row.alquiler.created_at)" />

                </template>
            </DataTable>
        </div>
        <!-- Modal CREAR-->
        <div class="fixed z-10 inset-0 overflow-y-auto" v-if="showModal">
            <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <h2>Crear Alquiler</h2> 
                        <form class="w-full max-w-lg">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="id_empresa">
                                        CLIENTE
                                    </label>
                                    <div class="relative">
                                        <select v-model="createFormContent.id_empresa"
                                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="id_empresa">
                                            <option value="0" selected disabled>Seleccione un Cliente</option>
                                            <option v-for="cliente in clientes" :value="cliente.id">{{ cliente.empresa }}
                                            </option>
                                        </select>
                                        <div
                                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="id_asesor">
                                        ASESOR
                                    </label>
                                    <div class="relative">
                                        <select v-model="createFormContent.id_asesor"
                                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="id_asesor">
                                            <option value="0" selected disabled>Seleccione un Asesor</option>
                                            <option v-for="asesor in asesores" :value="asesor.id">{{ asesor.nombre }}
                                            </option>
                                        </select>
                                        <div
                                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block text-gray-700 font-bold mb-2" for="fecha_inicio">
                                        Fecha de inicio
                                    </label>
                                    <input v-model="createFormContent.fecha_inicio"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="fecha_inicio" type="date" placeholder="Fecha de inicio">
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block text-gray-700 font-bold mb-2" for="fecha_fin">
                                        Fecha de fin
                                    </label>
                                    <input v-model="createFormContent.fecha_fin"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="fecha_fin" type="date" placeholder="Fecha de fin">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-12">
                                <div class="w-full md:w-full px-3 mb-12 md:mb-0">
                                    <label class="block text-gray-700 font-bold mb-2" for="fecha_inicio">
                                        Observaciones
                                    </label>
                                    <input v-model="createFormContent.observaciones"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="fecha_inicio" type="text" placeholder="Observaciones">
                                </div>

                            </div>
                            <div class="flex flex-wrap -mx-3 mb-12">
                                <div class="w-full md:w-full px-3 mb-12 md:mb-0">
                                    <label class="block text-gray-700 font-bold mb-2" for="fecha_inicio">
                                        Unidades de Alquiler
                                    </label>
                                    <Multiselect v-model="valueMS" mode="tags" :close-on-select="false" :searchable="true"
                                        :create-option="true" :options="optionsMS" />
                                </div>

                            </div>

                        </form>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" @click="onAlquilerCreate"
                            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Enviar
                        </button>
                        <button type="button" @click="showModal = false"
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal EDITAR-->
        <div class="fixed z-10 inset-0 overflow-y-auto" v-if="showModalEditar">
            <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <h2>Editar Alquiler</h2> 
                        <form class="w-full max-w-lg">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="id_empresa">
                                        CLIENTE
                                    </label>
                                    <div class="relative">
                                        <select v-model="updateFormContent.id_empresa"
                                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="id_empresa">
                                            <option value="0" selected disabled>Seleccione un Cliente</option>
                                            <option v-for="cliente in clientes" :value="cliente.id">{{ cliente.empresa }}
                                            </option>
                                        </select>
                                        <div
                                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="id_asesor">
                                        ASESOR
                                    </label>
                                    <div class="relative">
                                        <select v-model="updateFormContent.id_asesor"
                                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="id_asesor">
                                            <option value="0" selected disabled>Seleccione un Asesor</option>
                                            <option v-for="asesor in asesores" :value="asesor.id">{{ asesor.nombre }}
                                            </option>
                                        </select>
                                        <div
                                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block text-gray-700 font-bold mb-2" for="fecha_inicio">
                                        Fecha de inicio
                                    </label>
                                    <input v-model="updateFormContent.fecha_inicio"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="fecha_inicio" type="date" placeholder="Fecha de inicio">
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block text-gray-700 font-bold mb-2" for="fecha_fin">
                                        Fecha de fin
                                    </label>
                                    <input v-model="updateFormContent.fecha_fin"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="fecha_fin" type="date" placeholder="Fecha de fin">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-12">
                                <div class="w-full md:w-full px-3 mb-12 md:mb-0">
                                    <label class="block text-gray-700 font-bold mb-2" for="fecha_inicio">
                                        Observaciones
                                    </label>
                                    <input v-model="updateFormContent.observaciones"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="fecha_inicio" type="text" placeholder="Observaciones">
                                </div>

                            </div>
                            <div class="flex flex-wrap -mx-3 mb-12">
                                <div class="w-full md:w-full px-3 mb-12 md:mb-0">
                                    <label class="block text-gray-700 font-bold mb-2" for="fecha_inicio">
                                        Unidades de Alquiler
                                    </label>
                                    <Multiselect v-model="selectUnidadesEditModal" mode="tags" :close-on-select="false" :searchable="true"
                                        :create-option="true" :options="optionsMS" />
                                </div>

                            </div>

                        </form>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" @click="onAlquilerUpdate"
                            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Enviar
                        </button>
                        <button type="button" @click="showModalEditar = false"
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal ELIMINAR-->
        <div class="fixed z-10 inset-0 overflow-y-auto" v-if="showModalEliminar">
            <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <h2>¿Desea eliminar el alquiler?Se eliminarán todos los equipos asociados</h2>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" @click="onAlquilerDelete"
                            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Aceptar
                        </button>
                        <button type="button" @click="showModalEliminar = false"
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
import "@jobinsjp/vue3-datatable/dist/style.css"
import { DataTable, TableBody, TableHead, } from "@jobinsjp/vue3-datatable"
import Multiselect from '@vueform/multiselect'
export default {
    components: {
        DataTable,
        TableBody,
        TableHead,
        Multiselect,
    },
    data() {
        return {
            unidadesxalquiler: [],
            clientes: [],
            asesores: [],
            showModal: false,
            createFormContent: {
                id_empresa: '0',
                id_asesor: '0',
                fecha_inicio: '',
                fecha_fin: '',
                observaciones: '',
            },
            updateFormContent: {
                id_empresa: '0',
                id_asesor: '0',
                fecha_inicio: '',
                fecha_fin: '',
                observaciones: '',
            },
            selectedRowId: -1,
            selectedAlquilerId: -1,
            valueMS: null,
            selectUnidadesEditModal: [],
            optionsMS: [],
            showModalEliminar: false,
            showModalEditar: false,
            filter_Empresa: 0,
            
        }
    },
    setup() {

    },
    mounted() {
        this.getAlquileres();
    },
    methods: {
        filterByEmpresa() {
            if (this.filter_Empresa == 0) {
                this.getAlquileres();
            } else {
                this.getAlquileresByEmpresa();
            }
        },
        getAlquileresByEmpresa() {
            console.log("el id de la empresa es " + this.filter_Empresa)
            axios.post('/alquileres_por_empresa', {
                    id_empresa: this.filter_Empresa
                })
                .then(response => {
                    console.log('response.data',response.data);
                    this.unidadesxalquiler = response.data.unidadesByEmpresa;
                    
                })
                .catch(error => {
                    console.log(error);
                });
        },
        ShowModalEditarAndFillData() {
            this.showModalEditar = true;
            console.log("el id de la fila es " + this.selectedRowId);
            let selectedAlquiler = this.unidadesxalquiler.filter((unidad) => unidad.id == this.selectedRowId);
            console.log(selectedAlquiler)
            this.updateFormContent.id_empresa = selectedAlquiler[0].alquiler.empresa.id;
            this.updateFormContent.id_asesor = selectedAlquiler[0].alquiler.asesor.id;
            this.updateFormContent.fecha_inicio = selectedAlquiler[0].alquiler.fecha_inicio;
            this.updateFormContent.fecha_fin = selectedAlquiler[0].alquiler.fecha_fin;
            this.updateFormContent.observaciones = selectedAlquiler[0].alquiler.observaciones;
            let unidadesThisAlquiler  = this.unidadesxalquiler.filter((unidad) => unidad.id_alquiler == this.selectedAlquilerId);
            console.log(unidadesThisAlquiler);
            this.selectUnidadesEditModal = unidadesThisAlquiler.map((unidad) => unidad.id_laptop);
        },
        formattedDate(date) {
            return moment(date).format('DD-MM-YYYY');
        },
        onAlquilerCreate() {
            axios.post('/crear_alquiler', {
                id_empresa: this.createFormContent.id_empresa,
                id_asesor: this.createFormContent.id_asesor,
                fecha_inicio: this.createFormContent.fecha_inicio,
                fecha_fin: this.createFormContent.fecha_fin,
                observaciones: this.createFormContent.observaciones,
                id_unidadesDeAlquiler: this.valueMS
            })
                .then(response => {
                    // Manejar la respuesta del servidor aquí

                    this.showModal = false;
                    this.createFormContent.id_empresa = '0';
                    this.createFormContent.id_asesor = '0';
                    this.createFormContent.fecha_inicio = '';
                    this.createFormContent.fecha_fin = '';
                    this.createFormContent.observaciones = '';
                    this.filter_Empresa = 0;
                    this.getAlquileres();
                })
                .catch(error => {
                    // Manejar el error aquí
                    console.log(error);
                });
        },
        onAlquilerDelete() {
            axios.post('/eliminar_alquiler', {
                id: this.selectedAlquilerId
            })
                .then(response => {
                    // Manejar la respuesta del servidor aquí

                    this.showModalEliminar = false;
                    this.filter_Empresa = 0;
                    this.getAlquileres();
                })
                .catch(error => {
                    // Manejar el error aquí
                    console.log(error);
                });
        },
        rowClickHandler(row) {
            this.selectedRowId = row.id;
            this.selectedAlquilerId = row.alquiler.id;
            const rows = this.$el.querySelectorAll('.row_id');
            let selectedTr = null;
            rows.forEach((elemento) => {
                elemento.parentNode.classList.remove('selected');
                if (elemento.innerText == this.selectedRowId) {
                    selectedTr = elemento.parentNode;
                }
            });
            selectedTr.classList.add('selected');
        },
        getAlquileres(){
            axios.get('/alquileres')
            .then(response => {
                this.unidadesxalquiler = response.data.unidadesxalquiler;
                this.clientes = response.data.clientes;
                this.asesores = response.data.asesores;
                this.optionsMS = [];
                response.data.unidadesDeAlquiler.forEach(element => {
                    this.optionsMS.push({ value: element.id, label: element.codigo });
                });
            })
            .catch(error => console.log(error));
        },
        onAlquilerUpdate() {
            axios.post('/actualizar_alquiler', {
                id: this.selectedAlquilerId,
                id_empresa: this.updateFormContent.id_empresa,
                id_asesor: this.updateFormContent.id_asesor,
                fecha_inicio: this.updateFormContent.fecha_inicio,
                fecha_fin: this.updateFormContent.fecha_fin,
                observaciones: this.updateFormContent.observaciones,
                id_unidadesDeAlquiler: this.selectUnidadesEditModal
            })
                .then(response => {
                    // Manejar la respuesta del servidor aquí

                    this.showModalEditar = false;
                    this.updateFormContent.id_empresa = '0';
                    this.updateFormContent.id_asesor = '0';
                    this.updateFormContent.fecha_inicio = '';
                    this.updateFormContent.fecha_fin = '';
                    this.updateFormContent.observaciones = '';
                    this.filter_Empresa = 0;
                    this.getAlquileres();
                })
                .catch(error => {
                    // Manejar el error aquí
                    console.log(error);
                });
        },

    },
    computed: {

    }
}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.selected {
    background-color: #43e9cd;
    /* color de fondo de la fila seleccionada */
}
.hover\:dt-bg-gray-100:hover{
    background-color: #43e9cd;
    color:white;
    /* color de fondo de la fila seleccionada */
}
</style>