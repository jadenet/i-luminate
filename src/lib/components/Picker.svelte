<script lang="ts">
    export let items: any;
    export let name: string;

    let index: number = 1;
    let increments: number = 3;
    export let currentSelection: number;
    let currentSelectionItem: string = items[currentSelection].name;

    // function moveSlide(n: number) {
    //     index += n;
    //     showSlides();
    // }

    // function showSlides() {
    //     for (let i = 0; i < slides.length; i++) {
    //         const element = slides[index];
    //         if (i in [index, index+1, index+2]) {
    //             element.style.display = "block";
    //         } else {
    //             element.style.display = "none";
    //         };
    //     }
    // }
</script>

<div class="flex flex-col justify-around py-3 gap-2 bg-rose-200 rounded-xl">
    <h2 class="text-center opacity-95">{name}</h2>
    <div class="flex justify-evenly items-center">
        <p class="text-3xl font-light">{"<"}</p>
        {#each items as item}
            <button class="flex flex-[.2] justify-around flex-col" on:click={() => {currentSelection = item.id; currentSelectionItem = item.name}}>
                <div class="h-12 rounded-lg" style="background-image:url({item.image}); background-color:{item.color}"></div>
                <p class="text-center font-semibold">{item.name}</p>
            </button>
        {/each}
        <p class="text-3xl font-light">{">"}</p>
    </div>
    <p class="ml-8 opacity-95">Current selection: {currentSelectionItem}</p>
</div>