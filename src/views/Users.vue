<template>
  <div class="users">
    <div class="users__heading">
      <h1 class="title title--users">Staff ({{list.length}})</h1>
      <input class="users__search" type="text" v-model="searchByName" placeholder="search by name">
    </div>
    <ul class="users__list">
      <li class="users__item" v-for="(user, key) in list" :key="key" v-show="(user.isVisible)">
        <div class="users__profile">
          <div class="users__avatar">
            <img :src="user.avatar" alt="avatar">
<!--            {{user.avatar}}-->
          </div>
          <div class="users__profile-wrapper">
            <div class="users__name">{{user.firstName}} {{user.secondName}}</div>
            <div class="users__position">{{user.position}}</div>
          </div>
        </div>
        <div class="users__rate">
          <div class="users__bar">
            <div class="users__bar-good" :style="{width: user.userRate + '%'}">{{user.userRate.toFixed(0)}}</div>
            <div class="users__bar-fail" :style="{width: 100 - user.userRate + '%'}">{{100 - user.userRate > 0 ? 100 - user.userRate.toFixed(0) : ''}}</div>
          </div>
        </div>
        <div class="users__contact">{{user.phone}}</div>
        <div class="users__hover">
          <div class="users__hover-wrapper">
            <div class="users__send" @click="user.isModalOpen = true">
              <font-awesome-icon class="users__icon" icon="tasks" />
            </div>
            <div class="users__open-modal">
              <font-awesome-icon class="users__icon" icon="paper-plane" />
            </div>
          </div>
        </div>

        <div class="users__modal-user-wrapper">
          <UserModalWindow class="users__modal-user" :user="user"/>
        </div>
