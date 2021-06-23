import Vue from 'vue';

export default{
    localData({commit}){
        Vue.prototype.$http('data.json').then(resp =>{
            const data = resp.data
            if(data){
                commit('setStocks', data.stocks)
                commit('setPortifolio',{
                    funds: data.funds,
                    stockPortifolio: data.stockPortifolio
                })
            }
        })
        
    }
}