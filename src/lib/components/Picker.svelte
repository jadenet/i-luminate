<script lang="ts">
	import { onMount } from 'svelte';
	import Texture from '$lib/components/Texture.svelte';

	export let items: any;
	export let name: string;
	export let classes: string;
	export let currentSelection: number;
	let currentSelectionName: string;

	let index: number = 1;
	let increment: number = 3;

	function slideRight() {
		index += increment;

		if (index > items.length) {
			index = 1;
		}
	}

	function slideLeft() {
		index -= increment;

		if (index < 1) {
			const quotient = items.length % increment;

			if (quotient === 0) {
				index = items.length - (increment - 1);
			}

			index = items.length - (quotient - 1);
		}
	}

	onMount(async () => {
		const itemsResponse = await fetch(`/api/${items}`, { method: 'GET' });
		items = await itemsResponse.json();

		currentSelectionName = items.find((item: any) => {
			return item.id === currentSelection;
		}).name;
	});
</script>

<div
	class="flex flex-col justify-center py-3 gap-2 bg-rose-200 rounded-xl row-span-2 col-span-4 {classes}"
>
	<h2 class="text-center font-semibold">{name}</h2>
	<div class="flex justify-evenly items-center">
		<button class="text-3xl font-light" on:click={slideLeft}>{'<'}</button>
		<div class="flex flex-[.8] justify-between items-center">
			{#each items as item}
				{#if [index, index + 1, index + 2].includes(item.id)}
					<div class="flex flex-[.3] justify-around flex-col">
						<button
							class="w-full h-12 rounded-lg flex flex-col items-center justify-center" on:click={() => {
								currentSelection = item.id;
								currentSelectionName = item.name;
							}}
						>
							<Texture textureType="{name.toLowerCase()}s" id={item.id === 3 && name+"s" === "Shades" ? 3.5 : item.id} />
						</button>
						<p class="text-center">{item.name}</p>
					</div>
				{/if}
			{/each}
		</div>
		<button class="text-3xl font-light" on:click={slideRight}>{'>'}</button>
	</div>
	<p class="mx-8">Current selection: {currentSelectionName}</p>
</div>
