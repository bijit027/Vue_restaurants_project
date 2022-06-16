<template>
<img class="logo" src="../assets/resto.jpg">
<h3>
    Sign Up
</h3>

<div class="login">

    <input type="email" v-model="email" placeholder="Enter your email">
    <input type="password" v-model="password" placeholder="Enter your password">

    <button @click="login">Login</button>
    <p>
        <router-link to="/sign-up">Sign Up</router-link>

    </p>

</div>
</template>

<script>

import axios from 'axios'
export default {
    name: "LoginPage",
    data()
    {
        return {
            email: '',
            password: '',
        }
    },
    methods:{
       async login()
        {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            console.log(result);

                        if (result.status == 200 && result.data.length > 0) {
                alert("Signin done")
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({
                    name: 'HomePage'
                });

            }
        }
        

    },
        mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {

            this.$router.push({
                name: 'HomePage'
            });

        }
    }

}
</script>

<style >

</style>
