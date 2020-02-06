<template>
    <div v-show="user.isModalOpen" >
<!--        <div class="users__modal-close" @click="user.isModalOpen = false" v-show="!isModalAddTask">-->
<!--            <font-awesome-icon class="tasks__modal-close-icon" icon="times-circle" />-->
<!--        </div>-->
        <div class="users__modal-wrapper">
            <div class="users__modal-close" @click="user.isModalOpen = false" v-show="!isModalAddTask">
                <font-awesome-icon class="tasks__modal-close-icon" icon="times-circle" />
            </div>
            <div class="users__modal-block-info">
                <div class="users__modal-avatar">
                    <img :src="user.avatar" alt="avatar">
                </div>
                <div class="users__modal-profile">
                    <div class="users__modal-name">Name: {{user.firstName}} {{user.secondName}}</div>
                    <div class="users__modal-position">Position: {{user.position}}</div>
                    <div class="users__modal-profile-item">Position rate: {{user.doneTask}}</div>
                    <div class="users__modal-rate">Rate: {{user.userRate.toFixed(0)}}%</div>
                </div>
            </div>
            <div class="users__modal-block-tasks">
                <div class="users__modal-tasks"
                v-for="(category, key) in categories" :key="key">
                    <h1 class="title">{{category.name}}</h1>
                    <ul class="users__modal-list">
                        <li v-show="category.name === task.category" class="users__modal-list-item" v-for="(task, key) in user.tasksList" :key="key">
<!--                            {{task}}-->
                            <div v-show="category.name === 'To do'" class="users__modal-item-point users__modal-item-point--todo"></div>
                            <div v-show="category.name === 'In progress'" class="users__modal-item-point users__modal-item-point--inprogress"></div>
                            <div v-show="category.name === 'Completed'" class="users__modal-item-point users__modal-item-point--completed"></div>
                            <div class="users__modal-item-preview">{{task.name}}</div>
                            <div v-if="(task.isMiss) || (task.category === 'Completed')" class="users__modal-item-deadline">{{task.deadline}}</div>
                            <div v-else class="users__modal-item-deadline" :style="{color: 'red'}">{{task.deadline}}</div>

                            <div class="users__item-profile-task-hover">
                                <div class="users__item-profile-task-hover-wrapper">



                                    <div class="users__item-profile-task-icon users__item-profile-task-icon--edit" @click="task.isEdit = true">
                                        <font-awesome-icon class="users__profile-icon" icon="pencil-alt" />
                                    </div>

                                    <div class="users__item-profile-task-icon users__item-profile-task-icon--right">
                                        <font-awesome-icon v-show="task.category === 'To do'" @click="task.category = 'In progress'" class="users__profile-icon" icon="arrow-circle-right"/>
                                        <font-awesome-icon v-show="task.category === 'In progress'" @click="task.category = 'Completed'" class="users__profile-icon" icon="check-circle"/>
                                        <font-awesome-icon v-show="task.category === 'Completed'" @click="task.category = 'In progress'" class="users__profile-icon" icon="arrow-circle-left"/>
                                    </div>

