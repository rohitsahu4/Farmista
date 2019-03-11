import { firebase, db } from "@/scripts/firebase";

export default {
  namespaced: true,
  state: {
    userExists: { no: false },
    user: JSON.parse(localStorage.getItem("gramiksha-udaan:user")),
    isSignedUp: false,
    userDetails: JSON.parse(
      localStorage.getItem("gramiksha-udaan:userDetails")
    ),
    isSignedIn: localStorage.getItem("gramiksha-udaan:signedIn") === "true",
    SignedUpUser: null,
    loading: false,
    error: null,
    accessLevel: localStorage.getItem("gramiksha-udaan:accessLevel")
  },
  mutations: {
    SetuserStatus(state,payload){
        state.isSignedIn=payload
    },
    setUser(state, payload) {
      state.user = payload;
      localStorage.setItem("gramiksha-udaan:user", JSON.stringify(payload));
    },
    setUserExists(state, payload) {
      state.userExist = payload;
    },
    setSignedUp(state, payload) {
      state.isSignedUp = payload;
    },
    setSignedIn(state, payload) {
      state.isSignedIn = payload;
      localStorage.setItem("gramiksha-udaan:signedIn", payload);
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    SignUserIn({ commit, dispatch }, payload) {
      commit("setLoading", true);
      commit("clearError");
     
        firebase
          .auth()
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then(function(user) {
                    commit("setUser", user.user);
                    commit("setLoading", false);
                    commit("setSignedIn", true);
                
          })
          .catch(error => {
            commit("setLoading", false);
            commit("setError", error);
          });
     
    },
    SignUserup({ commit, dispatch }, payload) {
      commit("setLoading", true);
      commit("clearError");
      console.log("aas")
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(function(user) {
              commit("setLoading", false);
              commit("setUser", user.user);                
              commit("setSignedUp", true);
              commit("setSignedIn", true);
            
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
        });
    },
    async logout({ commit }) {
      await firebase
        .auth()
        .signOut()
        .then(function() {
          commit("setUser", null);
          commit("setLoading", false);
          commit("setSignedIn", false);
          commit("setSignedUp", false);
          
        });
    },
    clearError({ commit }) {
      commit("clearError");
    },
    SetuserStatus({commit},payload){
      commit("SetuserStatus",payload.status)
    }
  },
  getters: {
    getUserExists(state) {
      return state.userExists;
    },
    getIsSignedUp(state) {
      return state.isSignedUp;
    },
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
    getUser(state) {
      return state.user;
    },
    getIsSignedIn(state) {
      return state.isSignedIn;
    },
    getAccessLevel(state) {
      return state.accessLevel;
    }
  }
};
