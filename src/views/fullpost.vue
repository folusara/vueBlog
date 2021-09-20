<template>
<div id="background">
    
        <div id="mainbody" >
            <img id="blogImage" :src="article[0].urlToImage" alt="">
            <h1 class="mt-5 text-justify justify-content-center font-weight-bold text-center  ">{{article[0].title}}</h1>
            <h6 class="text-uppercase  text-center mt-5">BY {{ article[0].author }} ||  published : {{ article[0].publishedAt }}</h6>
          <div id="content" class="mt-5 ">
                {{article[0].content}}
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
import  getNews   from '../newsservice/post';
export default {

    data(){
        return{
            blogId:"waiting",
            article:[{}],
            topNews:[]
        }
},
methods:{
       getArticle(blogId){
          
            getNews(blogId)
            .then( res =>{
                console.log(this.blogId);
                console.log(res.data.articles);
                this.article = res.data.articles.filter(blog=>{
                    return blog.title === blogId
                })
                console.log(this.article);
            }).catch(err=>{
                console.log(err);
            })
       }
},
   mounted(){
        let pm = this.$route.params;
        console.log(pm);
        this.blogId=pm.author
       this.getArticle(this.blogId)

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

</style>