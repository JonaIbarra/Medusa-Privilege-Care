import { createRouter, createWebHistory } from 'vue-router';
import RegisterUser from '@/components/registerUser.vue';
import LoginView from '@/components/login.vue';
import DashboardView from '@/components/dashboard.vue';
import PersonasView from '@/components/personas.vue';
import UsuarioView from '@/components/usuario.vue';
import ResultadosEstudioView from '@/components/resultadosEstudio.vue';
import EstudioView from '@/components/estudio.vue';
import TablaResutadoEstudioView from '@/components/tablaResultadoEstudio.vue';
import TablaEstudiosView from '@/components/tablaEstudios.vue';
import PiePaginaView from '@/components/pie-pagina.vue';
import AprobacionSM from '../components/DireccionGeneral/AprobacionSM.vue';
import UsuarioRoles from '@/components/DireccionGeneral/UsuarioRoles.vue';
import Roles from '@/components/DireccionGeneral/Roles.vue';
import Bitacora from '@/components/DireccionGeneral/Bitacora.vue';
import RolesModal from '@/components/DireccionGeneral/RolesModal.vue';
import AprobacionModal from '@/components/DireccionGeneral/AprobacionModal.vue';
import UsuarioRolesModal from '@/components/DireccionGeneral/UsuarioRolesModal.vue';
import GraficosDireccionG from '../components/DireccionGeneral/GraficosDireccionG.vue';
import GrficoApro from '@/components/DireccionGeneral/GraficosDG/GrficoApro.vue';
import GrficoRoles from '@/components/DireccionGeneral/GraficosDG/GrficoRoles.vue'
// Recursos Humanos
import PersonalMedico from '@/components/RecursosHumanos/PersonalMedico.vue';
import DashboardPesonalMedico from  '@/components/RecursosHumanos/DashboardPersonalMedico.vue';
import AreasMedicas from '@/components/RecursosHumanos/AreasMedicas.vue'
import Puestos from '@/components/RecursosHumanos/Puesto.vue'
import PuestosDepartamentos from '@/components/RecursosHumanos/PuestosDepartamentos.vue'

const roleMap = {
  1: 'Administrativo',
  8: 'Direccion General',
  9: 'Paciente',
  10: 'Médico General',
  11: 'Médico Especialista',
  12: 'Enfermero',
  13: 'Familiar del Paciente',
  14: 'Medico Forence',
  15: 'Recursos Humanos',
  16: 'Farmacia',
  17: 'Trasplantes',
  18: 'Programacion Quirurgica',
  19: 'Estudios',
  20: 'Registros Médicos',
  21: 'Pediatría',
  22: 'Radiologia',
  // Añade más roles según sea necesario
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      children: [
        {
          path: 'personas',
          name: 'personas',
          component: PersonasView,
          meta: { requiresRole: ['Administrativo', 'Direccion General'] }
        },
        {
          path: 'usuario',
          name: 'usuario',
          component: UsuarioView,
          meta: { requiresRole: ['Direccion General'] }
        },
        {
          path: 'resultadosEstudio',
          name: 'resultadosEstudio',
          component: ResultadosEstudioView,
          meta: { requiresRole: ['Medico General', 'Medico Especialista'] }
        },
        {
          path: 'tablaResultadoEstudio',
          name: 'tablaResultadoEstudio',
          component: TablaResutadoEstudioView,
          meta: { requiresRole: ['Medico General', 'Medico Especialista'] }
        },
        {
          path: 'estudio',
          name: 'estudio',
          component: EstudioView,
          meta: { requiresRole: ['Medico General', 'Medico Especialista'] }
        },
        {
          path: 'tablaEstudios',
          name: 'tablaEstudios',
          component: TablaEstudiosView,
          meta: { requiresRole: ['Medico General', 'Medico Especialista'] }
        },
        {
          path: 'pie-pagina',
          name: 'piePagina',
          component: PiePaginaView
        },
        {
          path: '/aprobacionSM',
          name: 'aprobacionSM',
          component: AprobacionSM,
          meta: { requiresRole: ['Direccion General', 'Recursos Humanos'] }
        },
        {
          path: '/usuarioRoles',
          name: 'usuarioRoles',
          component: UsuarioRoles,
          meta: { requiresRole: ['Direccion General'] }
        },
        {
          path: '/roles',
          name: 'roles',
          component: Roles,
          meta: { requiresRole: ['Direccion General'] }
        },
        {
          path: '/rolesModal',
          name: 'rolesModal',
          component: RolesModal,
          meta: { requiresRole: ['Direccion General'] }
        },
        {
          path: '/aprobacionModal',
          name: 'aprobacionModal',
          component: AprobacionModal,
          meta: { requiresRole: ['Direccion General'] }
        },
        {
          path: '/usuarioRolesModal',
          name: 'usuarioRolesModal',
          component: UsuarioRolesModal,
          meta: { requiresRole: ['Direccion General'] }
        },
        {
          path: '/gradicosDG',
          name: 'graficosDG',
          component: GraficosDireccionG,
          meta: { requiresRole: ['Direccion General'] }
        },
        {
          path: '/grafApro',
          name: 'grafApro',
          component: GrficoApro,
          meta: { requiresRole: ['Direccion General'] }
        },
        {
          path: '/grafRoles',
          name: 'grafRoles',
          component: GrficoRoles,
          meta: { requiresRole: ['Direccion General'] }
        },
        {
          path: '/bitacora',
          name: 'bitacora',
          component: Bitacora,
          meta: { requiresRole: ['Direccion General'] }
        },


        // Recursos Humanos
        {
          path: '/personalMedico',
          name: 'personalMedico',
          component: PersonalMedico,
          // meta: { requiresRole: ['Direccion General, Administrativo'] }
        },
        {
          path: '/dashboardPersonal',
          name: 'dashboardPersonal',
          component: DashboardPesonalMedico,
          // meta: { requiresRole: ['Direccion General, Administrativo'] }
        },
        {
          path: '/areasMedicas',
          name: 'areasMedicas',
          component: AreasMedicas,
          // meta: { requiresRole: ['Direccion General, Administrativo'] }
        },
        {
          path: '/puestos',
          name: 'puestos',
          component: Puestos,
          // meta: { requiresRole: ['Direccion General, Administrativo'] }
        },
        {
          path: '/puestosDepartamentos',
          name: 'puestosDepartamentos',
          component: PuestosDepartamentos,
          // meta: { requiresRole: ['Direccion General, Administrativo'] }
        },
      ]
    }
  ]
});

// Guardias de navegación para verificar el rol del usuario
router.beforeEach((to, from, next) => {
  const userRoleId = localStorage.getItem('role');  // Obtén el rol como número
  const userRole = roleMap[userRoleId];  // Convierte el número a nombre usando el mapa
  
  if (to.meta.requiresRole && userRole) {
    if (to.meta.requiresRole.includes(userRole)) {
      next();
    } else {
      alert("Rol Sin Privilegios");  // Muestra un mensaje de alerta
      next({ name: 'login' });  // Redirige al login si el rol no es adecuado
      
    }
  } else {
    next();
  }
});

export default router;
