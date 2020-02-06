<template>
    <div class="container">
        <Sidebar />
        <main class="main">
            <Navbar />

            <div class="content">
                <router-view />
            </div>
        </main>

    </div>
</template>

<script>
    import Sidebar from "../components/Sidebar";
    import Navbar from "../components/Navbar";
    export default {
        name: "MainLayout",
        components: {Sidebar, Navbar}
    }
</script>

<style scoped>

</style>