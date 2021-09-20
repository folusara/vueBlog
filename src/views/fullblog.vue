<template>
<div id="background">
    
    <div id="mainbody" >
     <img id="blogImage" :src="currentBlog.image" alt="">
      <h1 class="mt-5 text-justify justify-content-center font-weight-bold text-center  ">{{currentBlog.title}}</h1>
      <h6 class="text-uppercase  text-center mt-5">BY {{ currentBlog.author }} ||  published : {{ currentBlog.created_at }}</h6>
      <div id="content" class="mt-5 ">
        {{currentBlog.content}}
      </div>
      <div>
        <h1 class="display1">Read other exciting stories today</h1>
       <el-skeleton v-show="loaded" :rows="5" animated />
       <div v-for="news in topNews" :key="news.title">
          <div class="flex flex-row p-3 mt-3"  >
             <img id="newsImage" :src="news.urlToImage" alt="">
              <h1 id="newsTitle" class=" pb-3 font-weight-bold  display-6 text-center ">{{news.title}}</h1>
         </div>
              <router-link  class="rout" :to="'/fullpost/' + news.title" ><el-button type="danger" style="margin-left:600px"  round class="button">View Post</el-button> </router-link>
         <hr class="mt-3"> 
       </div>
      
      </div>
    </div>
</div>
</template>

<script>
import getNews from '../newsservice/post';
import { getPost } from '../service/post';
export default {
data(){
    return{
      currentBlog:{},
      blogTitle:"waiting",
      topNews:[]
    }
},
methods:{
      getFullPost(id){
          getPost(id).then(res=>{
            console.log(res);
                this.currentBlog = res.data.posts;
          }).catch(err=>{
            console.log(err);
          })
      },
    
},

mounted(){
        let pm = this.$route.params;
        console.log(pm);
        this.blogId=pm.id
        // this.getOtherNews()
       this.getFullPost(this.blogId) 

          this.loaded=true
        getNews()
        .then( res => {
          console.log(res);
          this.topNews=res.data.articles
           this.loaded=false
        })
        .catch(err=>{
          console.log(err);
        }) 
       
    }
}
</script>

<style>
#mainbody{
  width: 60%;
  margin-left: 20%;
  margin-left: 20%;
  background-color: white;
  border-radius: 20px;
  margin-top: 50px;
}
#newsTitle{
  text-align: center;
  text-align: justify;
}
#background{
 
}
#blogImage{
  height: 300px;
  width: 100%;
  border-radius: 20px;
  /* margin-left: 200px; */
}
#newsImage{
  height: 200px;
  width: 50%;
  float: left;
  border-radius: 20px;
  /* margin-left: 200px; */
}
#content{
  text-align: justify;
  width: 100%;
  margin-left: -0px;
}
</style>