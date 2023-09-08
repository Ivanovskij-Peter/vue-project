import axios from "axios";

export const postModule= {
    state:()=> ({
        posts:[],
        selectedSort:'',
        isLoading:false,
        sortedOptions:[
            {value:'title', name:'By name'},
            {value: 'body', name:'By description'}
        ],
        searchQuery:'',
        page: 1,
        limit:10,
        totalPages:0,
    }),
    getters:{
        sortedPosts(state){
            return [...state.posts].sort((post1,post2)=> post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPosts(state,getters) {
            return getters.sortedPosts.filter((post) => post.title.includes(state.searchQuery))
        }
    },
    mutations:{
        setPosts(state,posts){
            state.posts=posts;
        },
        setPage(state,page){
            state.page=page;
        },
        setSelectedSort(state,selectedSort){
            state.selectedSort=selectedSort;
        },
        setSearchQuery(state,query){
            state.searchQuery=query;
        },
        setTotalPages(state,totalPages){
            state.totalPages=totalPages;
        },
        setLoading(state,bool){
           state.isLoading=bool;
        }
    },
    actions:{
        async fetchPosts({state,commit}){
            try {
                commit('setLoading',true)
                const resp=await axios.get('https://jsonplaceholder.typicode.com/posts',{
                    params:{
                        _page:state.page,
                        _limit:state.limit,
                    }
                });
                commit('setTotalPages',Math.ceil(resp.headers['x-total-count'] / state.limit));
                commit('setPosts',resp.data);
            }catch (e) {
                console.log(e)
            }finally {
                commit('setLoading',false)
            }
        },
        async loadPosts({state,commit}){
            try {
                commit('setLoading',true)
                commit('setPage',state.page + 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                    params:{
                        _page:state.page,
                        _limit:state.limit,
                    }
                });
                commit('setTotalPages',Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts',[...state.posts,...response.data]);
            }catch (e) {
                console.log(e)
            }finally {
                commit('setLoading',false)
            }
        }
    },
    namespaced:true,
}