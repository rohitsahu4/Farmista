import {db,firebase} from "@/scripts/firebase"
export default{
    namespaced:true,
    state:{
        articalList:[],
        artical:[],
    },
    mutations:{
        setarticalList(state,payload){
            state.articalList=payload
        },
        setartical(state,payload){
            state.artical=payload
        }
    },
    actions:{
        getArtical({commit},payload){
            db.collection("/articals").doc(payload).get().then(res=>{
                commit("setartical",res.data())
            })
        },
        getList({commit},payload){
      
        db.collection("/articals").where("cat","==",payload).get().then(res=>{
            var list=[]
            res.docs.forEach(element => {
                list.push({...element.data(),...{id:element.id}})
            });
            commit("setarticalList", list)
        })
        }
    },
    getters:{
        getList(state){
            console.log(state.articalList)
            return state.articalList
        },
        getArtical(state){
            return state.artical
        }
    }
}