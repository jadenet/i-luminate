<script type="ts">
    import SavedItem from "../lib/components/SavedItem.svelte";
</script>

<h1 class="text-center p-8 text-4xl font-extrabold">Lamps saved</h1>

<div class="flex justify-center m-4 md:mx-16">
    <div class="grid grid-cols-1 gap-4 w-full justify-items-center md:grid-cols-2 lg:grid-cols-3">
        <SavedItem></SavedItem>
        <SavedItem></SavedItem>
        <SavedItem></SavedItem>
        <SavedItem></SavedItem>
        <SavedItem></SavedItem>
        <SavedItem></SavedItem>
    </div>
</div>