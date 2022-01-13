<template>
 <div class="list_card">
        <header>
            <nav class="list_nav">
                <div class="list_nav_left">
                    <div class="list_logo_wrapper">
                        <img src="@/assets/icons/currencyList/main.png" alt="_logo" class="logo">
                    </div>
                </div>
                <div class="list_nav_right">
                    <router-link to="/" class="currency_list">
                        
                            <img src="@/assets/icons/currencyList/goBack.png" alt="_currency_logo" class="_currency_logo">
                        </router-link> 
                </div>
            </nav>
        </header>
        <section class="currency_list">
            <h3 class="currency_title">Currency Lists for
                <input type="text" v-model="CurVal" @keydown.enter="getData(CurVal)" class="currency_type">
            </h3>
            <ul class="currency_list_group">
               <li v-for="item in CurrencyData" :key="item" class="group_items">
                   <p class="currency_name">{{item.code}}</p>
                   <strong class="currency_value">{{item.value}}</strong>
               </li>
              
           </ul>
       </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            CurrencyData:[],
            CurVal:''
        }
    },
    methods: {
      async  getData(e){
          await  this.$appAxios_1.get(`/${e}`)
            .then(res=>{
                // console.log(res);
                this.CurrencyData = res?.data?.rates
                console.log(this.CurrencyData);
            })
            .catch((e)=> alert('Check your Currency value...', e) )
        }
    },
}
</script>