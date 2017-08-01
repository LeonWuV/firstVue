<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	var ww = document.documentElement.clientWidth;
	document.documentElement.style.fontSize = ww / 128 + "px";
export default {
  name: 'app'
}
</script>
<style src="./assets/css/reset.css"></style>
<style>
	#app{
		height: 100%;
		width: 100%;
		font-size: 12px;
	}
</style>
