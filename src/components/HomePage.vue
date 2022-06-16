<template>
<HeaderPage />
<h2>Hello {{ name }}</h2>

<table border="1px">
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Address</td>
        <td>Contact</td>
        <td>Actions</td>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <td>
            <router-link :to="'/update/'+item.id">Update</router-link>
            <button @click="deleteRestaurant(item.id)">Delete</button>
        </td>
    </tr>
</table>
</template>

<script>
import axios from 'axios'
import HeaderPage from './HeaderPage.vue'
export default {

    name: 'HomePage',

    data() {
        return {
            name: '',
            restaurants: [],
        }
    },
    components: {
        HeaderPage,

    },

    methods: {
        async deleteRestaurant(id) {
            let result = await axios.delete("http://localhost:3000/restaurant/" + id);
            if (result.status == 200) {
                this.loadData()
            }

        },
        async loadData() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name
            if (!user) {

                this.$router.push({
                    name: 'SignUp'
                });

            }

            let result = await axios.get("http://localhost:3000/restaurant");
            console.warn(result);
            this.restaurants = result.data
        },
    },

    mounted() {

        this.loadData()

    }

}
</script>

<style scoped>
td {
    width: 160px;
    height: 40px;
}
</style>
