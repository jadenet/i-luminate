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
        <div class="flex flex-col gap-2 flex-grow">
            <p class="text-lg opacity-90">Color: {color}</p>
            <p class="text-lg opacity-90">Type: {type}</p>
            <p class="text-lg opacity-90">Shade: {shade}</p>
            <p class="text-lg font-medium opacity-90">Pattern: {pattern}</p>
        </div>
        <div class="flex justify-around">
            <a href="/" class="text-lg font-semibold">edit</a>
            <button class="text-lg font-semibold">clone</button>
            <button class="text-lg font-semibold">delete</button>
        </div>
    </div>
</div>