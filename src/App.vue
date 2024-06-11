<template>
  <div id="app" class="app-container">
    <Sidebar />
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "./MainSidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style>
.app-container {
  display: flex;
  height: 100vh;
  /* Задает высоту контейнера на весь экран */
  background-color: #000056;
  padding: 15px;

}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content-container {
  flex-grow: 1;
  padding: 20px;
  background-color: #f5f6fa;
  border-radius: 20px;
  overflow-y: auto;
  box-sizing: content-box;
}
</style>





<!-- 
import MainLogin from './components/login/MainLogin.vue';

export default {
  name: 'App',
  components: {
    MainLogin
  }
};

<div id="app">
    <MainLogin />
  </div> 
  



    <div id="app" class="app-container">
    <Sidebar />
    <div class="content-container">
      <router-view />
    </div>
  </div>
  
  import Sidebar from "./MainSidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
  },
};
  
-->