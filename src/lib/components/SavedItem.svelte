<script type="ts">
    import lampImage from "../../lamp.jpeg";
    let img: string = lampImage;
    let color: string;
    let type: string;
    let shade: string;
    let pattern: string;
</script>

<div class="flex flex-col md:flex-row gap-4 p-3 rounded-xl bg-rose-200">
    <img src={img} alt="lamp" class="w-auto md:w-1/2 rounded-xl">

    <div class="flex flex-col justify-between">
        <div class="flex flex-col gap-1 flex-grow">
            <p class="text-lg">Color: {color}</p>
            <p class="text-lg">Type: {type}</p>
            <p class="text-lg">Shade: {shade}</p>
            <p class="text-lg">Pattern: {pattern}</p>
        </div>
        <div class="grid grid-cols-4 md:grid-cols-2">
            <button class="font-semibold">Add</button>
            <a href="/" class="font-semibold text-center">Edit</a>
            <button class="font-semibold">Clone</button>
            <button class="font-semibold">Delete</button>
        </div>
    </div>
</div>