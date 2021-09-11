<template>
      <main>
          <article>
              <div> {{blogId}} </div>
              <div>{{ article.title}}</div>
              <div class="blogBody">
                  {{article.description}}
              </div>
          </article>
      </main>
</template>

<script>
import  getNews   from '../newsservice/post'
export default {

    data(){
        return{
            blogId:"waiting",
            article:{}
        }
},
methods:{
       getArticle(blogId){
          
            getNews(blogId)
            .then( res =>{
                console.log(this.blogId);
                console.log(res.data.articles);
                this.article = res.data.articles.filter(blog=>{
                    return blog.author === blogId
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
    }

}
</script>

<style>

</style>