<!--        <UserModalCreateTask-->
<!--                :user="user"-->
<!--                v-show="user.isModalAddTask" @addTaskInList="addTaskInList"/>-->
<!--        <UserModalWindow :user="user" @addTaskInList="addTaskInList"/>-->
<!--        <div class="users__modal-user" v-show="user.isModalOpen" >-->
<!--          <div class="users__modal-wrapper">-->
<!--            <div class="tasks__modal-close" @click="user.isModalOpen = false">-->
<!--              <font-awesome-icon class="tasks__modal-close-icon" icon="times-circle" />-->
<!--            </div>-->
<!--            <div class="users__modal-block-info">-->
<!--              <div class="users__modal-avatar">-->
<!--                <img src="../assets/avatar.jpg" alt="avatar">-->
<!--              </div>-->
<!--              <div class="users__modal-profile">-->
<!--                <div class="users__modal-name">Name: John Smith</div>-->
<!--                <div class="users__modal-position">Position: sale manager</div>-->
<!--                <div class="users__modal-rate">Rate: 50%</div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="users__modal-block-tasks">-->
<!--              <div class="users__modal-tasks users__modal-tasks&#45;&#45;todo">-->
<!--                <h1 class="title">To do</h1>-->
<!--                <ul class="users__modal-list">-->
<!--                  <li class="users__modal-list-item">-->
<!--                    <div class="users__modal-item-point"></div>-->
<!--                    <div class="users__modal-item-preview">new sale</div>-->
<!--                    <div class="users__modal-item-deadline">5 days left</div>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
<!--              <div class="users__modal-tasks users__modal-tasks&#45;&#45;inprogress">-->
<!--                <h1 class="title">In progress</h1>-->
<!--                <ul class="users__modal-list">-->
<!--                  <li class="users__modal-list-item">-->
<!--                    <div class="users__modal-item-point"></div>-->
<!--                    <div class="users__modal-item-preview">new sale</div>-->
<!--                    <div class="users__modal-item-deadline">5 days left</div>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
<!--              <div class="users__modal-tasks users__modal-tasks&#45;&#45;completed">-->
<!--                <h1 class="title">Completed</h1>-->
<!--                <ul class="users__modal-list">-->
<!--                  <li class="users__modal-list-item">-->
<!--                    <div class="users__modal-item-point"></div>-->
<!--                    <div class="users__modal-item-preview">new sale</div>-->
<!--                    <div class="users__modal-item-deadline">5 days left</div>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="users__add-task">-->
<!--              <font-awesome-icon class="users__add-task-btn" icon="plus" />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </li>
<!--      <li class="users__item">-->
<!--        <div class="users__profile">-->
<!--          <div class="users__avatar">-->
<!--            <img src="../assets/avatar.jpg" alt="avatar">-->
<!--          </div>-->
<!--            <div class="users__profile-wrapper">-->
<!--              <div class="users__name">Smith</div>-->
<!--              <div class="users__position">sale manager</div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="users__rate">-->
<!--          <div class="users__bar">-->
<!--            <div class="users__bar-fail">50%</div>-->
<!--            <div class="users__bar-good">50%</div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="users__contact">093 1111111</div>-->
<!--      </li>-->
<!--      <li class="users__item">-->
<!--        <div class="users__profile">-->
<!--          <div class="users__avatar">-->
<!--            <img src="" alt="">-->
<!--            <div class="users__profile-wrapper">-->
<!--              <div class="users__name">Smith</div>-->
<!--              <div class="users__position">sale manager</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="users__rate">50%</div>-->
<!--        <div class="users__contact">093 1111111</div>-->
<!--      </li>-->
<!--      <li class="users__item">-->
<!--        <div class="users__profile">-->
<!--          <div class="users__avatar">-->
<!--            <img src="" alt="">-->
<!--            <div class="users__profile-wrapper">-->
<!--              <div class="users__name">Smith</div>-->
<!--              <div class="users__position">sale manager</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="users__rate">50%</div>-->
<!--        <div class="users__contact">093 1111111</div>-->
<!--      </li>-->
<!--      <li class="users__item">-->
<!--        <div class="users__profile">-->
<!--          <div class="users__avatar">-->
<!--            <img src="" alt="">-->
<!--            <div class="users__profile-wrapper">-->
<!--              <div class="users__name">Smith</div>-->
<!--              <div class="users__position">sale manager</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="users__rate">50%</div>-->
<!--        <div class="users__contact">093 1111111</div>-->
<!--      </li>-->
<!--      <li class="users__item">-->
<!--        <div class="users__profile">-->
<!--          <div class="users__avatar">-->
<!--            <img src="" alt="">-->
<!--            <div class="users__profile-wrapper">-->
<!--              <div class="users__name">Smith</div>-->
<!--              <div class="users__position">sale manager</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="users__rate">50%</div>-->
<!--        <div class="users__contact">093 1111111</div>-->
<!--      </li>-->
<!--      <li class="users__item">-->
<!--        <div class="users__profile">-->
<!--          <div class="users__avatar">-->
<!--            <img src="" alt="">-->
<!--            <div class="users__profile-wrapper">-->
<!--              <div class="users__name">Smith</div>-->
<!--              <div class="users__position">sale manager</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="users__rate">50%</div>-->
<!--        <div class="users__contact">093 1111111</div>-->
<!--      </li>-->
<!--      <li class="users__item">-->
<!--        <div class="users__profile">-->
<!--          <div class="users__avatar">-->
<!--            <img src="" alt="">-->
<!--            <div class="users__profile-wrapper">-->
<!--              <div class="users__name">Smith</div>-->
<!--              <div class="users__position">sale manager</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="users__rate">50%</div>-->
<!--        <div class="users__contact">093 1111111</div>-->
<!--      </li>-->
    </ul>


  </div>
