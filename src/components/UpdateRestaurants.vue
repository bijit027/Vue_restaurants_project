<template>
<HeaderPage />
<h2>Update Restaurants</h2>

<form action="" class="add">
    <input type="text" placeholder="Restaurant Name" v-model="restaurant.name" name="name">
    <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address" />
    <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact" />
    <button type="button" @click="updateRestaurant">Update Restaurant</button>
</form>
</template>

<script>
import axios from 'axios'
import HeaderPage from './HeaderPage.vue'
export default {

    name: 'UpdateRestaurants',

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
     async   updateRestaurant() {

            console.warn("hello",this.restaurant);
            let result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name: this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact

            });

            if (result.status == 200) {
               
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

    async mounted() {
        let user = localStorage.getItem('user-info');

        if (!user) {

            this.$router.push({
                name: 'SignUp'
            });

        }
         let result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
         console.warn(result.data)
        console.warn(this.$route.params.id)
        this.restaurant = result.data
    }

}
</script>

<style scoped>

</style>
