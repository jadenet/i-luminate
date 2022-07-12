<script type="ts">
	import Texture from '$lib/components/Texture.svelte';
	export let colorId: number;
	export let typeId: number;
	export let shadeId: number;
	// export let patternId: number;
</script>

<div class="w-full h-full flex flex-col items-center justify-center rounded-xl">
	<div class="w-[95%] h-[20%] flex flex-col items-center">
		<Texture textureType={'shades'} id={shadeId} />
	</div>
	<div class="w-[50%] h-[7%] flex flex-col items-center">
		<Texture textureType={'colors'} id={colorId} />
	</div>
	<div class="w-[100%] h-[73%] flex flex-col items-center">
		<Texture textureType={'types'} id={typeId} />
	</div>
</div>
