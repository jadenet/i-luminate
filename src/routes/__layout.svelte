<script lang="ts">
    import "../app.css";

    let nav: HTMLElement;

    function reverseNavVisibility() {
        nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
    }

    function removeNavVisibility() {
        nav.style.display = "none";
    }
</script>

<header class="flex flex-col md:flex-row items-center gap-4 md:gap-0 py-4 px-8 bg-rose-400">
    <div class="flex justify-between w-full">
        <a href="/" on:click={removeNavVisibility} class="font-semibold">I Luminate</a>

        <div class="hidden md:flex gap-8 items-center">
            <a href="/admin" class="font-semibold">Admin</a>
        </div>
    
        <button class="md:hidden" on:click={reverseNavVisibility}>... </button>
    </div>

    <div class="hidden flex-col gap-4 w-full" on:click={removeNavVisibility} bind:this={nav}>
        <a href="/admin" class="font-semibold">Admin</a>
    </div>
</header>

<slot></slot>

<footer class="flex justify-center bg-rose-400 h-12 mt-8">
    @2022 I Luminate
</footer>