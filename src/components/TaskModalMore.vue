<template>
    <div v-show="task.isMore">
        <div class="tasks__modal-more-wrapper">
            <div class="tasks__modal-close" @click="task.isMore = false">
                <font-awesome-icon class="tasks__modal-close-icon" icon="times-circle" />
            </div>
            <div class="tasks__header">{{task.name}}</div>
            <div class="tasks__body">
                <div class="tasks__body-dec">{{task.description}}</div>
                <div class="tasks__body-deadline">{{task.deadline}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskModalMore"
    }
</script>

<style scoped>

</style>