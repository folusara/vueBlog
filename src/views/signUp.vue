<template>

  <div id="bodyyy">
      <div id="signUp" class="shadow mt-2">
           <div id="formDiv">
           
            
              <h3 class="mt-5" >Sign Up with <span id="dev">Dev</span>Blogs</h3>
                <div style="margin-top:20px">
                  <el-form
                    @submit.prevent="submitForm()"   :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="50px" class="demo-dynamic">
                   <el-form-item prop="name"   :rules="[
                        { required: true, message: 'Please input Your name', trigger: 'blur' },
                     ]"  >          
                   <el-input id="inp" prefix-icon="el-icon-user-solid" placeholder="Please input your name" v-model.lazy.trim="dynamicValidateForm.name"></el-input>
                 </el-form-item>
                    <el-form-item prop="email"   :rules="[
                        { required: true, message: 'Please input email address', trigger: 'blur' },
                        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                      ]"  >          
                   <el-input id="inp" prefix-icon="el-icon-message" placeholder="Please input Email" v-model.lazy.trim="dynamicValidateForm.email"></el-input>
                 </el-form-item>
                   <el-form-item prop="password"  :rules="[
                        { required: true, message: 'Please input password', trigger: 'blur' },
                      ]"  >
                     <!-- <el-input placeholder="Please input password" v-model.lazy.trim="input" show-password></el-input> -->
                     <el-input id="inp" placeholder="Please input password" show-password  v-model.lazy.trim="dynamicValidateForm.password"></el-input>
                 </el-form-item>
                  <el-form-item>
                      <el-button type="danger"  prefix-icon="el-icon-password" id="butt" round @click="submitForm('dynamicValidateForm')">Submit</el-button>
                  </el-form-item>

                  <router-link class="rout" to="/signin"> <h5> Have a <span id="dev">Dev</span>Blogs account? Log In </h5></router-link>
                </el-form>

                </div>
            </div>
            <div id="picDiv"></div>
      </div>
     
  </div>
</template>

<script>

import { signUp } from '../service/post'
export default {
   data() {
      return {
        dynamicValidateForm: {
          name:'',
          email: '',
          password:''
        },
        objform:{}
      }
    },
        methods: {
      submitForm(dynamicValidateForm) {
        // this.$refs[dynamicValidateForm].validate((valid) => {
        //       if (valid) {
    
            // alert('submit!');
              // this.objform = Object.fromEntries(this.$refs[dynamicValidateForm])
              // console.log(this.dynamicValidateForm);
              // console.log(this.objform);
          // this.resetForm(dynamicValidateForm);

          // } else {
          //   console.log('error submit!!')
          //   return false
          // }
          signUp(this.dynamicValidateForm).then(res =>{
            console.log(res);
              this.$router.push('/')
          }).catch(err =>{
            console.log(err.response);
          })
                   
        }
       

         
         
      }//,
      // resetForm(dynamicValidateForm) {
      //   this.$refs[dynamicValidateForm].resetFields()
      // }
}
</script>

<style>
#bodyyy{
  background-color: rgb(247,247,247); 
  /* background-image: url('../assets/img/andrew-neel-cckf4TsHAuw-unsplash.jpg'); */
  height: 700px;
  width: 101.5%;
  margin-top: -20px;
  margin-left: -15px;
  padding-top: 5%;
}
a{
  color: black;
}
.rout{
  color: black;
  text-align: center;
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

#inp{
  border-width: 0 0 1px 0;
  width: 300px;
  margin-bottom: -30px;
}

#inp3{
  border-width: 0 0 1px 0;
  width: 200px;
  margin-bottom: -30px;
}

#butt{
 margin-top: -60px;
  width: 300px;
  margin-left: 20px;
}
#signUp{
  display: flex;
  flex-direction: row;
  width: 69%;
  height: 550px;
  margin-left: 15%;
 
}
#dev{
    color: red;
}
#picDiv{
  height: 550px;
  width: 50%;
  background-image: url("../assets/img/pexels-miguel-á-padriñán-1591056.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 0px;
  margin-top: 0px;
  
}
#formDiv{
  height: 450px;
  width: 50%;
  /* background-image: url("../assets/img/notepad-3297994.jpg");
  background-repeat: no-repeat;
  background-size: cover; */
  margin-left: -0px;
  margin-top: 0px;

}
@media only screen and (max-width: 700px) {
   #picDiv{
        display: none;
    }
    #inp{
  border-width: 0 0 1px 0;
  width: 300px;
  margin-left: -50px;
  margin-bottom: -30px;
}
#butt{
 margin-top: -60px;
  width: 300px;
  margin-left: -40px;
}
#signUp{
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
  #signUp{
  width: 100%;
 
  margin-top: 20px;
}
h3{
text-align: center!important;
margin-left: 70px;
width: 200px;
font-size: 20px !important;
}
@media only screen and (max-width:360px) {
  #signUp{
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
  #signUp{
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




