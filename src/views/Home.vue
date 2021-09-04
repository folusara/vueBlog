<template>
<main>
  
  <div id="blackheader">
      <div id="welDiv">
            <h1>Welcome to the World's Number One Blog</h1>
          <p>Stay updated with the latest on politics,sports, religion, finance and Technology. </p>
           <el-button type="danger" round> Learn More   <span class="fa fa-hand-point-right"></span></el-button>       

         
      </div>
      <div  id="picDiv" >
        <img src="../assets/img/blogPic.png" alt="">
      </div>
  </div>
   <Footer  />
  
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
#learn{
  margin-top: 70px;
}
</style>
