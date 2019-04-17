<template>
    <div>
        <div class="row">
            <div class="col">
                <Spinner :noFadeIn="true" :className="'m-auto'" :height="'100'" :width="'100'" name="pacman" color="#000000"/>
            </div>
        </div>

        <form action="">
            <div class="form-group">
                <label for="name">Ваше имя:</label>
                <input type="text" id="name" name="name" class="form-control" v-model="name">
            </div>
        </form>

        <div v-if="name.length > 0">
            Здравствуй, {{ name }}
        </div>

    </div>
</template>

<script>
    export default {

        data() {
            return {
                name: ''
            }
        },
        watch: {
        },

    }
</script>
