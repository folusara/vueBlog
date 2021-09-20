<template>
 
 <div id="bodyy" class="mt-0">
     <div id="modal"  class="shadow mt-0 w-50">
          
            <el-form  :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="50px" id="formm" style="margin-top:0px; padding-top:50px" class="demo-dynamic">
                      <h1 class=" font-weight-bold text-center">Publish your Blog! </h1>
                       <h6 class="text-center">Publish your content, your way!</h6>
                <el-form-item prop="name"  >
                   <el-input class="inp" style="width:400px" prefix-icon="el-icon-edit" placeholder="Write the title of your article" v-model="dynamicValidateForm.title"></el-input>
                 </el-form-item>
                  <el-form-item prop="name"  >
                     <el-input class="inp" style="width:400px" placeholder="Please write your name as the Author" prefix-icon="el-icon-user-solid" v-model="dynamicValidateForm.author"></el-input>
                 </el-form-item>
                   <!-- <div   style="max-width:410px" id="content" class=" bg-light" contenteditable="true">
                        Write your article, your way!
                   </div>   -->
                   <textarea placeholder="title" name="" id="content" class=" bg-light" cols="10" rows="10"></textarea>             
                   <div id="buttdiv"  style="margin-left:250px">
                     <button class="btn m-1" style="background-color:red;color:white" @click.prevent="boldd()"> B</button>
                    <button class="btn m-1"  style="background-color:red;color:white" @click.prevent="I()"> I</button>
                    <button class="btn m-1"  style="background-color:red;color:white" @click.prevent="U()"> U</button>
                    <button class="btn m-1"  style="background-color:red;color:white" @click.prevent="H1()"> H1</button>

                   </div>
                  <el-form-item prop="name"  >
                   <el-input class="inp" style="width:400px"  prefix-icon="el-icon-picture" placeholder="Please Uplooad a URL to an Image for your article" v-model="dynamicValidateForm.image"></el-input>
                 </el-form-item>

                     <el-button 
                    prefix-icon="el-icon-password"
                      id="butt" style="width:400px;margin-left:160px;margin-top:-30px;background-color:red;color:white" round @click.prevent="publish()"> 
                       <span id="spinner" v-show="loading" class="spinner-border "></span> Submit</el-button>

            </el-form> 

<!-- 
            <form @submit.prevent="publish()" class="form-group container w-75 p-5">
              <h2 class="display-5 text-center">Publish your Blog! </h2>
              <h6 class="text-center">Publish your content, your way!</h6>
            <input type="text" placeholder="Title" v-model="dynamicValidateForm.title" class="form-control bg-light m-3">
               <input type="text" placeholder="Author" v-model="dynamicValidateForm.author" class="form-control bg-light m-3">
     
            <div  placeholder="title" style="height:300px; max-width:410px" id="content" class="form-control bg-light m-3" contenteditable="true">

            </div>
                   <button class="btn btn-danger m-1" @click="boldd()"> B</button>
              <button class="btn btn-danger m-1" @click="I()"> I</button>
                <button class="btn btn-danger m-1" @click="U()"> U</button>
                <button class="btn btn-danger m-1" @click="H1()"> H1</button>
            <input type="text" placeholder="Image Link"  v-model="dynamicValidateForm.image" class="form-control bg-light m-3">
            <button class="btn btn-success border-2  m-3 form-control"> <span v-show="loading" class="spinner-border"></span> Publish</button>
            <el-button type="danger"   prefix-icon="el-icon-password" id="butt" style="width:400px" round @click="submitForm('dynamicValidateForm')">  <span v-show="loading" class="spinner-border"></span>Submit</el-button>

        </form> -->
    </div>
 </div>
</template>

<script>
import { addPost } from '../service/post'
export default {
data(){
    return{
     dynamicValidateForm:{
            title:"",
            content:"",
            image:"",
            author:""
     },
     loading:false
    }
},
methods:{
    boldd(){
        document.execCommand("bold")
    },
     I(){
        document.execCommand("italic")
    },
     U(){
        document.execCommand("underline")
    },
      H1(){
        document.execCommand("formatBlock",true,"<h1>")
    },

    publish(){
       this.loading=true
        this.dynamicValidateForm.content= document.getElementById("content").innerHTML;
        console.log(this.dynamicValidateForm.content);
        console.log(this.dynamicValidateForm);
       
        addPost(this.dynamicValidateForm)
        .then(res=>{
            console.log(res);
             this.loading=false
             this.$notify({
               title: "Log_in",
               message: res.data.message,
               type: "success"
             });
             this.$router.push({path:"allblogs"})
        }).catch(err=>{
            console.log(err.response);
              this.$notify({
               title: "Log_in",
               message: err.response.data.message,
               type: "warning"
             });
             this.loading=true
        })
    }
}
}
</script>

<style>
#modal{
   margin-left:25%; 
   border-radius: 20px;
   color: black;
   /* background-color:white  */
   opacity: 1;
   padding-bottom: 50px;
   margin-top: 50px;
}
#spinner{
  height: 20px;
  width: 20px;
}
h2{
  margin-top: 40px;
}
#bodyy{
  height: 1000px;
  width: 100%;
  /* margin-top: 500px; */
  background-image: url('../assets/img/pexels-alena-koval-826114.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.7;
  padding-top: 70px;
}
#butt{
  width:250px
}
.inp{
  border-style: solid;
    border-width: 0 0 1px 0;
    margin-bottom: 0px;
    margin-left: 100px;
  }
  #butt{
    margin-left: 200px;
  }
  #content{
       width: 300px;
       margin-left: 160px;
       /* border-radius: 5px; */
       color: black;
       border-style: solid;
       border-width: 0 0 1px 0;
  }
  @media only screen and (max-width:420px) {
      #modal{
        width: 100% !important;
         border-radius: 20px;
        color: black;
        margin-left: 10px;
        padding-top: 50px;
        margin-top: -20px !important;
        /* background-color:white  */
        opacity: 1;
        padding-bottom: 50px;
      }
      .inp{
        width:70% !important;
        margin-left: 30px;
      }
      #content{
         max-width:55% !important;
        margin-left: 90px;
        height: 200px !important;
      }
      #buttdiv{
        margin-left: 110px !important;
      }
      #butt{
        margin-left: 90px !important; 
        width: 56% !important;
      }
      #formm{
      padding-top: 0px !important;
      margin-top: -20px !important;
      }
      h2{

      }
  }
</style>