<template>
  <div>
      <table>
          <thead><h1>Gym Members: </h1></thead>
          <tbody>
              <tr class="card" v-for="user in userList" v-bind:key="user.username">
                  <td>{{user.username}}:
                  <button class="btn float-right btn-success" v-show="user.checkedIn.toUpperCase() == 'FALSE'" v-on:click="employeeStartWorkout(user)" data-container="body" data-toggle="popover" data-placement="right" data-content="User has been checked in.">Check-in</button>
                  <button class="btn float-right btn-danger" v-show="user.checkedIn.toUpperCase() == 'TRUE'" v-on:click="employeeEndWorkout(user)">Check-out</button>
                  <router-link class="btn btn-info float-right" v-bind:to="{name: 'workouts', params: {userId: user.userId}}">View Details</router-link>
                  </td>
                  
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'
import EmployeeService from '@/services/EmployeeService'

export default {
    name: "UserDisplay",
    props: {userList: Array},

    methods: {
        employeeStartWorkout(user) {
        WorkoutService.addDailyWorkout(user.userId).then((response) => {
            if(response.status === 200) {
                user.checkedIn = "TRUE";
            }
        })
    },
    employeeEndWorkout(user) {
        EmployeeService.employeeEndWorkout(user.userId).then((response) => {
            if (response.status ===200) {
                user.checkedIn = "FALSE";
            }
        })
    }
    }

    
}
</script>

<style scoped>
h1 {
    color: #d1cdc7;
    text-shadow: 1px 0 0 rgb(46, 46, 46), 0 -1px 0 rgb(46, 46, 46), 0 1px 0 rgb(46, 46, 46), -1px 0 0 rgb(46, 46, 46); 
}
.card{
    opacity: 95%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    margin-bottom: 2px;
    width: 375px;
    background-color: rgb(24,26,27);
    color: #d1cdc7;
}

button{
    align-content: right;
    margin-left: 10px;
    padding-right: 10px;
    padding-left: 10px;
    justify-items: center;
}

.btn-info{
    align-content: right;
    margin-left: 10px;
    padding-right: 10px;
    padding-left: 10px;
}

</style>