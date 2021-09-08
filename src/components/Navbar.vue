<template>
  <main>
            <el-menu  id="navbarNavAltMarkup"   background-color="white"
                    text-color="rgb(28,35,44)"
                    active-text-color="red"
                    class="el-menu-demo" mode="horizontal" >
                             <el-menu-item class="itemM"  index="1"> <router-link to="/" >  <span class="fw-bolder" id="dev">Dev</span><span class="fw-bolder">Blogs</span> </router-link> </el-menu-item>
                           <el-menu-item class="itemM"  style="margin-left:400px" index="2">  <router-link to="/"> Home </router-link>  </el-menu-item>
                            <el-menu-item v-show="loggedIn" class="itemM" index="3">  <router-link to="/create"> Create Blog </router-link>  </el-menu-item>     
                            <el-menu-item class="itemM" index="4" > <router-link to="/allblogs">  Blogs </router-link> </el-menu-item>
                            <el-menu-item class="itemM" index="5"><router-link to="/contact"> Contact </router-link></el-menu-item>
                            <el-row class="butt" style="margin-left:300px">   
                            <!-- <div class="line"></div>    -->
                             <router-link to="/signin"> <el-button v-show="loggedIn==false"   plain round> Log In <span class="fa fa-sign-in-alt"></span></el-button></router-link> 
                              <router-link to="/signup">  <el-button  v-show="loggedIn==false"    style="margin-left:20px" type="danger" class="bro"  round> Sign Up <span class="fa fa-user-plus"></span></el-button>  </router-link>     
                            </el-row>
                    
                  
            </el-menu>

     <router-view/>
  </main>
</template>

<script>
export default {
      props:{
        loggedIn:false
  },
    data(){
        return{
         loggedIn:false
        }
    },
    methods:{

    },
    mounted(){

    }

}
</script>

<style>
/* nav{
    background-color: white;
    color: black;
    height: 70px;
    align-content: flex-end;
    border-style: solid;
    border-bottom-color: rgb(213,224,213);
    border-bottom-width: 1px;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
} */
#dev{
    color: red;
}



:link{
    text-decoration: none;
    font-weight: 300;

}

.bro{
    margin-left: 50px;
}

.itemM{
    color: white;
}

#navbarNavAltMarkup{
   display: flex;
   flex-direction: row;
    align-content: flex-end;
}

@media only screen and (max-width: 700px) {
    .butt{
        margin-left: 0px !important;
    }
}
</style>