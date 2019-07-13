<template>
  <main class="main">
    <input type="text" v-model="keyword"/>
    <div class="box">
         <ul>
        <li v-for="value in fSearch" :key="value.id">
            <p>{{value.title}}</p>
        </li>
    </ul>
    </div>
    <ul v-for="slide in listdata" :key="slide.id" class="content">
      <li>{{slide.imgUrl}}</li>
      <li>
        <h3>{{slide.title}}</h3>
        <p>{{slide.des}}</p>
      </li>
      <li>{{slide.time}}</li>
    </ul>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      listdata: [],
      keyword:''
    };
  },
  //设置计算属性
  computed:{
      fSearch(){
          if(this.keyword){
            return this.listdata.filter((value)=>{  //过滤数组元素
            // console.log(value.title)
                    return value.title.includes(this.keyword); //如果包含字符返回true
            });
          }
      }
  },
  mounted() {
    this.getdata()
  },
  methods: {
    getdata() {
      axios.get("/getlist").then(res => {
        this.listdata = res.data.data;
        console.log(res.data.data);
      });
    }
  }
};
</script>

<style>
.content {
  width: 95%;
  height: calc(1.2rem * 2);
  display: flex;
  margin: 10px auto;
}

.content li:nth-child(1) {
  flex: 2;
}
.content li:nth-child(2) {
  flex: 6;
}
.content li:nth-child(3) {
  flex: 2;
}
</style>
