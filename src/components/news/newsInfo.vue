<template>
	<div>
		<div v-for="(item, index) in newsList">
			<img class="img" v-if="index === $route.params.id-1" :src="item.src"></img>
			<span  v-if="index === $route.params.id-1">&nbsp;&nbsp;&nbsp;&nbsp;{{item.content}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				newsList:
				[
					{id:"1",
					title:"麒麟座V838变星",
					src:"https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=d10b12910ff3d7ca18fb37249376d56c/cdbf6c81800a19d8f517d1aa30fa828ba61e460c.jpg",
					content:"麒麟座V838（V838 Monocerotis，V838 Mon麒麟座v838是位在麒麟座的一颗红色变星，距离太阳约 20000光年，麒麟座v838恒星因好似梵高名作《星空》中所描绘的景象而闻名。中央红色核心为恒星本身，周围结构为被照亮的尘埃云。该恒星在2002年经历了一次爆发事件并被观测到。爆发的原因至今不明，但有数个理论已经提出，其中包含恒星死亡的过程、联星合并或吞噬行星。最初认为是一个典型的新星爆发，但后来被学者所摒弃，因为v838恒星并没有激烈地把气体外壳掀掉、而是在迅速膨胀的同时仍然保留着原来的外壳，成为一颗表面温度较低的超巨星。2005年科学家认为这颗变星的前身是一颗质量非常大的恒星，可能高达太阳的65倍。他们还导出这个系统的恒星可能只有400万岁的结论。"},

					{id:"2",
					title:"蟹状星云",
					src:"https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=592ee0497f3e6709aa0d4dad5aaef458/0bd162d9f2d3572cef7780b28a13632763d0c3c3.jpg",
					content:"蟹状星云位于金牛座，距离地球大约6500光年，大小约为12×7光年，亮度是8.5星等，肉眼看不见。对蟹状星云最早的记录出自英国的一个天文爱好者(1731年)，1771年法国天文学家梅西耶在制作著名的“星云星团(M)表”时，把第一号的位置，留给了蟹状星云，编号为M1"},

					{id:"3",
					title:"创生之柱",
					src:"https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=2b8c77079f2bd40756cadbaf1ae0f534/b8014a90f603738d8bdfe50dbb1bb051f819ec0c.jpg",
					content:"创生之柱指的是哈勃太空望远镜拍摄的在老鹰星云内圆柱形的星际气体和尘埃的一张影像。它是在1995年4月1日拍摄的，被Space网评定为哈勃太空望远镜拍摄的最佳前十名的照片之一 。负责处理这张影像的是亚利桑那州立大学天文学家杰夫赫斯特和Paul Scowen。"},
				]
			}
		}
	}
</script>

<style scoped>
		.img{
		width: 100%;
		height:50%;
	}
</style>