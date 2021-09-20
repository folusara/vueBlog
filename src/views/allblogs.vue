<template>
  <h1 class="text-center display-5 mt-3">Read Top Stories at this Hour</h1>
       <el-skeleton v-show="loaded" :rows="5" animated />
       <el-skeleton v-show="loaded" :rows="5" animated />
  <div id="newss">
        <div id="topnewsCard" class="d-flex flex-row flex-wrap ">
          <div class="card shadow"  v-for="blog in blogData" :key="blog.id"  style="width: 20rem;">
          <img class="card-img-top" :src="blog.image" alt="Card image cap">
            <div class="card-body">
               <span id="deleteSpan" class="fa fa-trash-alt fa-2x hover" @click="deletePost(blog.id)" style="color:rgb(245,108,108);float:right"></span> 
              <h5 class="card-title "><strong> {{ blog.title }} </strong></h5>
               <p  id="descriptionn" class="card-text "> {{ blog.content.substring(0,100) + "..." }} </p>          
              <router-link class="rout" :to="'/fullblog/' + blog.id" ><el-button type="danger" style="margin-left:50px"  round class="button">View Post</el-button> </router-link>          
             </div>
          </div> 
        </div>
   </div>
  
</template>

<script>
import { allposts } from '../service/post'
import { deletee } from '../service/post'

export default {
  data(){
    return{
      blogData:[],
      loaded:false
    }
  },
  methods:{
     deletePost(id){
       let formData={id:id}
      deletee(formData).then(res=>{
        console.log(res);
         allposts().then(res=>{
      console.log(res);
        this.blogData = res.data.posts 
        this.loaded=false
        console.log(this.blogData); 
    }).catch(err => {
      console.log(err);
    })
      }).catch(err=>{n
        console.log(err);
      })
   }
  },
  mounted(){
      this.loaded=true
    allposts()
    .then(res=>{
      console.log(res);
        this.blogData = res.data.posts 
        this.loaded=false
        console.log(this.blogData); 
    }).catch(err => {
      console.log(err);
    })
  
  }

}
</script>

<style>
#descriptionn{
     width: 300px;
  /* padding: 15px; */
     text-align: justify;
     margin-left: 5px;
  
  }
  #deleteSpan{
    cursor: pointer;
  }
  .card-title{
   margin-left: 2px;
 }
 #newss{
    margin-left: 15%;
      
  }
  .card-body{
 overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 20px;
  }
  
  #top{
    width: 300px;
    text-align: justify;
    margin-right: 20px;
    margin-left: 20px;

  }
</style>