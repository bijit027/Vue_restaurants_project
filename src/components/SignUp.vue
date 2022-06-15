<template>

<img class="logo" src="../assets/resto.jpg" alt="" width="50" height="50">
    <h3>
        Sign Up
    </h3>

    <div class="register">
        <input type="text" placeholder="Enter your name">
        <input type="text" placeholder="Enter your email">
        <input type="text" placeholder="Enter your password">

        <button>Sign Up</button>
        


    </div>
</template>

<script>
    export default {

        name: 'SignUp'
        
    }
</script>

<style scoped>

.logo{
    width: 50;
    height: 50;
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom:30px ;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}

.register button{
    width: 325px;
    height:40px;
    border: 1px solid rgb(133, 208, 238);
    background-color: rgb(18, 113, 151);
    color: white;
}

</style>