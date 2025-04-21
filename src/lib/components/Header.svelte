<script>
	import { Search } from 'lucide-svelte';
	let isSearch = $state(false);
	function changeIsSearch() {
		isSearch = !isSearch;
	}
</script>

<div class="sticky top-0 z-50 w-full bg-white py-5 shadow-lg">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-3">
		<a href="/" class="cursor-pointer text-2xl font-semibold">NA</a>
		{#if isSearch}
			<div class="flex space-x-2">
				<div class=" border-0 border-b-2 border-teal-500 focus:outline-none">
					<input type="text" placeholder="Search blog" class="px-3 py-0" />
				</div>
				<button
					onclick={changeIsSearch}
					class="cursor-pointer rounded-md bg-teal-500 px-5 text-white">Find</button
				>
			</div>
		{:else}
			<button onclick={changeIsSearch} class="cursor-pointer"><Search /></button>
		{/if}
	</div>
</div>
