<template>
    <div class="home_card">
        <header>
            <nav class="home_nav">
                <div class="nav_left">
                    <div class="logo_wrapper">
                        <img src="@/assets/icons/home/main.png" alt="_logo" class="logo">
                    </div>
                </div>

                <router-link to="/list" class="currency_list">
                    <img src="@/assets/icons/home/currency_logo_1.png" alt="currency_logo" class="currency_logo">
                </router-link>
            </nav>
        </header>
        <section class="exchange_calculator">
            <div class="exchange_wrapper">
                <div class="exchange_wrapper_top">
                    <select name="" id="" class="exchange_selector_left" v-model="selector_first"
                        @change="getData">
                        <option v-for="code in CurrencyData" :key="code.id" :value="code.name">{{code.name}}</option>
                    </select>
                    <div class="replace_icon">
                        <button @click="Replace" class="replace_wrapper">
                            <img src="@/assets/icons/home/replace_icon.png" alt="">
                        </button>
                    </div>
                    <!-- <select   class="exchange_selector_right" @change="resDb($event)" > -->
                    <select @change="getData" class="exchange_selector_right" v-model="selector_second">
                        <option v-for="code in CurrencyData" :key="code.id" :value="code.name">{{code.name}}</option>
                    </select>
                </div>

                <div class="exchange_wrapper_center">
                    <div class="current_value_wrapper">
                        <input @input="ChangeVal" type="number" class="current_value_place" min="0" v-model="cur_val">
                    </div>
                    <div class="equal_icon">
                        <div class="equal_icon_wrapper"></div>
                    </div>
                    <div class="exchange_result">
                        <input  type="number" v-model="res_val" class="exchange_result_place" min="0">
                    </div>
                </div>
                <div class="exchange_wrapper_bottom">
                    <small class="exchange_default-value"> 1 {{selector_first}} = {{ex_val}} {{selector_second}} </small>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                CurrencyData: [],
                selector_first: 'USD',
                selector_second: 'EUR',
                cur_val: 1,
                res_val: '',
                ex_val: '',
                replace_val:''
            }
        },
        async created() {
            await this.$appAxios_1.get('/currency_code')
                .then(res => {
                    this.CurrencyData = res?.data?.codes;
                });
        },
       async mounted(){
            await this.getData();
        },
        methods: {
            async getData() {
                await this.$appAxios.get(`/${this.selector_first}`)
                    .then(res => {
                        this.ex_val = res?.data?.conversion_rates[this.selector_second];
                        this.res_val = (this.ex_val * this.cur_val).toFixed(2)
                    })
                    .catch(e => console.log(e))
            },
            ChangeVal() {
                this.res_val = (this.cur_val * this.ex_val).toFixed(2)
            },
            async Replace(){
                this.replace_val = this.selector_first;
                this.selector_first = this.selector_second;
                this.selector_second = this.replace_val;
                await this.getData(); 
            }
        },
    }
</script>