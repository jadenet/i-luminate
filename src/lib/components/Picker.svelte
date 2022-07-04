<script lang="ts">
    export let items: any;
    export let name: string;
    export let gridArea: string;

    let index: number = 1;
    let increment: number = 3;
    export let currentSelection: number;
    $: currentSelectionName = items.find((item: any) => {return item.id === currentSelection}).name

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
</script>


<div class="flex flex-col justify-around py-3 gap-2 bg-rose-200 rounded-xl {gridArea}">
    <h2 class="text-center font-semibold">{name}</h2>
    <div class="flex justify-evenly items-center">
        <button class="text-3xl font-light" on:click={slideLeft}>{"<"}</button>
        <div class="flex flex-[.7] justify-between items-center">
            {#each items as item}
                {#if [index, index+1, index+2].includes(item.id)}
                    <div class="flex flex-[.3] justify-around flex-col">
                        <button class="h-12 rounded-lg bg-[image:url({item.image})]" style="background-color:{item.color}" on:click={() => {currentSelection = item.id;}}></button>
                        <p class="text-center">{item.name}</p>
                    </div>
                {/if}
            {/each}
        </div>
        <button class="text-3xl font-light" on:click={slideRight}>{">"}</button>
    </div>
    <p class="mx-8">Current selection: {currentSelectionName}</p>
</div>