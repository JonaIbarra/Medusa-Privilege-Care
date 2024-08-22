<template>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-300 table-hover">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-xs leading-normal">
            <th class="w-1/12 py-3 px-6 text-left">ID</th>
            <th class="w-1/4 py-3 px-6 text-left">Nombre</th>
            <th class="w-1/3 py-3 px-6 text-left">Descripción</th>
            <th class="w-1/6 py-3 px-6 text-left">Estatus</th>
            <th class="w-1/6 py-3 px-6 text-left">Fecha Registro</th>
            <th class="w-1/6 py-3 px-6 text-left">Fecha Actualización</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-xs font-light">
          <tr v-for="item in data" :key="item.ID" class="text-center">
            <td class="py-3 px-6 border-b border-gray-200">{{ item.ID }}</td>
            <td class="py-3 px-6 border-b border-gray-200 truncate">{{ item.Nombre }}</td>
            <td class="py-3 px-6 border-b border-gray-200">{{ item.Descripcion }}</td>
            <td class="py-3 px-6 border-b border-gray-200">
              <span :class="{'bg-green-500': item.Estatus === 'Activo', 'bg-red-500': item.Estatus === 'Inactivo'}" class="text-white py-1 px-2 rounded-full text-xs">
                {{ item.Estatus }}
              </span>
            </td>
            <td class="py-3 px-6 border-b border-gray-200">{{ new Date(item.Fecha_Registro).toLocaleDateString() }}</td>
            <td class="py-3 px-6 border-b border-gray-200">{{ new Date(item.Fecha_Actualizacion).toLocaleDateString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        data: [],
        token: 'your-token-here'
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        axios.get('https://privilegecare-deploy-gqmt.onrender.com/areas_medicas', {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        })
        .then(response => {
          this.data = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Añade estilos personalizados si es necesario */
  </style>
  