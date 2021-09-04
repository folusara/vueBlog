<template>
  <main id="foot">
        <div>
            <label >Help </label>
            <ul>
                <li>Help Center</li>
                <li>Help Forum</li>
                <li>Video Tutorials</li>
            </ul>
        </div>
        <div>
              <label >Community </label>
            <ul>
                <li>Blogger Buzz</li>
            </ul>
        </div>
        <div>
             <label >Developers </label>
            <ul>
                <li>Blogger API</li>
                <li>Developers Forum</li>
            </ul>
        </div>

        <hr>


  </main>
</template>

<script>
export default {

}
</script>

<style>

#foot{
    display: flex;
    flex-direction: row;
    height: 200px;
    width: 98.5%;
    margin-left: 0.75%;
    background-color: black;
}
div{
    margin: 10px;
}
#foot > div{
    margin: 30px;
}
label{
    margin-left: 30px;
    font-size: 30px;
    color: white;
}

li{
    list-style: none;
    color: white;
    font-size:20px;
    font-weight: 300;
}
</style>