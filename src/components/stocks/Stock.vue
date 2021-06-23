<template>
    <v-flex class="pr-3 pb-3 pt-5" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{stock.name}} <small>(preço: {{stock.price | currency }})</small></strong>
            </v-card-title>
        </v-card>
        <v-card class="green darken-3 white--text">
            <v-container class="white" fill-height>
                <v-text-field label="Quantidade" type="number" :error="insufficentFunds || !Number.isInteger(quantity)" v-model.number="quantity" />
                <v-btn class="green darken-3 white--text"
                :disabled=" insufficentFunds || quantity <=0 || !Number.isInteger(quantity)"
                @click="buyStock">{{insufficentFunds ? 'Insuficiente' : 'Comprar'}}</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        props:['stock'],
        data(){
            return{
                quantity: 0 
            }
        },
        computed:{
            ...mapGetters({fundsStock: 'funds'}),
            funds(){
                return this.fundsStock
            },
            insufficentFunds(){
                return this.quantity * this.stock.price > this.funds
            }
        },
        methods:{
            buyStock(){
                const order ={
                    stockId:  this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.$store.dispatch('buyStock', order)
                this.quantity = 0
            }
        }
    }
</script>

<style lang="css" scoped>

</style>