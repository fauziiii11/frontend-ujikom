import axios from "axios";

const user = {
    namespaced: true,
    state: {
        userData: [],
        posts: [],
        editedUser: null,
    },
    getters:{
        getUser: (state) => state.userData,
        postUsers: (state) => state.posts,
        getEditedUser: (state) => state.editedUser,
    },
    actions: {
        async fetchUser({ commit }) {
            try {
                const data = await axios.get('http://localhost:8080/api/v1/user/',
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                }
                );
                console.log(data.data)
                commit("SET_USER", data.data['data']);
        } catch (error) {
            alert(error);
            console.log(error);
        }
    },
    async fetchUseme({ commit }) {
        try {
            const data = await axios.get('http://localhost:8080/api/v1/user/me',
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }
            );
            console.log(data.data)
            commit("SET_USER_ME", data.data['data']);
    } catch (error) {
        alert(error);
        console.log(error);
    }
},
async deletePost({ commit }, postId) {
    try {
        const respons = await axios.delete(`http://localhost:8080/api/v1/user/${postId}`);
        console.log(respons);
        return respons.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
},
async saveEditedUser({ commit }, {id, editedUser}) {
    try {
        const respons = await axios.put(`http://localhost:8080/api/v1/user/update/${id}`, editedUser);
        console.log(respons);
        return respons.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
},
},
 mutations: {
    SET_USER(state, user) {
        state.userData = user;
    },
    SET_USER_ME(state, user) {
        state.userData = user;
    },
    removePost: (state, postId) => {
        state.posts = state.posts.filter(post => post.id !== postId);
    },
    setEditedUserData: (state, user) => {
        state.editedUser = user;
    },
    updateEditedUser: (state, editedUser) => {
        const index = state.data.findIndex(user => user.id === editedUser.id);
        if (index !== -1) {
            state.data[index] = editedUser;
        }
        state.editedUser = null;
    },
 },
};
export default user;