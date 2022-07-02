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

<div class="px-2 md:px-16">
    <div class="flex flex-col md:flex-row justify-center items-center gap-4 p-6">
        <img src={lampImage} alt="" class="md:h-96 rounded-xl">
    
        <div class="flex flex-col justify-between w-full md:w-1/2 md:h-96">
            <div class="grid md:grid-cols-2 items-center gap-4">
                <Picker items={items} name="Colors" bind:currentSelection={currentSelection.color}></Picker>
                <Picker items={items} name="Type" bind:currentSelection={currentSelection.type}></Picker>
                <Picker items={items} name="Shade" bind:currentSelection={currentSelection.shade}></Picker>
                <Picker items={items} name="Pattern" bind:currentSelection={currentSelection.pattern}></Picker>
            </div>

            <div class="flex flex-col md:flex-row justify-between px-2 md:px-4">
                <p class="text-lg font-semibold">Price: $500</p>

                <div class="flex gap-8">
                    <button on:click={saveSelection(currentSelection)} method="post" class="font-semibold text-lg">Save</button>
                    <button class="font-semibold text-lg">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</div>