import { firebase, db } from "@/scripts/firebase";


export default {
    namespaced:true,    
    state:{
        listOfItems:[],
        loading:false,
        CurrentItem:""
    },
    mutations:{
        setListOfItems(state,payload){
            state.listOfItems=payload

        },
        setLoading(state,payload){
            state.loading=payload
        },
        SetCurrentItem(state,payload){
            state.CurrentItem=payload
        }
    },
    actions:{
        getDetails({commit},payload){
            commit("setLoading",true)
            db.collection("/items").doc(payload).get().then((doc)=>{
                commit("SetCurrentItem",doc.data())
                commit("setLoading",false)
            })
        }
        ,
        getlistOfItems({commit}){
            commit("setLoading",true)
            db.collection("/items").get().then((res)=>{
                var items=[]
                 res.docs.forEach(element => {
                    items.push({...element.data(),...{id:element.id}})
                });
                console.log(items)
               commit( "setListOfItems",items)
               commit("setLoading",false)
            }).catch(err=>{
                console.log(err)
            })
            
        },
        addItem({commit},payload){
            commit("setLoading",true)
            db.collection("/items").add(payload).then(()=>{
                commit("setLoading",false)
                alert("Product Added")
            })
        },
    },
    getters:{
        getlistOfItems(state){
            return state.listOfItems;
        },
        getLoading(state){
            return state.loading
        },getDetails(state){
            console.log(state.CurrentItem)
            return state.CurrentItem
        }
         
    }
}