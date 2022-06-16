<template>
<img class="logo" src="../assets/resto.jpg">
<h3>
    Sign Up
</h3>

<div class="register">
    <input type="text" v-model="name" placeholder="Enter your name">
    <input type="email" v-model="email" placeholder="Enter your email">
    <input type="password" v-model="password" placeholder="Enter your password">

    <button @click="signUp">Sign Up</button>
    <p>
        <router-link to="/login-page">Login</router-link>

    </p>

</div>
</template>

<script>
import axios from 'axios';

export default {

    name: 'SignUp',

    data() {
        return {
            name: '',
            email: '',
            password: ''

        }

    },
    methods: {
        async signUp() {
            console.warn("signUp", this.name, this.email, this.password);

            let result = await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password

            });

            console.log(result);

            if (result.status == 201) {
                alert("Sign uP done")
                localStorage.setItem("user-info", JSON.stringify(result.data));
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
