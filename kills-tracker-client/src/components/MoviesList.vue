<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="movie in movies">
                    <tr v-bind:key="movie.id">
                        <td>{{ movie.id }}</td>
                        <td>{{ movie.title }}</td>
                        <td>{{ movie.count }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
        <a class="button is-primary">Add Movie</a>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            movies: {}
        }
    },
    async created () {
        axios.defaults.headers.common['Authorization'] = `Bearer ${await this.$auth.getAccessToken()}`
        try {
            const response = await axios.get('http://localhost:8000/movies')
            this.movies = response.data
        } catch (e) {
            // handle the authentication error here
        }
    }
}
</script>