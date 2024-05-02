import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../components/Login.vue'
import RegisterView from '../components/Register.vue'
import Navbar from '../components/Navbar.vue'
// import Dashboard from '../components/Dashboard.vue'
import PengeluaranView from '../views/PengeluaranView.vue'
import PemasukanView from '../views/PemasukanView.vue'
import KeluargaView from '../views/KeluargaView.vue'
import ProfilView from '../views/ProfilView.vue'   
import DetailPengeluaranView from '../views/DetailPengeluaranView.vue'
import DetailPemasukanView from '../views/DetailPemasukanView.vue'
import SaldoView from '../views/SaldoView.vue'
import HomeLoginView from '../views/HomeLoginView.vue'
import layoutuser from '../layout/layoutuser.vue';
import LayoutAdmin from '../layout/layoutadmin.vue';
import PenggunaView from '../views/admin/PenggunaView.vue';
import EditUserView from '@/views/EditUserView.vue'
// import EditUserView from '../views/admin/';
function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
if(localStorage.getItem('token'))
  isAuthenticated = true;
 else
  isAuthenticated= false;
 if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/login'); // go to '/login';
 }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/saldo',
      name: 'layoutuser',  
      component: layoutuser,
      children: [
        {
          path: '/home',
          name: 'PengeluaranView',
          component: PengeluaranView
        },
        {
          path: '/saldo',
          name: 'saldo',
          beforeEnter : guardMyroute,
          component: SaldoView
        },
        {
          path: '/pemasukan',
          name: 'pemasukan',
          beforeEnter : guardMyroute,
          component: PemasukanView
        },
        {
          path: '/pengeluaran',
          name: 'pengeluaran',
          beforeEnter : guardMyroute,
          component: PengeluaranView
        },
        {
          path: '/keluarga',
          name: 'keluarga',
          beforeEnter : guardMyroute,
          component: KeluargaView
        },
        {
          path: '/detailpengeluaran',
          name: 'detailpengeluaran',
          beforeEnter : guardMyroute,
          component: DetailPengeluaranView
        },
        {
          path: '/detailpemasukan',
          name: 'detailpemasukan',
          beforeEnter : guardMyroute,
          component: DetailPemasukanView
        },
        {
          path: '/profil',
          name: 'profil',
          beforeEnter : guardMyroute,
          component: ProfilView
        },
        // {
        //   path: '/admin/user',
        //   name: 'tabuser',
        //   component: tabuser
        // },
        
      ]
    },
    {
      path: '/',
      name: 'home',
      component: HomeLoginView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/homelogin',
      name: 'homelogin',
      component: HomeLoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: Navbar
    },
    
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   beforeEnter : guardMyroute,
    //   component: Dashboard
    // },
    
    
    {
      path: '/admin',
      name: 'LayoutAdmin',  
      component: LayoutAdmin,
      children: [
        {
          path: '/admin',
          name: 'ProfilView',
          beforeEnter : guardMyroute,
          component: ProfilView
        },
        {
          path: '/admin/profil',
          name: 'ProfilView',
          beforeEnter : guardMyroute,
          component: ProfilView
        },
        {
          path: '/admin/pengguna',
          name: 'PenggunaView',
          beforeEnter : guardMyroute,
          component: PenggunaView
        },
        {
          path: '/edituser/:id',
          name: 'edituser',
          beforeEnter : guardMyroute,
          component: EditUserView
        },
        // {
        //   path: '/admin/edituser/:id',
        //   name: 'EditUserView',
        //   beforeEnter : guardMyroute,
        //   component: EditUserView
        // },
        // {
        //   path: '/admin/user',
        //   name: 'tabuser',
        //   component: tabuser
        // },
        
      ]
    },
    
  ],
});

export default router
