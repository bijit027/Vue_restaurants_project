<template>
<HeaderPage />
<h2>Add Restaurants</h2>

<form action="" class="add">
    <input type="text" placeholder="Restaurant Name" v-model="restaurant.name" name="name">
    <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address" />
    <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact" />
    <button type="button" @click="addRestaurant">Add New Restaurant</button>
</form>
</template>

<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue'
export default {

    name: 'AddRestaurants',

    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }

        }
    },

     methods: {
     async   addRestaurant() {

            console.warn("hello",this.restaurant);
            let result = await axios.post("http://localhost:3000/restaurant",{
                name: this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact

            });

            if (result.status == 201) {
               
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({
                    name: 'HomePage'
                });

            }

        }
    },
    components: {
        HeaderPage,

    },

    mounted() {
        let user = localStorage.getItem('user-info');

        if (!user) {

            this.$router.push({
                name: 'SignUp'
            });

        }
    }

}
</script>

<style scoped>

</style>
