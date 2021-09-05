<template>
<main>
  
  <div id="bodyy">
      <div id="sign" class="shadow">
        <div id="picDiv">

        </div>
        <div id="formDiv">
          <div id="signUp" class="btn">SignUp</div>
          <div id="Login" class="btn">Log In</div>

 
              <v-form @submit.prevent="signUp()" novalidate="true"  >   
                         
                   <div id="signform">
                         <p class="text-center">Get your free <span id="dev">Dev</span>Blogs account </p>
                          <error-message name="name"></error-message>
                         
            <v-field type="text" placeholder="Name" v-model="formData1.name" class="form-control bg-light m-3"></v-field>
            <v-field type="text" placeholder="Email" v-model="formData1.email" :rules="isRequired" class="form-control bg-light m-3"></v-field>
            <small>{{message}}</small>
            <v-field type="password" placeholder="Password" v-model="formData1.password" class="form-control bg-light m-3"></v-field>
            <button class="btn btn-success rounded  m-3 form-control"> <span v-show="loading" class="spinner-border"></span> Submit</button>
             <!-- <el-button type="danger" class="bro"  round> <span v-show="loading" class="spinner-border"></span>  Sign Up <span class="fa fa-user-plus"></span></el-button> -->

                   </div>
              </v-form>
              <form @submit.prevent="signIn()"  >            
                   <div id="signform">
                         <h3 class="display-5 text-center">Log in to <span id="dev">Dev</span>Blogs </h3>
                         
        
            <input type="text" placeholder="Email" v-model="formData2.email" class="form-control bg-light m-3">
            <input type="password" placeholder="Password" v-model="formData2.password" class="form-control bg-light m-3">
            <button class="btn btn-success border-2  m-3 form-control"> <span v-show="loading" class="spinner-border"></span> Submit</button>

                   </div>
              </form>
             
        </div>
      </div>
  </div>

</main>
</template>

<script>
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
export default{
  data(){
    return{
       formData1:{
         name:"",
         email:"",
         password:""
    },
    formData2:{
        email:"",
         password:""
    },
    loading:false,
    message:"",
     errors: [],
    }
  },
   setup: () => ({ v$: useVuelidate() }),
  validations () {
    return {
      formData1: {
        name: { required },
        email: { required, email }
      },
       formData2:{
         name: { required },
        email: { required, email }
    },
    }
  },
  methods:{
    signUp(){
     
        console.log(this.formData1);
       
    },
     signIn(){
        console.log(this.formData2);
    },
    // emailValid(){
    //     var mailFormat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    //     if(this.formData1.email.match(mailFormat)){
    //      this.message="Valid Email Address"
    //     }
    //        return  this.message="Invalid Email Address"  
       
    // },
  }
}

</script>

<style>
#bodyy{
  /* background-image: url("../assets/img/notepad-3297994.jpg"); */
  background-repeat: none;
  background-size: cover;
  height: 570px;
  width: 99%;

  padding-top: 100px;
}

.bro{
 margin-left: 30px;
  }
#signform{
  width: 400px;
}

#inp{
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  width: 400px;
}
#sign{
height: 450px;
width: 80%;
margin-left: 10%;
/* background-color: white; */
display: flex;
flex-direction: row;
}

#picDiv{
    background-image: url("../assets/img/office-581131_1920.jpg");
  background-repeat: none;
  background-size:cover;
  height: 450px;
  width: 51%;
  margin-top:0px ;
  margin-left: 0px;
}

#formDiv{
   height: 450px;
  width: 54%;
  background-color: white;
  margin-top: -0px;
  text-align: center;
}
h3{
  margin-top: 50px;
}

#dev{
    color: red;
}

</style>