</template>
<script>
  // import uuidv4 from 'uuid/v4';
  import UserModalWindow from "../components/UserModalWindow";
  import avatar0 from '../assets/woman0.jpg';
  import avatar1 from '../assets/man2.jpg';
  import avatar2 from '../assets/man2.jpg';
  import avatar3 from '../assets/man3.jpg';
  import avatar4 from '../assets/woman2.jpg';
  import avatar5 from '../assets/man10.jpg';
  import avatar6 from '../assets/man6.jpg';
  import avatar7 from '../assets/woman2.jpg';
  import avatar8 from '../assets/man7.jpg';
  import avatar9 from '../assets/man10.jpg';
  import avatar10 from '../assets/woman8.jpg';
  // import UserModalCreateTask from "../components/UserModalCreateTask";

  export default {
    name: 'users',
    components: {UserModalWindow},
    data() {
      return {
        period: 10,
        bestEmp: [],
        // isModalAddTask: false,
        searchByName: '',
        list: [
          {
            firstName: 'Marry',
            secondName: 'Smith',
            position: 'sales manager',
            doneTask: 0,
            // avatar: '../assets/woman0.jpg',
            avatar: avatar0,
            missTask: 0,
            uuid: 0,
            inProcessTask: 0,
            isModalOpen: false,
            // isModalAddTask: false,
            totalTasks: 0,
            phone: '09911111111',
            tasksList: [],
            isVisible: true,
            userRate: 0
          },{
            firstName: 'John',
            secondName: 'Smith',
            position: 'sales manager',
            doneTask: 0,
            missTask: 0,
            inProcessTask: 0,
            uuid: 2,
            avatar: avatar1,
            isModalOpen: false,
            totalTasks: 0,
            phone: '09911111111',
            tasksList: [],
            isVisible: true,
            userRate: 0
          },{
            firstName: 'Alex',
            secondName: 'Smith',
            position: 'account manager',
            doneTask: 0,
            missTask: 0,
            inProcessTask: 0,
            uuid: 3,
            avatar: avatar2,
            isModalOpen: false,
            totalTasks: 0,
            phone: '09911111111',
            tasksList: [],
            isVisible: true,
            userRate: 0
          },{
            firstName: 'Mark',
            secondName: 'Smith',
            position: 'developer',
            doneTask: 0,
            avatar: avatar3,
            missTask: 0,
            uuid: 4,
            inProcessTask: 0,
            isModalOpen: false,
            totalTasks: 0,
            phone: '0993321142',
            tasksList: [],
            isVisible: true,
            userRate: 0
          },{
            firstName: 'Jane',
            secondName: 'Smith',
            position: 'SEO',
            doneTask: 0,
            avatar: avatar4,
            missTask: 0,
            uuid: 5,
            inProcessTask: 0,
            isModalOpen: false,
            totalTasks: 0,
            phone: '09911111111',
            tasksList: [],
            isVisible: true,
            userRate: 0
          },{
            firstName: 'Kenan',
            secondName: 'Smith',
            avatar: avatar5,
            position: 'sales manager',
            doneTask: 0,
            missTask: 0,
            uuid: 6,
            inProcessTask: 0,
            isModalOpen: false,
            totalTasks: 0,
            phone: '09911111111',
            tasksList: [],
            isVisible: true,
            userRate: 0
          },{
            firstName: 'Peter',
            secondName: 'Smith',
            position: 'HR',
            avatar: avatar6,
            doneTask: 0,
            missTask: 0,
            uuid: 7,
            inProcessTask: 0,
            isModalOpen: false,
            totalTasks: 0,
            phone: '09911111111',
            tasksList: [],
            isVisible: true,
            userRate: 0
          },{
            firstName: 'Rachel',
            secondName: 'Smith',
            position: 'sales manager',
            doneTask: 0,
            missTask: 0,
            inProcessTask: 0,
            uuid: 8,
            avatar: avatar7,
            isModalOpen: false,
            totalTasks: 0,
            phone: '09911111111',
            tasksList: [],
            isVisible: true,
            userRate: 0
          },{
            firstName: 'Max',
            secondName: 'Smith',
            position: 'sales manager',
            doneTask: 0,
            missTask: 0,
            avatar: avatar8,
            inProcessTask: 0,
            uuid: 9,
            isModalOpen: false,
            totalTasks: 0,
            phone: '09911111111',
            tasksList: [],
            isVisible: true,
            userRate: 0
          },{
            firstName: 'Lil',
            secondName: 'Smith',
            position: 'marketing',
            uuid: 10,
            doneTask: 0,
            missTask: 0,
            inProcessTask: 0,
            avatar: avatar9,
            isModalOpen: false,
            totalTasks: 0,
            phone: '09911111111',
            tasksList: [],
            isVisible: true,
            userRate: 0
          },{
            firstName: 'Stefan',
            secondName: 'Smith',
            position: 'client support manager',
            avatar: avatar10,
            doneTask: 0,
            uuid: 11,
            missTask: 0,
            inProcessTask: 0,
            isModalOpen: false,
            totalTasks: 0,
            phone: '09911111111',
            tasksList: [],
            isVisible: true,
            userRate: 0
          },
        ]
      }
    },
    methods: {

    },

    watch: {
      searchByName: {
        handler: function () {
          // console.log(this.searchByName);
          for (let i of this.list) {
            if (i.firstName.toLowerCase().indexOf(this.searchByName.toLocaleLowerCase()) != '-1') {
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
    updated: function () {
      let popularity = 0;
      let orders = 0;
      let profit = 0;
      let totalTasks = 0;
      for (let u of this.list) {
        if (u.position === "sales manager") {
          for (let task of u.tasksList) {
            if (task.category === 'Completed') {
              profit++;
            }
          }
        }
        let marketingCount = 0;
        if (u.position === 'marketing') {
          marketingCount++;
          popularity += u.userRate / marketingCount;
        }
        totalTasks += u.tasksList.length;
      }

      totalTasks = totalTasks + '';
      popularity = popularity + '';
      orders = profit;
      orders = orders + '';
      profit *= 1000;
      profit = profit + '';
      this.$store.dispatch('changeProfit', profit);
      this.$store.dispatch('changeOrders', orders);
      this.$store.dispatch('changeBrandPopularity', popularity);
      this.$store.dispatch('changeTotalTasks', totalTasks);
      localStorage.setItem('brandPopularity', popularity);
      localStorage.setItem('totalProfit', profit);
      localStorage.setItem('totalOrders', orders);
      localStorage.setItem('totalTasks', totalTasks);
      localStorage.setItem('bestEmp', JSON .stringify(this.list));
    },
    created: function () {

      let arrr = this.list;
      // for (let rate of this.list) {
      //   arrr.push(rate)
      //   // console.log(this.bestEmp);
      // }
      // let arrr = [{age:1}, {age:3}, {age:5}, {age:2}, {age:16}, {age:0}, {age:6}]
      // console.log(arrr);
      // arrr.sort((a,b) => {
      //   // console.log(a.age);
      //   return b.userRate - a.userRate;
      //   // return b.age - a.age;
      // });
      console.log(arrr);
      // this.$store.dispatch('changeBestEmp', arrr);
      // localStorage.setItem('bestEmp', JSON .stringify(arrr));
      // console.log(this.$store.state.bestEmployes)





      let arr = [];
      for (let i = 0; i <= this.list.length; i++) {
        let name = 'userTasksList' + i;
        arr = JSON.parse(localStorage.getItem(name)) || [];
        for (let i of arr) {
          // console.log(i);
          // i.isEdit = false;
          // i.isMore = false;
          // i.uuid = uuidv4();

          for (let j of this.list) {
            if (i.id === j.uuid) {
              j.tasksList.push(i)
            }
            let done = 0;
            for (let item of j.tasksList) {
              if (item.category === 'Completed') {

                done++
              }
            }
            let res = 100 * done / j.tasksList.length;
            j.userRate = res;
          }
        }
      }






      // let arr = JSON.parse(localStorage.getItem('userTasksList')) || [];
      // for (let i of arr) {
      //   console.log(i);
      //
      //   for (let j of this.list) {
      //     if (i.id === j.uuid) {
      //       j.tasksList.push(i)
      //     }
      //   }
      //
      //   // if (i.id === this.user.tasksList.uuid) {
      //   //
      //   //   this.user.tasksList.push(i);
      //   }
      },
      // this.user.tasksList = JSON.parse(localStorage.getItem('userTasksList')) || [];
    // }
    // watch: {
    //   list: {
    //     handler: function () {
    //
    //
    //
    //       // localStorage.setItem('userList', JSON.stringify(this.list));
    //
    //       // this.countPerformed = 0;
    //       // this.countNotPerformed = 0;
    //       // for (let item of this.list) {
    //       //   if (item.status) {
    //       //     this.countPerformed++;
    //       //   } else {
    //       //     this.countNotPerformed++;
    //       //   }
    //       // }
    //     },
    //     deep: true
    //   },
    // }
    // created: function () {
    //   this.list = JSON.parse(localStorage.getItem('userList')) || [];
    // }
  }
</script>

