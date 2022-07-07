<script type="ts">
	import { onMount } from 'svelte';
	import Picker from '../lib/components/Picker.svelte';
	import LampImage from '../lib/components/LampImage.svelte';

	let saved: any = [];
	let saveSelection: any;
	let currentSelection: any = {
		color: 1,
		type: 1,
		shade: 1,
		pattern: 1
	};

	onMount(async () => {
		currentSelection = JSON.parse(localStorage.getItem('currentSelection')!);

		// let colorsResponse = await fetch(`/api/colors/${currentSelection.color}`, { method: 'GET' });
		// currentColor = await colorsResponse.json();

		// let typesResponse = await fetch(`/api/types/${currentSelection.type}`, {
		// 	method: "GET",
		// });
		// currentType = await typesResponse.json();

		// let shadesResponse = await fetch(
		// 	`/api/shades/${currentSelection.shades}`,
		// 	{ method: "GET" }
		// );
		// currentShade = await shadesResponse.json();

		// let patternsResponse = await fetch(
		// 	`/api/patterns/${currentSelection.patterns}`,
		// 	{ method: "GET" }
		// );
		// currentPattern = await patternsResponse.json();

		saved = JSON.parse(localStorage.getItem('saved')!) || saved;

		saveSelection = () => {
			saved.push(currentSelection);
			localStorage.setItem('saved', JSON.stringify(saved));
		};

		window.addEventListener('unload', () => {
			localStorage.setItem('currentSelection', JSON.stringify(currentSelection));
		});

		return () => {
			localStorage.setItem('currentSelection', JSON.stringify(currentSelection));
		};
	});
</script>

<h1 class="text-center p-8 text-4xl font-extrabold">Create your own lamp</h1>

<div
	class="grid px-10 md:px-48 [grid-template-rows:_repeat(13,_minmax(0,_1fr));] grid-cols-4 md:[grid-template-rows:_repeat(7,_minmax(0,_1fr));]md:[grid-template-rows:_repeat(7,_minmax(0,_1fr));] md:grid-cols-7 gap-4"
>
	<div class="rounded-xl row-span-4 col-span-4 md:row-[1_/_span_7] md:col-start-1 md:col-span-3">
		<LampImage
			colorId={currentSelection.color}
			typeId={currentSelection.type}
			shadeId={currentSelection.shade}
			patternId={currentSelection.pattern}
		/>
	</div>

	<Picker
		name="Color"
		items="colors"
		bind:currentSelection={currentSelection.color}
		classes="md:row-start-1 md:col-start-4 md:row-span-3 md:col-span-2"
	/>
	<Picker
		name="Type"
		items="types"
		bind:currentSelection={currentSelection.type}
		classes="md:row-start-1 md:col-start-6 md:row-span-3 md:col-span-2"
	/>
	<Picker
		name="Shade"
		items="shades"
		bind:currentSelection={currentSelection.shade}
		classes="md:row-start-4 md:col-start-4 md:row-span-3 md:col-span-2"
	/>
	<Picker
		name="Pattern"
		items="patterns"
		bind:currentSelection={currentSelection.pattern}
		classes="md:row-start-4 md:col-start-6 md:row-span-3 md:col-span-2"
	/>

	<p
		class="font-semibold text-lg row-start-13 col-start-1 md:row-start-7 md:col-start-4"
	>
		Price: $150
	</p>

	<button
		on:click={saveSelection}
		class="font-semibold text-lg text-left row-start-13 col-start-4 md:text-right md:row-start-7 md:col-start-7"
	>
		Save
	</button>
</div>
