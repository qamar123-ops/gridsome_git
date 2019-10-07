<template>
  <div class="toggle-wrapper">
    <span>Translator</span>
    <label class="switch">
     <input type="checkbox" class="mycheck" checked @change="handleChange($event)">
     <span class="slider round"></span>
   </label>
 </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        message: "yes",
        showPopups:true, //global variable
      }
    },
    methods: {
      //toggle switch functionality starts here
      handleChange:function(event){
        if(event.target.checked){
          this.showPopups=true;
          mandarinspot.showPopups(this.showPopups);
        }else{
          this.showPopups=false;
          mandarinspot.showPopups(this.showPopups);
        }
      }
      //toggle switch ends here
    }
  }
</script>
<style scoped> /*css*/
.toggle-wrapper{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 5px;
}
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2f855a;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2f855a;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>