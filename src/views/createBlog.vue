<template>
 
 <div id="bodyy">
     <div style="margin-left:25%; color:white"  class="shadow mt-5 w-50">
          
            <el-form  :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="50px" class="demo-dynamic">
                      <h2 class="display-5 text-center">Publish your Blog! </h2>
                       <h6 class="text-center">Publish your content, your way!</h6>
                <el-form-item prop="name"  >
                   <el-input id="inp" prefix-icon="el-icon-message" placeholder="Write the title of your article" v-model="dynamicValidateForm.title"></el-input>
                 </el-form-item>
                  <el-form-item prop="name"  >
                     <el-input id="inp" placeholder="Please write your name as the Author" prefix-icon="el-icon-user-solid" v-model="dynamicValidateForm.author"></el-input>
                 </el-form-item>
                   <div  placeholder="title" style="height:300px; max-width:410px" id="content" class="form-control bg-light m-3" contenteditable="true">
                        Write your article, your way!
                   </div>               
                   <button class="btn btn-danger m-1" @click.prevent="boldd()"> B</button>
                   <button class="btn btn-danger m-1" @click.prevent="I()"> I</button>
                   <button class="btn btn-danger m-1" @click.prevent="U()"> U</button>
                    <button class="btn btn-danger m-1" @click.prevent="H1()"> H1</button>

                  <el-form-item prop="name"  >
                   <el-input id="inp1" prefix-icon="el-icon-picture" placeholder="Please Uplooad a URL to an Image for your article" v-model="dynamicValidateForm.image"></el-input>
                 </el-form-item>

                     <el-button 
                     type="danger"   prefix-icon="el-icon-password"
                      id="butt" style="width:400px" round @click.prevent="publish()"> 
                       <span v-show="loading" class="spinner-border"></span>Submit</el-button>

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
     }
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
        this.dynamicValidateForm.content= document.getElementById("content").innerHTML;
        console.log(this.dynamicValidateForm.content);

        addPost(this.dynamicValidateForm)
        .then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err.response);
        })
    }
}
}
</script>

<style>
#bodyy{
   height: 1000px;
  width: 100%;
  margin-top: 200px;
  padding-bottom: 1000px;
  background-image: url('../assets/img/office-581131_1920.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
#butt{
  width:250px
}
#inp{
    border-width: 0 0 1px 0;
  width: 300px;
  margin-bottom: -500px;
  margin-left: -2000px;
}
</style>