<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
        <v-sheet :elevation="6" class="pa-2">
            <v-icon medium class="blue--text">mdi-information</v-icon>
            <span>Você pode Salvar e carregar os Dados</span>
        </v-sheet>
        <v-divider class="my-4" />
        <p class="display-1"><strong>Seu saldo: </strong>{{funds | currency}}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        computed:{
            ...mapGetters({fundsHome: 'funds'}),
            funds(){
                return this.fundsHome
            }
        }
    }
</script>

<style lang="css" scoped>

</style>