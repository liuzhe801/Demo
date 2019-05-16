<template>
		<!-- <img src="http://180.76.101.145:14000/Uploaded/201868/20180608164356_93592.jpeg">
		     <img src="http://180.76.101.145:14002/Uploaded/2018619/20180619141720_15845.jpeg">
		     <img src="http://180.76.101.145:14001/Uploaded/2018516/20180516153501_10951.jpg">
		     <img src="http://180.76.101.145:14002/Uploaded/2018524/20180524172544_96479.jpeg"> -->

<div>
	<div class="slider">
 		<mt-swipe :auto="5000">
  			<mt-swipe-item v-for="item in PicsList" :key="item.id">
  			<a :href="item.src" rel="external nofollow" >
   			<img :src="item.src" class="img"/>
   			<span class="desc"></span>
  			</a>
  			</mt-swipe-item>
 		</mt-swipe>
 	</div>

 	 	<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/news/newsList">
		                    <span class="mui-icon mui-icon-list"></span>
		                    <div class="mui-media-body">资讯</div>
		                </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div>
		                </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div>
		                </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div>
		                </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div>
		                </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div>
		                </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div>
		                </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div>
		                </router-link></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		           	<router-link to="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div>
		                </router-link></li>
		        </ul> 
		</div>
 </div>

</template>

<script>
	export default{
		data(){
			return {
				PicsList:
				[
					{id:"1",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542371233994&di=44d059f0c51ade2a4272a4d77b7be8ff&imgtype=0&src=http%3A%2F%2Fqz.fjsen.com%2Fimages%2Fattachement%2Fjpg%2Fsite2%2F20150102%2F7ce9d3f7b773161022000c.jpg",href:"http://180.76.101.145:81/"},
					{id:"2",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542371280037&di=edff71187eca3f871f09933e490ebb7b&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F8380d51ejw1e87a785bdwj20sg0luwqk.jpg",href:"http://180.76.101.145:81/"},
					{id:"3",src:"http://img1.imgtn.bdimg.com/it/u=3489720066,1499919356&fm=214&gp=0.jpg",href:"http://180.76.101.145:81/"},
					{id:"4",src:"https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=2b8c77079f2bd40756cadbaf1ae0f534/b8014a90f603738d8bdfe50dbb1bb051f819ec0c.jpg",href:"http://180.76.101.145:81/"}
				]
			}
		}
	}
</script>

<style scoped>
.slider{
	width:100%;
	height:300px;
}
.mint-swipe-item img{
	width:100%;
	height:300px;
}
.mui-content > .mui-table-view:first-child
{
    margin-top: 0px;
}
</style>