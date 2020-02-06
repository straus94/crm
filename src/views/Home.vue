<template>
  <div class="global">
    <div class="first-line">
      <section class="total">
        <div class="total__wrapper">
          <h2 class="title title--total">Total profit</h2>
          <div class="total__current">
            {{this.$store.state.totalProfit}}$
          </div>
        </div>

      </section>

      <section class="total">
        <div class="total__wrapper">
          <h2 class="title title--total">Total orders</h2>
          <div class="total__current">
            {{this.$store.state.totalOrders}}
          </div>
        </div>

      </section>

      <section class="total">
        <div class="total__wrapper">
          <h2 class="title title--total">Brand popularity</h2>
          <div class="total__current">
            {{this.$store.state.brandPopularity}}%
          </div>
        </div>

      </section>

      <section class="total">
        <div class="total__wrapper">
          <h2 class="title title--total">Total tasks</h2>
          <div class="total__current">
            {{this.$store.state.totalTasks}}
          </div>
        </div>

      </section>

    </div>

    <section class="rate">
      <h2 class="title title--rate">Best employee</h2>
      <ul class="rate__list">
        <li v-for="(emp, key) of sorted" :key="key" class="rate__item">

          <!--            {{this.$store.state.bestEmployes}}-->
          <div class="rate__user">
            <div class="rate__info rate__info--avatar">
              <img :src="emp.avatar" alt="avatar">
            </div>
            <div class="rate__info rate__info--name">{{emp.firstName}} {{emp.secondName}}</div>
            <div class="rate__info rate__info--count">
              <div class="rate__bar-wrapper">
                <div class="rate__bar-bar" :style="{width: emp.userRate + '%'}"><span>{{emp.userRate.toFixed(2)}}%</span></div>
              </div>
<!--              <span>{{emp.userRate.toFixed(2)}}%</span>-->
              </div>
            <!--                <div class="rate__info rate__info&#45;&#45;total"></div>-->
          </div>
        </li>

      </ul>
    </section>
  </div>

</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      bestEmployes: JSON.parse(localStorage.getItem('bestEmp')) || [],
      // array: [],
      select: '',
      message: '',
      sortBy: [
        {position: 'sales manager'},
        {position: 'developer'},
        {position: 'marketing'},
        {position: 'HR'},
        {position: 'client support manager'},
        {position: 'account manager'},
        {position: 'SEO'},
      ]
      // bestEmployes: []
    }
  },
  methods: {
    sortManagers() {
      console.log(this.select);
      // let arr = [];
      // // let arr = this.bestEmployes;
      // // console.log(arr);
      // if (this.select === 'sales manager') {
      //   this.select = '';
      //   arr = this.bestEmployes.filter(item => item.position === 'sales manager');
      //   console.log(arr);
      //   this.bestEmployes = arr
      //   console.log(this.bestEmployes);
      // }
      // this.bestEmployes = [];
      // console.log(arr);
    }
  },
  computed: {
    sorted: function() {
      let arr = this.bestEmployes;
      arr.sort((a,b) => b.userRate - a.userRate);
      let res = [];
      for (let i = 0; i < 10; i++) {
        res.push(arr[i]);
      }
      return res;
      // return arr.sort((a,b) => b.userRate - a.userRate);
    }
  },
  created() {

    this.bestEmployes = JSON.parse(localStorage.getItem('bestEmp')) || [];
    // let total = JSON.parse(localStorage.getItem('total')) || 0;
    let profit = JSON.parse(localStorage.getItem('totalProfit')) || 0;
    this.$store.dispatch('changeProfit', profit);
    let orders = JSON.parse(localStorage.getItem('totalOrders')) || 0;
    this.$store.dispatch('changeOrders', orders);
    let popularity = JSON.parse(localStorage.getItem('brandPopularity')) || 0;
    this.$store.dispatch('changeBrandPopularity', popularity);

    let totalTasks = JSON.parse(localStorage.getItem('totalTasks')) || 0;
    this.$store.dispatch('changeTotalTasks', totalTasks);

    // this.bestEmployes = JSON.parse(localStorage.getItem('bestEmp')) || 0;
    // this.$store.dispatch('changeBestEmp', this.bestEmployes);
  }

}
</script>
