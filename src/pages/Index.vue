<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-btn title="axios" @click="login"/>
      <q-input
        v-model="newTask"
        @keyup.enter="addTask"
        class="col"
        square
        filled
        bg-color="white" placeholder="Add task"
        dense>
        <template v-slot:append>
          <q-btn round dense flat icon="add" @click="addTask"/>
        </template>
      </q-input>
    </div>
    <q-list class="bg-white" separator bordered>
      <q-item v-for="(task,index) in tasks" :key="index" @click="task.done=!task.done"
              :class="{'done bg-blue-1' : task.done}" clickable v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="task.done" class="no-pointer-events" color="primary"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn @click.stop="deleteTask(index)"
                 flat round dense color="primary" icon="delete"/>
        </q-item-section>

      </q-item>
    </q-list>
    <div v-if="!tasks.length"
         class="no-tasks absolute-center">
      <q-icon name="check"
              size="100px" color="primary"/>
      <div class="text-h5 text-primary text-center">
        No tasks
      </div>
    </div>
  </q-page>
</template>

<script>
import {axiosInstance} from 'boot/axios'
//import { LocalStorage } from 'quasar'
  export default {
    data() {
      return {
        newTask: '',
        tasks: [],
       // loggedIn:localStorage.getItem('loggedIn'),
      }
    },
    methods: {
      deleteTask(index) {
        {
          this.$q.dialog({
            title: 'Confirm',
            message: 'Really delete?',
            cancel: true,
            persistent: true
          }).onOk(() => {
              this.tasks.splice(index, 1)
              this.$q.notify('Task deleted')
            }
          )
        }
      },
      addTask() {
        // check if task name is empty
        if (!this.newTask.length) {
          this.$q.notify({message: 'Task can\'t be empty.', type: 'negative'})
          return;
        }

        // check if task already exist
        let taskExist = this.tasks.filter((item) => {
          return item.title === this.newTask
        })

        console.log(taskExist)
        if (taskExist.length) {
          this.$q.notify({message: 'Task already exist with the same name..', type: 'negative'})
          return;
        }

        this.tasks.push({
          title: this.newTask,
          done: false
        })
        this.newTask = ''

        
      },

   login(){

    axiosInstance.get('/sanctum/csrf-cookie')
            .then(response => {
       
                  axiosInstance.post('/api/login',{
                        email:"admin@admin.com",
                        password:"password",
                      })
                      .then(res=>{
              
                      //LocalStorage.setItem('loggedIn','true');
                     // this.loggedIn=true;
                      console.log(res.data)
                   axiosInstance.get('/api/user')
                         .then(resp=>console.log(resp.data));
                 });
            //      console.log(response)
         });
       
      }
    }
  }
</script>
<style lang="scss">
  .done {
    .q-item__label {
      text-decoration: line-through;
      color: #bbb;
    }

    .no-tasks {
      opacity: 0.5;
    }
  }
</style>
