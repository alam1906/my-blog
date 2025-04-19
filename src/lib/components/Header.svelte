<script>
	import { Search } from 'lucide-svelte';
	let isSearch = $state(false);
	function changeIsSearch() {
		isSearch = !isSearch;
	}
</script>

<div class="w-full bg-white py-5 shadow-md">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-3">
		<div class="text-2xl font-semibold">Nur Alam</div>
		{#if isSearch}
			<div><input type="text" placeholder="Search blog" class="px-3 py-2" /></div>
		{:else}
			<button onclick={changeIsSearch} class="cursor-pointer"><Search /></button>
		{/if}
	</div>
</div>
