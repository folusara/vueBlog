<template>
  <div id="signInbody">
      <div id="signIn" class="shadow">
          <div id="signInpicDiv"></div>
           <div id="formDiv">
           
            
              <h3 class="mt-5" >Log in to <span id="dev">Dev</span>Blogs</h3>
                <div style="margin-top:-20px">
                  <el-form
                    @submit.prevent="submitForm()"   :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="50px" class="demo-dynamic">
                 
                    <el-form-item prop="email"   :rules="[
                        { required: true, message: 'Please input email address', trigger: 'blur' },
                        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                      ]"  >
               
                   <el-input id="inp1" prefix-icon="el-icon-message" placeholder="Please input Email" v-model="dynamicValidateForm.email"></el-input>
                 </el-form-item>
                   <el-form-item prop="password"  :rules="[
                        { required: true, message: 'Please input password', trigger: 'blur' },
                      ]"  >
                     <!-- <el-input placeholder="Please input password" v-model="input" show-password></el-input> -->
                     <el-input id="inp" placeholder="Please input password" show-password  v-model="dynamicValidateForm.password"></el-input>
                 </el-form-item>
                  <el-form-item>
                      <el-button type="danger"  prefix-icon="el-icon-password" id="butt" round @click="submitForm()">
                     <span id="spinner" v-show="loading" class="spinner-border"></span>
                      Submit</el-button>
                  </el-form-item>

                      <router-link class="rout" to="/signup"> <h5> You do not have a <span id="dev">Dev</span>Blogs account? Sign Up </h5></router-link>
                </el-form>

                </div>
            </div>
      </div>
     
  </div>
</template>

<script>
import { signIn } from '../service/post'

export default {
  props:{
        loggedIn:false
  },
   data() {
      return {
        dynamicValidateForm: {
          email: '',
          password:''
       
      },
      loading:false
    }
   }
    ,
        methods: {
      submitForm(dynamicValidateForm) {
        // this.$refs[dynamicValidateForm].validate((valid) => {
        //   if (valid) {
        //     alert('submit!')
        //   } else {
        //     console.log('error submit!!')
        //     return false
        //   }
        //   console.log(this.dynamicValidateForm);
        //   this.resetForm(dynamicValidateForm)
        // })
         this.loading=true
         console.log(this.dynamicValidateForm);
          // this.resetForm(dynamicValidateForm)
            signIn(this.dynamicValidateForm).then(res =>{
            console.log(res);
            localStorage.setItem("token", res.data.token);
          this.loggedIn=true;
           this.loading=false
            this.$router.push('/')
          }).catch(err =>{
            console.log(err);
             this.loading=false
          })
      }
      
      // resetForm(dynamicValidateForm) {
      //   this.$refs[dynamicValidateForm].resetFields()
      // }
  }
}
</script>

<style>
#spinner{
  height: 20px;
  width: 20px;
}
#signInbody{
   background-image: url("../assets/img/stil-flRm0z3MEoA-unsplash.jpg"); 
  height: 700px;
  width: 101.5%;
  margin-top: -20px;
  margin-left: -15px;
  padding-top: 6%;
}

h3{
text-align: center;
margin-top: 50px;
}
h2{
text-align: center;
}
p{
text-align: center;
}
h5{
  
  width: 100%;
}

#inp1{
  border-width: 0 0 1px 0;
  width: 300px;
  margin-bottom: -30px;
  margin-left: -0px;
}
#inp{
  border-width: 0 0 1px 0;
  width: 300px;
  margin-bottom: -30px;
  margin-left: 0px;
}


#butt{
 margin-top: -60px;
  width: 400px;
  margin-left: 0px;
}
#signIn{
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 450px;
  margin-left: 15%;
  margin-top: 0%;
}

#dev{
    color: red;
}

a{
  color: black;
}
.rout{
  color: black;
  text-align: center;
}
#signInpicDiv{
  height: 450px;
  width: 50%;
  background-image: url("../assets/img/stil-flRm0z3MEoA-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: -0px;
  margin-top: 0px;

}
#formDiv{
  height: 450px;
  width: 55%;
  margin-left: -0px;
  margin-top: 0px;

}
@media only screen and (max-width: 700px) {
   #signInpicDiv{
        display: none;
    }
    #inp{
  border-width: 0 0 1px 0;
  width: 300px;
  margin-left: -60px !important;
  margin-bottom: -30px;
}
  #inp1{
  border-width: 0 0 1px 0;
  width: 300px;
  margin-bottom: -30px;
  margin-top: 30px;
  margin-left: -60px !important;
}
#butt{
 margin-top: -60px;
  width: 300px;
  margin-left: -40px;
}
#signIn{
  width: 100%;
  margin-left: 10px;
  margin-top: 20px;
}

h3{
text-align: center!important;
margin-left: 50px;
font-size: 20px !important;
}

h4, p{
  text-align: center;
  margin-left: 30px;
}

}
@media only screen and (max-width:414px) {
  #inp1{
  border-width: 0 0 1px 0;
  width: 300px;
  margin-bottom: -30px;
  margin-left: -40px;
}
  #inp{
  border-width: 0 0 1px 0;
  width: 300px;
  margin-bottom: 30px;
  margin-left: -40px;
}

  #signIn{
  width: 100%;
 
  margin-top: 20px;
}
h3{
text-align: center!important;
margin-left: 70px;
width: 200px;
font-size: 20px !important;
}
#butt{
 margin-top: -60px;
  width:  300px !important;
  margin-left: -40px !important;
}
h5{
  width: 100% !important;
text-align: center!important;
margin-left: 70px;
font-size: 15px !important;
}
@media only screen and (max-width:360px) {
  #signIn{
  width: 100%;
 
  margin-top: 20px;
}
h3{
text-align: center!important;
margin-left: 70px;
width: 200px;
font-size: 20px !important;
}
}
@media only screen and (max-width:375px) {
  #signIn{
  width: 100%;
  
  margin-top: 20px;
}
    #inp{
  border-width: 0 0 1px 0;
  width: 250px;
  margin-left: -50px;
  margin-bottom: -30px;
}
#butt{
 margin-top: -60px;
  width: 250px;
  margin-left: -40px;
}
h3{
text-align: center!important;
margin-left: 70px;
width: 200px;
font-size: 20px !important;
}
}
}
</style>