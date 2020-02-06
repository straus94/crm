<template>
    <div class="nav">
        <!-- <div class="mainer"> -->
        <div class="nav__wrapper">
            <!-- <div class="nav__menu">
                    <i class="nav__icon fas fa-bars"></i>
                    <div class="nav__search-wrapper">
                        <input class="nav__input" type="text">
                        <i class="nav__icon nav__icon--search fas fa-search"></i>
                    </div>
                </div> -->
            <div class="nav__notification">
                <font-awesome-icon class="nav__icon" icon="envelope" />
                <font-awesome-icon class="nav__icon" icon="bell" />
                <div class="nav__avatar">
                    <img src="../assets/1.jpg" alt="avatar">
                </div>
            </div>
        </div>
        <!-- </div> -->
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>