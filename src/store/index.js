import { createStore } from 'vuex';
import auth from './modules/auth';
import user from './modules/user';
import pemasukan from './modules/pemasukan';

const store = createStore({
    state: {
      isLoading: true,
    },
    modules: {
      auth,
      user,
      pemasukan
      
    },
  });
  
  export default store;