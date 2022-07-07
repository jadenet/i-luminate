<script type="ts">
	import Texture from '$lib/components/Texture.svelte';
	export let colorId: number;
	export let typeId: number;
	export let shadeId: number;
	// export let patternId: number;
</script>

<div class="w-full h-full flex flex-col items-center justify-center bg-rose-200 rounded-xl">
	<div class="w-40 h-20 top-20 flex flex-col items-center">
		<Texture textureType={'shades'} id={shadeId} />
	</div>
	<div class="w-24 h-7 top-32 flex flex-col items-center">
		<Texture textureType={'colors'} id={colorId} />
	</div>
	<div class="w-44 h-56 bottom-16 flex flex-col items-center">
		<Texture textureType={'types'} id={typeId} />
	</div>
</div>
