<template>
    <div class="tasks__modal">
        <div class="tasks__modal-wrapper">
            <div class="tasks__modal-close" @click="closeModalAdd">
                <font-awesome-icon class="tasks__modal-close-icon" icon="times-circle" />
            </div>

            <input class="tasks__modal-item"
                   type="text"
                   placeholder="enter new task"
                   v-model="newNameTask">
            <textarea class="tasks__modal-item tasks__modal-item--area"
                      placeholder="enter description"
                      v-model="newDescriptionTask"></textarea>
            <label class="tasks__modal-item tasks__modal-item--label" for="id">Choose deadline task</label>
            <input class="tasks__modal-item"
                   type="date"
                   id="date"
                   v-model="newDeadlineTask">
            <button class="btn btn--modal-add" @click="createTask" >Create task</button>
        </div>
    </div>
</template>

<script>
    import uuidv4 from 'uuid/v4';
    export default {
        name: "UserModalCreateTask",
        props: ['isModalAddTask', 'user'],
        data() {
            return {
                newNameTask: '',
                newDescriptionTask: '',
                newDeadlineTask: ''
            }
        },
        methods: {
            createTask() {
                console.log(this.user);
                this.$emit('addTaskInList', {
                    name: this.newNameTask,
                    description: this.newDescriptionTask,
                    deadline: this.newDeadlineTask,
                    id: this.user.uuid,
                    uuid: uuidv4(),
                    isMore: false,
                    isMiss: false,
                    isEdit: false,
                    // isModalAddTask: false,
                    dateDeadline: new Date()
                });
                this.closeModalAdd();
                this.newDeadlineTask = '';
                this.newDescriptionTask = '';
                this.newNameTask = '';
            },
            closeModalAdd() {
                // this.isModalAddTask = false;
                this.$emit('closeModalAdd', false);
            }
        }
    }
</script>

<style scoped>

</style>