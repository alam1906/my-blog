<script>
	import { fade } from 'svelte/transition';
	let { data } = $props();
	const blog = data.blog;
</script>

<div in:fade={{ duration: 300 }} class="mx-auto max-w-4xl">
	<div class={`text-center text-4xl font-bold ${blog.quotes === '' ? 'my-10' : 'mt-10 mb-5'}`}>
		{blog.title}
	</div>
	{#if blog.quotes === ''}
		<div class="hidden"></div>
	{:else}
		<div class="mx-auto mb-10 max-w-2xl text-center italic">
			{`"${blog.quotes} "`}
		</div>
	{/if}

	<div class="text-justify">{blog.description}</div>
</div>
