<script type="ts">
	export let textureType: string;
	export let id: number;
</script>

{#if textureType === 'colors'}
	{#if id === 1}
		<div class="bg-red-500 w-full h-full rounded-b-full" />
	{:else if id === 2}
		<div class="bg-orange-500 w-full h-full rounded-b-full" />
	{:else if id === 3}
		<div class="bg-yellow-500 w-full h-full rounded-b-full" />
	{:else if id === 4}
		<div class="bg-green-500 w-full h-full rounded-b-full" />
	{:else if id === 5}
		<div class="bg-blue-500 w-full h-full rounded-b-full" />
	{:else if id === 6}
		<div class="bg-purple-500 w-full h-full rounded-b-full" />
	{/if}
{:else if textureType === 'types'}
	{#if id === 1}
		<div class="w-full h-full flex flex-col items-center">
			<div class="bg-white w-2/3 h-2/3 rounded-full" />
			<div class="bg-white w-full h-full rounded-full" />
		</div>
	{:else if id === 2}
		<div class="bg-white w-1/12 h-full" />
	{/if}
{:else if textureType === 'shades'}
	{#if id === 1}
		<div class="bg-white w-full h-full" />
	{:else if id === 2}
		<div class="bg-white w-full h-full rounded-t-full" />
	{:else if id === 3}
		<div
			class="w-0 h-0 border-solid border-l-[5rem] border-l-transparent border-r-[5rem] border-r-transparent border-b-[5rem] border-white"
		/>
	{:else if id === 3.5}
		<div
			class="w-0 h-0 border-solid border-l-[1.5rem] border-l-transparent border-r-[1.5rem] border-r-transparent border-b-[3rem] border-white"
		/>
	{/if}
{:else if textureType === 'patterns'}
	<!-- <div /> -->
{/if}
