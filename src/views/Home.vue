<template>
<main>
  
  <div id="blackheader">
      <div id="welDiv">
            <h1>Welcome to the World's Number One Blog</h1>
          <p>Stay updated with the latest on politics,sports, religion, finance and Technology. </p>
          <router-link class="rout" to="/allblogs"> <el-button type="danger" round> View Blogs  <span class="fa fa-hand-point-right"></span>  </el-button> </router-link>        
      </div>
      <div  id="picDiv" class="animated fadeInUp" >
        <img src="../assets/img/blogPic.png" alt="">
      </div>
  </div>
  
   <div id="second">
      <h1 >Publish your passions, your way!</h1>
      <p>Create a unique and beautiful blog. It's easy and totally free.</p>
    <router-link class="rout" to="/create">   <el-button type="danger" round>  Create Blog  <span class="fa fa-plus"></span> </el-button>   </router-link>      

   </div >

   <div id="topnews">
     <h1>Top Stories today...</h1>
       <el-row id="topNews">
          <el-skeleton v-show="loaded" :rows="5" animated />
            <el-col :span="7"     v-for="news in topNews" id="car"   :key="news.source.id" >
              <el-card class="animated fadeIn"  id="card"  shadow="hover" style="width:110%; padding:'50px';" :body-style="{ padding: 'px'}">
                <img :src="news.urlToImage" class="image" />
                <div id="top" >
                  <h6 :href="news.url" target="_blank"> <strong>{{ news.title}}</strong> </h6>
                </div>
                <div class="bottom">
                    <h3>{{news.id}}</h3>
                    <h6 id="description">{{ news.description.substr(0,100) + "..." }}</h6>
                    <router-link class="rout" :to="'/fullpost/'+ news.source.id " ><el-button type="danger" style="margin-top:30px;margin-left:130px" round class="button">View Post</el-button> </router-link>
               </div>
              
              </el-card>
            </el-col>
        </el-row>
   </div>
  
   <!-- <Footer  /> -->

</main>




</template>

<script>
import  getNews   from '../newsservice/post'
import { Footer } from "@/components/footer.vue";
export default {
  components:{
    Footer
  },
  data(){
    return{
    topNews:[],
    loaded:false
    }
  },
  methods:{
 
  },
  mounted(){
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
 .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  
  #topNews{
    margin-left: 120px;
  }
  #top{
    width: 300px;
    text-align: justify;
      margin-right: 20px;
      margin-left: 20px;

  }
    #top > h6{
    
    width: 300px;
     margin-left: -10px;
    /* margin-right: 170px; */
  }
  #description{
     width: 300px;
  /* padding: 15px; */
     text-align: justify;
      margin-right: 20px;
      margin-left: -70px;
     
  }

  .button {
    padding: 0;
    margin-left: -200px;
    min-height: auto;
  }

  .image {
    width: 450px;
    margin-left: -30px;
    margin-top: -50px;
    height: 200px;
    display: block;
  }
#blackheader{
  display: flex;
  flex-direction: row;
  /* text-align: center; */
  height: 350px;
  width: 100%;
  margin-top: -20px;
  margin-left: -0px;
  color:rgb(28,35,44);
  background-color:white; 
  padding-top: 100px;
  /* padding-bottom: 170px; */
  padding-left: 170px ;
}

#second{
  margin-top: 300px;
  height: 350px;
  width: 100%;
  background-color: rgb(28,35,44);
  color: white;
  text-align: center;
  padding-top: 100px;
}

.rout{
color: white;
}

.rout:hover{
  color:rgb(245,108,108) ;
  background-color: white;
  border-radius: 40px;
}
/* :link{
    text-decoration: none;
    font-weight: 300;
color: white;
} */

a{
  color: white;
}

#picDiv{
  margin-top: -50px;
}
#welDiv{
  margin-left: -50px;
  margin-top: 30px;
}

#welDiv > h1{
font-size: 70px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#welDiv  > p{
  font-weight: 20;
  font-size: 30px;
}
#second > h1{
font-size: 50px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#second  > p{
  font-weight: 20;
  font-size: 20px;
}
#learn{
  margin-top: 70px;
}

@media only screen and (max-width: 600px) {
 #blackheader{
   display: flex;
   flex-direction: column;
 }
 #picDiv{
   display: none;
 }
 #card{
   margin-right: 1000px;
   width: 200% !important;
 }
 #car{
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
 }
 #welDiv > h1{
font-size: 30px;
margin-top: -80px;
margin-left: -100px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#welDiv  > p{
  font-weight: 20;
  font-size: 20px;
margin-left: -100px;

}
#second > h1{
font-size: 20px;
margin-top: -50px;
margin-left: -0px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#second  > p{
  font-weight: 20;
  font-size: 15px;
}

#second{
  margin-top: -20px;
  margin-left: -2%;
  width: 105%;
  height: 250px;
}
}
</style>
