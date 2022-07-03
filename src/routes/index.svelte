<script type="ts">
    import lampImage from "../lamp.jpeg";
    import Picker from "../lib/components/Picker.svelte";
    import {onMount} from 'svelte';
    export let items: any;
    export let saveSelection: any;

    let currentSelection: any = {
        color: 0,
        type: 0,
        shade: 0,
        pattern: 0
    };

    onMount(() => {
        currentSelection = JSON.parse(localStorage.getItem("currentSelection")!);

        window.addEventListener("unload", () => {
            localStorage.setItem("currentSelection", JSON.stringify(currentSelection));
        })
    })
</script>

<h1 class="text-center p-8 text-4xl font-extrabold">Create your own lamp</h1>

<div class="grid px-10 md:px-44 grid-rows-7 grid-cols-1 md:grid-cols-7 gap-4">
    <img src={lampImage} alt="lamp" class="rounded-xl md:row-[1_/_span_7] md:col-start-1 md:col-span-3">

    <Picker items={items} name="Colors" bind:currentSelection={currentSelection.color} gridArea="md:row-start-1 md:col-start-4 md:row-span-3 md:col-span-2"></Picker>
    <Picker items={items} name="Type" bind:currentSelection={currentSelection.type} gridArea="md:row-start-1 md:col-start-6 md:row-span-3 md:col-span-2"></Picker>
    <Picker items={items} name="Shade" bind:currentSelection={currentSelection.shade} gridArea="md:row-start-4 md:col-start-4 md:row-span-3 md:col-span-2"></Picker>
    <Picker items={items} name="Pattern" bind:currentSelection={currentSelection.pattern} gridArea="md:row-start-4 md:col-start-6 md:row-span-3 md:col-span-2"></Picker>

    <p class="font-semibold text-lg md:row-start-7 md:col-start-4 md:row-span-1 md:col-span-1">Price: $500</p>
    <button on:click={saveSelection(currentSelection)} method="post" class="font-semibold text-lg text-left md:text-right md:row-start-7 md:col-start-6 md:row-span-1 md:col-span-1">Save</button>
    <button class="font-semibold text-lg active:scale-110 text-left md:text-right md:row-start-7 md:col-start-7 md:row-span-1 md:col-span-1">Add to cart</button>
</div>