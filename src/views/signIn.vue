<template>
  <div id="bodyy">
      <div id="signIn" class="shadow">
          <div id="picDiv"></div>
           <div id="formDiv">
             <h4 class="fw-bolder mt-3 "> <span id="dev">Dev</span>Blogs</h4>
              <h2 class="">Hello there.</h2>
              <h5 class="text-center">Login to continue</h5>
                <div style="margin-top:-20px">
                  <el-form
                    @submit.prevent="submitForm()"   :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="50px" class="demo-dynamic">
                 
                    <el-form-item prop="email"   :rules="[
                        { required: true, message: 'Please input email address', trigger: 'blur' },
                        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                      ]"  >
                <div style="display:flex;flex-direction:row">
                  <Message />
                   <el-input id="inp" prefix-icon="el-icon-message" placeholder="Please input Email" v-model="dynamicValidateForm.email"></el-input>
                
                </div>
                 </el-form-item>
                   <el-form-item prop="password"  :rules="[
                        { required: true, message: 'Please input password', trigger: 'blur' },
                      ]"  >
                     <!-- <el-input placeholder="Please input password" v-model="input" show-password></el-input> -->
                     <el-input id="inp" placeholder="Please input password" show-password  v-model="dynamicValidateForm.password"></el-input>
                 </el-form-item>
                  <el-form-item>
                      <el-button type="danger"  prefix-icon="el-icon-password" id="butt" round @click="submitForm('dynamicValidateForm')">Submit</el-button>
                  </el-form-item>
                </el-form>

                </div>
            </div>
      </div>
     
  </div>
</template>

<script>
export default {
   data() {
      return {
        dynamicValidateForm: {
          email: '',
          password:''
        },
      }
    },
        methods: {
      submitForm(dynamicValidateForm) {
        this.$refs[dynamicValidateForm].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
          console.log(this.dynamicValidateForm);
          this.resetForm(dynamicValidateForm)
        })
      },
      resetForm(dynamicValidateForm) {
        this.$refs[dynamicValidateForm].resetFields()
      }
  }
}
</script>

<style>
#bodyy{
  /* background-color: rgb(247,247,247); */
  height: 700px;
  width: 101.5%;
  margin-top: -20px;
  margin-left: -15px;
  padding-top: 6%;
}

h4{
text-align: center;
}
h2{
text-align: center;
}
p{
text-align: center;
}

#inp{
  border-width: 0 0 1px 0;
  width: 400px;
  margin-bottom: -30px;
}


#butt{
 margin-top: -60px;
  width: 400px;
  margin-left: 20px;
}
#signIn{
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 450px;
  margin-left: 10%;
  margin-top: 0%;
}
#dev{
    color: red;
}
#picDiv{
  height: 450px;
  width: 50%;
  background-image: url("../assets/img/notepad-3297994.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: -0px;
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
  width: 200px;
  margin-left: -50px;
  margin-bottom: -30px;
}
#butt{
 margin-top: -60px;
  width: 200px;
  margin-left: -40px;
}

h4, p{
  text-align: center;
  margin-left: 30px;
}

}
</style>