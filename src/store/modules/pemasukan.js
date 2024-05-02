import axios from 'axios';

const pemasukan = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    // Tambahkan atribut role
    role: '', // Tambahkan atribut role dengan nilai awal kosong
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    // Getter untuk mendapatkan peran pengguna
    userRole: (state) => state.role, // Getter untuk mendapatkan peran pengguna
  },
  actions: {
    async pemasukan({ commit }, credentials) {
      try {
        const response = await axios.post(
          'http://localhost:8080/api/v1/pemasukan/',
          credentials
        );
        const token = response.data.token;
        
        localStorage.setItem('token', token);

        commit('SET_TOKEN', token);
        commit('SET_LOGIN_ERROR', null); // Perbaiki agar tidak ada kesalahan yang dianggap tidak didefinisikan
        console.log("token saved:", token);
        return true;
      } catch (error) {
        const errorMessage = error.response.data.message || "Login failed";
        commit("SET_LOGIN_ERROR", errorMessage);
        console.error(error);
        return false;
      }
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    // Tambahkan mutasi untuk mengatur error login
    SET_LOGIN_ERROR(state, errorMessage) {
      state.loginError = errorMessage;
    },
  },
};

export default pemasukan; // Ganti nama ekspor menjadi 'pemasukan'
