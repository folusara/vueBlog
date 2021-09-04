<template>
<main>
  
  <div id="blackheader">
      <div id="welDiv">
            <h1>Welcome to the World's Number One Blog</h1>
          <p>Stay updated with the latest on politics,sports, religion, finance and Technology. </p>
          <router-link class="rout" to="/allblogs"> <el-button type="danger" round> View Blogs  <span class="fa fa-hand-point-right"></span>  </el-button> </router-link>        
      </div>
      <div  id="picDiv" >
        <img src="../assets/img/blogPic.png" alt="">
      </div>
  </div>
  
   <div id="second">
      <h1 >Publish your passions, your way!</h1>
      <p>Create a unique and beautiful blog. It's easy and totally free.</p>
    <router-link class="rout" to="/create">   <el-button type="danger" round>  Create Blog  <span class="fa fa-plus"></span> </el-button>   </router-link>      

   </div>
  
   <!-- <Footer  /> -->

</main>




</template>

<script>
import { Footer } from "@/components/footer.vue";
export default {
  components:{
    Footer
  }

}
</script>

<style>
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
</style>
