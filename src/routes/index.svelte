<script type="ts">
	import { onMount } from 'svelte';
	import Picker from '../lib/components/Picker.svelte';
	import LampImage from '../lib/components/LampImage.svelte';
	interface ISelection {
		color: number;
		type: number;
		shade: number;
		pattern: number;
	}
	interface ITable {
		id: number;
		name: string;
	}

	let editing: any = null;
	let cloneItem = (item: any) => {
		saved.push(item);
		saved = saved;
		localStorage.setItem('saved', JSON.stringify(saved));
	};

	let deleteItem = (item: any) => {
		saved.splice(saved.indexOf(item), 1);
		saved = saved;
		localStorage.setItem('saved', JSON.stringify(saved));
	};
	let saved: ISelection[] = [];
	let saveSelection = () => {
		if (editing != null) {
			saved[editing] = { ...currentSelection };
			editing = null;
		} else {
			saved.push({ ...currentSelection });
			saved = saved;
		}
		localStorage.setItem('saved', JSON.stringify(saved));
	};

	let currentSelection: ISelection = {
		color: 1,
		type: 1,
		shade: 1,
		pattern: 1
	};
	let getName: any = () => {
		return 'undefined';
	};

	onMount(async () => {
		currentSelection = JSON.parse(localStorage.getItem('currentSelection')!);
		saved = JSON.parse(localStorage.getItem('saved')!) || saved;

		const colorsResponse = await fetch('/api/colors', { method: 'GET' });
		const colorItems: ITable[] = await colorsResponse.json();

		const typesResponse = await fetch('/api/types', { method: 'GET' });
		const typeItems: ITable[] = await typesResponse.json();

		const shadesResponse = await fetch('/api/shades', { method: 'GET' });
		const shadeItems: ITable[] = await shadesResponse.json();

		const patternsResponse = await fetch('/api/patterns', { method: 'GET' });
		const patternItems: ITable[] = await patternsResponse.json();

		const items: { colors: ITable[]; types: ITable[]; shades: ITable[]; patterns: ITable[] } = {
			colors: colorItems,
			types: typeItems,
			shades: shadeItems,
			patterns: patternItems
		};

		getName = (name: string, id: number) => {
			return items[name].find((item: any) => {
				return item.id === id;
			}).name;
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
	class="grid px-10 xl:px-48 lg:px-20 [grid-template-rows:_repeat(13,_minmax(0,_1fr));] grid-cols-4 lg:[grid-template-rows:_repeat(7,_minmax(0,_1fr));] lg:grid-cols-7 gap-4"
>
	<div
		class="rounded-xl row-span-4 col-span-4 lg:row-[1_/_span_7] lg:col-start-1 lg:col-span-3 px-96 lg:px-24 xl:px-32 py-8 bg-rose-100"
	>
		<LampImage
			colorId={currentSelection.color}
			typeId={currentSelection.type}
			shadeId={currentSelection.shade}
		/>
	</div>

	<Picker
		name="Color"
		items="colors"
		bind:currentSelectionId={currentSelection.color}
		classes="lg:row-start-1 lg:col-start-4 lg:row-span-3 lg:col-span-2"
	/>
	<Picker
		name="Type"
		items="types"
		bind:currentSelectionId={currentSelection.type}
		classes="lg:row-start-1 lg:col-start-6 lg:row-span-3 lg:col-span-2"
	/>
	<Picker
		name="Shade"
		items="shades"
		bind:currentSelectionId={currentSelection.shade}
		classes="lg:row-start-4 lg:col-start-4 lg:row-span-3 lg:col-span-2"
	/>
	<Picker
		name="Pattern"
		items="patterns"
		bind:currentSelectionId={currentSelection.pattern}
		classes="lg:row-start-4 lg:col-start-6 lg:row-span-3 lg:col-span-2"
	/>

	<button
		on:click={saveSelection}
		class="font-bold text-lg text-left row-start-13 col-start-4 lg:text-right lg:row-start-7 lg:col-start-7"
	>
		Save
	</button>
</div>

<h1 class="text-center p-8 text-4xl font-extrabold">Saved</h1>

{#if saved.length > 0}
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-8 lg:px-20">
		{#each saved as item, index}
			<div class="grid grid-cols-4 lg:grid-rows-5 lg:grid-cols-5 gap-4 p-3 rounded-xl bg-rose-100">
				<div
					class="col-span-4 lg:row-start-1 lg:row-span-5 lg:col-start-1 lg:col-span-4 rounded-xl w-28 h-52"
				>
					<LampImage colorId={item.color} typeId={item.type} shadeId={item.shade} />
				</div>

				<p class="text-lg font-light col-span-4 lg:row-start-1 lg:col-start-3 lg:col-span-3">
					Color: {getName('colors', item.color)}
				</p>
				<p class="text-lg font-light col-span-4 lg:row-start-2 lg:col-start-3 lg:col-span-3">
					Type: {getName('types', item.type)}
				</p>
				<p class="text-lg font-light col-span-4 lg:row-start-3 lg:col-start-3 lg:col-span-3">
					Shade: {getName('shades', item.shade)}
				</p>
				<p class="text-lg font-light col-span-4 lg:row-start-4 lg:col-start-3 lg:col-span-3">
					Pattern: {getName('patterns', item.pattern)}
				</p>
				<a
					href="/"
					class="font-semibold self-center justify-self-center lg:justify-self-auto lg:row-start-5 lg:col-start-3"
					on:click={() => {
						editing = index;
						currentSelection = { ...item };
					}}>Edit</a
				>
				<button
					class="font-semibold lg:text-left lg:row-start-5 lg:col-start-4"
					on:click={() => cloneItem(item)}>Clone</button
				>
				<button
					class="font-semibold lg:text-left lg:row-start-5 lg:col-start-5"
					on:click={() => deleteItem(item)}>Delete</button
				>
			</div>
		{/each}
	</div>
{:else}
	<div class="text-center font-light">No lamps are saved</div>
{/if}
