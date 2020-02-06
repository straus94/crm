<template>
    <section class="tasks">
        <div class="tasks__wrapper">
            <div class="tasks__heading">
                <h2 class="title title--tasks">My tasks</h2>
                <select class="tasks__sort" v-model="select" @change="sorting()">
                    <option value="" disabled hidden>sort by..</option>
                    <option v-for="(item, key) in sortBy" :value="item.name" :key="key">
                        {{item.name}}
                    </option>
                </select>
                <input type="text" class="tasks__search" v-model="searchByName" placeholder="search task..">
                <div class="tasks__status-wrapper">
                    <div class="tasks__status tasks__status--done">
                        {{countPerformed}}
                    </div>
                    <div class="tasks__status tasks__status--fail">
                        {{countNotPerformed}}
                    </div>
                </div>

            </div>
            <ul class="tasks__list">
                <li class="tasks__item" v-for="(task, key) in list" :key="key" v-show="(task.isVisible) && (key < period)">
                    <div class="tasks__item-status tasks__item-status--done"
                    v-if="task.status">T</div>
                    <div class="tasks__item-status tasks__item-status--fail"
                    v-else>F</div>
                    <div class="tasks__item-title">{{ task.name}}</div>
                    <div class="tasks__item-deadline"
                    v-if="task.isMiss">d: {{task.deadline}}</div>
                    <div class="tasks__item-deadline tasks__item-deadline--miss"
                         v-else>{{task.deadline}} miss deadline!!</div>
                    <div class="tasks__item-hover">
                        <div class="tasks__item-hover-wrapper">



                            <div class="tasks__edit" @click="task.isEdit = true">
                                <font-awesome-icon class="tasks__icon" icon="pencil-alt" />
                            </div>

                            <div class="tasks__done"
                                 @click="task.status = !task.status">
                                <font-awesome-icon class="tasks__icon" icon="check-circle"/>
                            </div>
                            <div class="tasks__delete">
                                <font-awesome-icon class="tasks__icon" icon="times-circle"
                                                   @click="deleteTask(task.uuid)"/>
                            </div>
                            <div class="tasks__more">
                                <font-awesome-icon class="tasks__icon" icon="tasks"
                                                   @click="task.isMore = true"/>
                            </div>
                        </div>
                    </div>

<!--                    <TaskModalMore />-->
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
                </li>
            </ul>
            <div class="tasks__add-item" @click="changeModal()" v-show="!isModal">
            <font-awesome-icon class="tasks__add-item-btn" icon="plus" />
        </div>
            <button v-show="list.length > 10 && isBtnMore" class="tasks__add-list" @click="period += 10">+10 items {{period}}</button>
            <div class="tasks__modal" v-show="isModal">
                <div class="tasks__modal-wrapper">
                    <div class="tasks__modal-close" @click="changeModal()">
                        <font-awesome-icon class="tasks__modal-close-icon" icon="times-circle" />
                    </div>

                    <input class="tasks__modal-item"
                           type="text"
                           placeholder="enter new task"
                            v-model.lazy.trim="newNameTask">
                    <textarea class="tasks__modal-item tasks__modal-item--area"
                              placeholder="enter description"
                                v-model="newDescriptionTask"></textarea>
                    <label class="tasks__modal-item tasks__modal-item--label" for="id">Choose deadline task</label>
                    <input class="tasks__modal-item"
                           type="date"
                           id="date"
                            v-model.lazy.trim="newDeadlineTask">
                    <button class="btn btn--modal-add"
                    @click="addItem()">Create task</button>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import uuidv4 from 'uuid/v4';
    // import TaskModalMore from "../components/TaskModalMore";
    // import TaskEditButton from "../components/TaskEditButton";

    export default {
        name: "Tasks",
        // components: {TaskEditButton},
        data () {
            return {
                newNameTask: '',
                countPerformed: 0,
                countNotPerformed: 0,
                period: 10,
                isBtnMore: true,
                newDescriptionTask: '',
                newDeadlineTask: '',
                uuid: uuidv4(),
                select: '',
                searchByName: '',
                sortBy: [
                    {name: 'default'},
                    {name: 'status'},
                    {name: 'deadline'}
                    ],
                isEdit: false,
                isModal: false,
                date: new Date(),
                list: []
            }
        },
        methods: {
            addItem() {
                console.log(this.newNameTask);
                this.list.push({
                    name: this.newNameTask,
                    description: this.newDescriptionTask,
                    isVisible: true,
                    isMiss: false,
                    isEdit: false,
                    isMore: false,
                    deadline: this.newDeadlineTask,
                    status: false,
                    createDate: new Date(),
                    uuid: uuidv4()
                });

                this.newNameTask = null;
                this.newDeadlineTask = null;
                this.newDescriptionTask = null;
                // console.log(this.list[0]);
                this.isModal = !this.isModal;
            },
            deleteTask(uuid) {
                const key = this.list.findIndex(item => {
                    return item.uuid === uuid
                });
                this.list.splice(key, 1);
            },
            changeModal() {
                this.isModal = !this.isModal;
            },
            sorting(){
                // this.period = 10;
                console.log(this.select);
                if (this.select === 'deadline') {
                    this.period = 10;
                    this.select = '';
                    this.list.sort((a,b) => {
                        let dateA = new Date(a.deadline), dateB = new Date(b.deadline);
                        return dateA - dateB;
                    });
                    this.list.sort((a,b) => {
                        return (a.status === b.status) ? 0 : b.status ? -1 : 1;
                    });
                    // console.log(this.list);
                    // this.select = '';
                    // break;
                }

                if (this.select === 'default') {
                    this.period = 10;
                    this.select = '';
                    this.list.sort((a,b) => {
                       let dateA = new Date(a.createDate), dateB = new Date(b.createDate);
                       return dateA - dateB;
                    });
                    // this.select = '';
                }

                if (this.select === 'status') {
                    this.period = 10;
                    this.select = '';
                    this.list.sort((a,b) => {
                        return (a.status === b.status) ? 0 : b.status ? -1 : 1;
                    });
                    // this.select = '';
                }
            }
        },
        updated: function () {
            let now = new Date();
            let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            // console.log(today);
            for (let item of this.list) {
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
            }
            // let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            // let otherDay = this
            // console.log(today);
        },
        watch: {
            list: {
                handler: function () {
                    localStorage.setItem('taskList', JSON.stringify(this.list));

                    this.countPerformed = 0;
                    this.countNotPerformed = 0;
                    for (let item of this.list) {
                        if (item.status) {
                            this.countPerformed++;
                        } else {
                            this.countNotPerformed++;
                        }
                    }
                },
                deep: true
            },
            period: {
                handler: function () {
                    console.log(this.list.length)
                    let count = 0;
                    for (let item of this.list) {
                        if (item.isVisible) count++;
                    }

                    if (this.period - count > 0) {
                        // this.period = 10;
                        this.isBtnMore = false
                    }

                },
                deep: true
            },
            searchByName: {
                handler: function () {
                    console.log(this.searchByName);
                    for (let i of this.list) {
                        if (i.name.indexOf(this.searchByName) != '-1') {
                            i.isVisible = true;
                        } else {
                            i.isVisible = false;
                        }
                    }

                    if (this.searchByName === '') {
                        for (let i of this.list) {
                            i.isVisible = true;
                        }
                    }

                    this.period = 10;
                },
                deep: true
            }

        },
        created: function () {
            this.list = JSON.parse(localStorage.getItem('taskList')) || [];
            let date = new Date();
            for (let task of this.list) {
                if (task.date < date) {
                    task.isMiss = false;
                }
            }
        }
    }
</script>

<style scoped>

</style>