<!--                                    <div class="users__item-profile-task-icon users__item-profile-task-icon&#45;&#45;right"-->
<!--                                         @click="task.status = !task.status">-->
<!--                                        <font-awesome-icon class="tasks__icon" icon="check-circle"/>-->
<!--                                    </div>-->


                                    <div class="users__item-profile-task-icon users__item-profile-task-icon-delete">
                                        <font-awesome-icon class="users__profile-icon" icon="times-circle"
                                                           @click="deleteTask(task.uuid)"/>
                                    </div>
                                    <div class="users__item-profile-task-icon users__item-profile-task-icon--more">
                                        <font-awesome-icon class="users__profile-icon" icon="tasks"
                                                           @click="task.isMore = true"/>
                                    </div>
                                </div>
                            </div>

                            <div class="tasks__modal tasks__modal--edit" v-show="task.isEdit">
                                <div class="tasks__modal-wrapper">
                                    <div class="tasks__modal-close" @click="task.isEdit = false">
                                        <font-awesome-icon class="tasks__modal-close-icon" icon="times-circle" />
                                    </div>

                                    <input class="tasks__modal-item"
                                           type="text"
                                           placeholder="enter new task"
                                           v-model.lazy.trim="task.name">
                                    <textarea class="tasks__modal-item tasks__modal-item--area"
                                              placeholder="enter description"
                                              v-model="task.description"></textarea>
                                    <div class="tasks__modal-item tasks__modal-item--label">Choose deadline task</div>
                                    <input class="tasks__modal-item"
                                           type="date"
                                           v-model.lazy.trim="task.deadline">
                                    <button class="btn btn--modal-add"
                                            @click="task.isEdit = false">Edit task</button>
                                </div>
                            </div>

                            <div class="tasks__modal-more" v-show="task.isMore">
                                <div class="tasks__modal-more-wrapper">
                                    <div class="tasks__modal-close" @click="task.isMore = false">
                                        <font-awesome-icon class="tasks__modal-close-icon" icon="times-circle" />
                                    </div>
                                    <div class="tasks__edit tasks__edit--more-modal" @click="(task.isEdit = true) && (task.isMore = false)">
                                        <font-awesome-icon class="tasks__icon tasks__icon--more-modal" icon="pencil-alt" />
                                    </div>
                                    <div class="tasks__header">{{task.name}}</div>
                                    <div class="tasks__body">
                                        <div class="tasks__body-dec">{{task.description}}</div>
                                        <div class="tasks__body-deadline">{{task.deadline}}</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="users__add-task" @click="isModalAddTask = true" v-show="!isModalAddTask">
                <font-awesome-icon class="users__add-task-btn" icon="plus" />
            </div>



            <UserModalCreateTask
                    :user="this.user"
                    :isModalAddTask="isModalAddTask"
                    v-show="isModalAddTask" @addTaskInList="addTaskInList" @closeModalAdd="closeModalAdd" />

        </div>
    </div>
</template>

<script>
    import UserModalCreateTask from "./UserModalCreateTask";
    export default {
        props: ['user'],
        name: "UserModalWindow",
        components: {UserModalCreateTask},
        data() {
            return {
                isEdit: false,
                isModalAddTask: false,
                newNameTask: '',
                newDescriptionTask: '',
                newDeadlineTask: '',
                uuid: this.user.uuid,
                categories: [
                    {name: 'To do'}, {name: 'In progress'}, {name: 'Completed'}
                ]
            }
        },
        methods: {
            addTaskInList(data) {
                data.category = 'To do';
                data.id = this.user.uuid;
                data.isEdit = false;
                data.isMore = false;
                this.user.tasksList.push(data);
                console.log(data.id);
            },
            closeModalAdd() {
                this.isModalAddTask = false;
            },
            deleteTask(uuid) {
                console.log(uuid);
                const key = this.user.tasksList.findIndex(item => {
                    return item.uuid === uuid
                });
                this.user.tasksList.splice(key, 1);
            },
        },
        watch: {
            user: {
                handler: function() {
                    let done = 0;
                    let localName = 'userTasksList' + this.user.uuid;
                    for (let item of this.user.tasksList) {
                        // console.log(item);
                        // console.log(this.user);
                        if (item.category === 'Completed') {

                            done++
                        }
                    }
                    let res = 100 * done / this.user.tasksList.length;
                    this.user.userRate = res;
                    // return this.$emit('rating', res)
                    // console.log(res);
                    console.log(this.user.tasksList);
                    localStorage.setItem(localName, JSON.stringify(this.user.tasksList));



                },
                deep: true
            }
        },
        updated: function () {
            let now = new Date();
            let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            // console.log(today);
            for (let item of this.user.tasksList) {
                // console.log(item.deadline);
                let other = new Date(item.deadline);
                // console.log(other)
                if (other > today){
                    item.isMiss = true;
                    // console.log('ok')
                } else {
                    item.isMiss = false;
                    // console.log('ne ok')
                }

                // if (item.category === 'Completed') {
                //     item.isMiss = true;
                // }
            }
            // let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            // let otherDay = this
            // console.log(today);
        },
        // created: function () {
        //     let arr = JSON.parse(localStorage.getItem('userTasksList')) || [];
        //     for (let i of arr) {
        //         console.log(i);
        //         if (i.id === this.user.tasksList.uuid) {
        //
        //             this.user.tasksList.push(i);
        //         }
        //     }
        //     // this.user.tasksList = JSON.parse(localStorage.getItem('userTasksList')) || [];
        // }
    }
</script>

<style scoped>

</style>