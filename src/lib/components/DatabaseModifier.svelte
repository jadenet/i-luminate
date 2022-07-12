<script type="ts">
	import { onMount } from 'svelte';

	export let name: string;
	let items: any = [];
	let addItem: any;
	let saveItem: any;
	let deleteItem: any;

	onMount(async () => {
		const itemsResponse = await fetch(`/api/${name}`, { method: 'GET' });
		items = await itemsResponse.json();

		addItem = async () => {
			const itemResponse = await fetch(`/api/${name}`, {
				method: 'POST',
				body: JSON.stringify({ name: '' })
			});
			const item = await itemResponse.json();
			items = [...items, item[0]];
		};

		saveItem = async (itemId: number, itemName: string, index: number) => {
			const itemResponse = await fetch(`/api/${name}/${itemId}`, {
				method: 'PUT',
				body: JSON.stringify({ id: itemId, name: itemName })
			});
			const item = await itemResponse.json();
			items[index] = item;
		};

		deleteItem = async (id: number, index: number) => {
			await fetch(`/api/${name}/${id}`, { method: 'DELETE' });
			items.splice(index, 1);
			items = items;
		};
	});
</script>

<h1 class="text-center p-8 text-4xl font-extrabold">{name}</h1>

<div class="flex flex-col px-4 sm:px-8 md:px-32 lg:px-56 xl:px-96">
	{#each items as item, index}
		<div class="grid grid-cols-9 px-8 py-3 {index % 2 === 1 ? '' : 'bg-rose-100'}">
			<p class="">id: {item.id}</p>
			<p class="col-start-2 col-span-5">name: <input class="bg-transparent border border-rose-900 rounded pl-2 w-1/2" bind:value={item.name} /></p>
			<button class="col-start-8" on:click={saveItem(item.id, item.name, index)}>save</button>
			<button class="col-start-9 text-red-600" on:click={deleteItem(item.id, index)}>delete</button>
		</div>
	{/each}

	<button class="text-right text-5xl font-semibold" on:click={addItem}>+</button>
</div>
