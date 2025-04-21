<script>
	import { fade } from 'svelte/transition';

	let { data } = $props();
	const blog = data.blog;
	const date = new Date(blog.date || '2022-06-19T00:00:00');
	const finalDate = date.toLocaleDateString('id-ID', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<svelte:head>
	<meta name="title" content="ini adalah deskripsi blog" />
	<meta name="description" content={blog.description.slice(0, 100)} />
	<title>{blog.title}</title>
</svelte:head>
<div in:fade={{ duration: 300 }} class="mx-auto max-w-4xl">
	<div class={`text-center text-4xl font-bold ${blog.quotes === '' ? 'my-10' : 'mt-10 mb-5'}`}>
		{blog.title}
	</div>
	{#if blog.quotes === ''}
		<div class="hidden"></div>
	{:else}
		<div class="mx-10 mb-10 max-w-2xl text-center italic md:mx-auto">
			{`"${blog.quotes}"`}
		</div>
	{/if}

	<div class="mx-5 mb-20 text-justify whitespace-pre-line">{@html blog.description}</div>
	<div class="mx-5 mb-10 text-gray-600">{finalDate}</div>
</div>
