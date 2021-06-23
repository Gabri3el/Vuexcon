<template>
    <v-toolbar class="toolbar">
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>VueX</span>
            <span class="font-weight-light">Con</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn text to="/">Inicío</v-btn>
            <v-btn text to="/portifolio">Portifolio</v-btn>
            <v-btn text to="/stocks">Ações</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn text @click="endDay">Finalizar o Dia</v-btn>
            <v-menu  offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on">Salvar e Carregar</v-btn>
                </template>
                    <v-list>
                        <v-list-item-group >
                            <v-list-item @click="saveData">
                                Salvar Dados
                            </v-list-item>
                            <v-list-item  @click="LoadDataLocal">
                                Carregar Dados
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
            </v-menu>
            <v-layout align-center>
                <span class="text-uppercase grey--text text--darken-2">
                    Saldo: {{funds | currency}}
                </span>
            </v-layout>
        </v-toolbar-items>
    </v-toolbar>    
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
    export default {
        computed:{
            ...mapGetters({fundsHeader: 'funds'}),
            funds(){
                return this.fundsHeader
            }
        },
        methods:{
            ...mapActions(['randomizeStocks','localData']),
            endDay(){
                this.randomizeStocks()
            },
            saveData(){
                const { funds ,stockPortifolio, stocks } = this.$store.getters
                this.$http.put('data.json',{funds,stockPortifolio,stocks})
            },
            LoadDataLocal(){
                this.localData()
            }
        }
    }
</script>

<style lang="css" scoped>

</style>