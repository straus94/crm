<template>
    <div class="tasks__edit" @click="taskEdit()">
        {{taskIsEdit}}
        <font-awesome-icon class="tasks__icon" icon="pencil-alt" />
    </div>
</template>

<script>
    export default {
        name: "TaskEditButton",
        // props: ['taskIsEdit']
        props: {
            taskIsEdit: {
                type: Boolean
            }
        },
        methods: {
            taskEdit() {
                this.taskIsEdit = true;
                this.$emit('taskEdit', this.taskIsEdit);
            }
        }
    }
</script>

<style scoped>

</style>