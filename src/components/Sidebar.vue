<template>
    <div class="sidenav">
        <div class="sidenav__head">
            <div class="sidenav__logo"></div>
            CRMka
        </div>
        <ul class="sidenav__list">
            <li class="sidenav__item">
                <router-link to="/">
                    <a href="#" class="sidenav__link">
                        <font-awesome-icon class="sidenav__icon" icon="home" />Home</a>
                </router-link>
            </li>

            <li class="sidenav__item">
                <router-link to="/users">
                    <a href="#" class="sidenav__link">
                        <font-awesome-icon class="sidenav__icon" icon="users" />Employee</a>
                </router-link>
            </li>

            <li class="sidenav__item">
                <router-link to="/tasks">
                    <a href="#" class="sidenav__link">
                        <font-awesome-icon class="sidenav__icon" icon="briefcase" />My Tasks</a>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>

</style>