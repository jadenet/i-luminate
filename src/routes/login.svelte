<script lang="ts">
    let usernameText: string = "";
    let passwordText: string = "";

    function onClick() {
        if (usernameText === "admin" && passwordText === "admin") {
            // idk
        }
    }
</script>

<h1 class="text-center p-8 text-4xl font-extrabold">Login</h1>

<div class="flex justify-center m-4">
    <form action="" class="flex flex-col items-end justify-around rounded-xl max-w-max p-8 gap-6 bg-rose-200">
        <div class="flex flex-col">
            <label for="username" class="">Username:</label>
            <input type="text" id="username" class="rounded-lg bg-rose-50 px-[8%] py-[3%]" required>
        </div>

        <div class="flex flex-col">
            <label for="password" class="">Password:</label>
            <input type="text" id="password" class="rounded-lg bg-rose-50 px-[8%] py-[3%]" bind:value={passwordText} required>
        </div>

        <input type="submit" value="Login" class="font-semibold bg-orange-400 rounded-lg px-[10%] py-[2%]" on:click={onClick}>
    </form>
</div>