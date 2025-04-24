<script lang="ts">
	import { MoveRight } from 'lucide-svelte';
	import { slugify } from '$lib/utils/slugify';
	import { fade } from 'svelte/transition';
	import { visibleCount, selectedCategory } from '$lib/state/blog.js';

	let { data } = $props();
	const blogs = data.blogs;
	const categories = ['All', 'Programming', 'Chess', 'Magic', 'Rubik', 'Review', 'Other'];

	function changeSelectedCategory(category: string) {
		$selectedCategory = category;
	}

	let filterBlog = $state(() =>
		$selectedCategory === 'All'
			? blogs
			: blogs.filter((e) => e.category === $selectedCategory.toLowerCase())
	);

	let visibleBlogs = $derived(filterBlog().slice(0, $visibleCount));

	function loadMore() {
		$visibleCount += 9;
		visibleBlogs = blogs.slice(0, $visibleCount);
	}
</script>

<svelte:head>
	<meta name="title" content="This is my blog" />
	<meta name="description" content="This is my blog" />
	<title>My Blog</title>
</svelte:head>
<div in:fade={{ duration: 300 }}>
	<div class="mx-3">
		<div class=" my-10 flex-wrap space-y-2 space-x-2 md:flex md:justify-center md:space-y-0">
			{#each categories as category}
				<button
					aria-label="selectedCategory"
					title="selectedCategory"
					onclick={() => changeSelectedCategory(category)}
					class="cursor-pointer rounded-lg bg-gray-200 px-5 py-2 font-semibold transition duration-200"
					class:text-white={category === $selectedCategory}
					class:bg-teal-700={category === $selectedCategory}>{category}</button
				>
			{/each}
		</div>

		{#if filterBlog().length > 0}
			{#key $selectedCategory}
				<div
					class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
					in:fade={{ duration: 300 }}
				>
					{#each visibleBlogs as blog}
						<a href={slugify(`/${blog.title}`.toLowerCase())}
							><div class="cursor-pointer shadow-lg">
								<div class="aspect-video bg-gray-200"></div>
								<div class="mx-3 my-3 flex flex-col">
									<div class="font-normal text-teal-700">{`#${blog.category}`}</div>
									<div class="text-xl font-semibold">{blog.title}</div>
									<div class="my-2 line-clamp-3 text-sm text-gray-500">
										{@html blog.description.slice(0, 300)}
									</div>
									<div class="mb-2 flex cursor-pointer items-center space-x-1">
										<div class="font-semibold text-teal-700">Read More</div>
										<MoveRight class="mt-1 text-teal-700" />
									</div>
								</div>
							</div></a
						>
					{/each}
				</div>
			{/key}
		{:else}
			<div class="flex h-[calc(100dvh-14rem)] items-center justify-center text-xl/8 font-semibold">
				Tidak ada data
			</div>
		{/if}
	</div>

	{#if $visibleCount < filterBlog().length}
		<div class="flex w-full justify-center">
			<button
				aria-label="loadMore"
				title="loadMore"
				onclick={loadMore}
				class="my-8 rounded-xl bg-teal-500 px-7 py-2 text-center">Load More</button
			>
		</div>
	{:else}
		<div class="hidden"></div>
	{/if}
</div>
