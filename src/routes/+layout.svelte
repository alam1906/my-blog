<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Header></Header>
<div class="mx-auto max-w-6xl">
	{@render children()}
</div>
