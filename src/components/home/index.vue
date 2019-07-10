<template>
  <main class="main">
      <input type="text" name="" id="" ref="ipt">
      <ul v-for="slide in listdata" :key="slide.id" class="content">
          <li>
             {{slide.imgUrl}}
          </li>
          <li>
              <h3>{{slide.title}}</h3>
              <p>{{slide.des}}</p>
              
          </li>
          <li>
              {{slide.time}}
          </li>
      </ul>
  </main>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return {
        listdata:[]
    }
},
    mounted(){
       this.getdata()
    },
    methods:{
        getdata(){
             axios.get('/getlist').then(res =>{
                 this.listdata=res.data.data
            console.log(res.data.data)
        })
        }
    }
}
</script>

<style>
.content{
    width: 95%;
    height: calc(1.2rem*2);
    display: flex;
    margin: 10px auto;
}

.content li:nth-child(1){
    flex: 2;
}
.content li:nth-child(2){
    flex: 6;
    
}
.content li:nth-child(3){
    flex: 2;
}
</style>
