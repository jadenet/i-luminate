<script type="ts">
    import SavedItem from "../lib/components/SavedItem.svelte";
    import lampImg from "../lamp.jpeg";
    import {onMount} from 'svelte';

    export let saved: any = [];
    let cloneItem: any;
    let deleteItem: any;

    onMount(() => {
        saved = JSON.parse(localStorage.getItem("saved")!) || saved;

        cloneItem = (item: any) => {
            saved.push(item);
            saved = saved;
            localStorage.setItem("saved", JSON.stringify(saved));
        }
        
        deleteItem = (item: any) => {
            saved.splice(saved.indexOf(item), 1);
            saved = saved
            localStorage.setItem("saved", JSON.stringify(saved));
        }
    })
</script>

<h1 class="text-center p-8 text-4xl font-extrabold">Lamps saved</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-12">
    {#each saved as item}
        <div class="grid grid-cols-4 lg:grid-rows-5 lg:grid-cols-7 gap-4 p-3 rounded-xl bg-rose-200">
            <img src={lampImg} alt="lamp" class="col-span-4 lg:row-start-1 lg:row-span-5 lg:col-start-1 lg:col-span-4 rounded-xl">
        
            <p class="text-lg col-span-4 lg:row-start-1 lg:col-start-5 lg:col-span-3">Color: {item.color}</p>
            <p class="text-lg col-span-4 lg:row-start-2 lg:col-start-5 lg:col-span-3">Type: {item.type}</p>
            <p class="text-lg col-span-4 lg:row-start-3 lg:col-start-5 lg:col-span-3">Shade: {item.shade}</p>
            <p class="text-lg col-span-4 lg:row-start-4 lg:col-start-5 lg:col-span-3">Pattern: {item.pattern}</p>

            <button class="font-semibold lg:row-start-5 lg:col-start-5">Add</button>
            <a href="/" class="font-semibold self-center justify-self-center lg:row-start-5 lg:col-start-6">Edit</a>
            <button class="font-semibold lg:row-start-5 lg:col-start-7" on:click={() => cloneItem(item)}>Clone</button>
            <button class="font-semibold lg:row-start-5 lg:col-start-8" on:click={() => deleteItem(item)}>Delete</button>
        </div>
    {/each}
</div>