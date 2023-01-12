<svelte:options accessors />

<script lang="ts">
	import { onMount } from 'svelte';

	export let elements: any = [];
	const observe = (el: any) => (elements = [...elements, el]);
	let mounted = false;
	let observer: any;

	$: if (mounted && elements.some((el: any) => el)) {
		elements.forEach((el: any) => {
			el.dataset.hidden = true;
			observer.observe(el);
		});
	}

	onMount(() => (mounted = true));
	onMount(() => {
		if (elements.some((el: any) => el)) {
			observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						observer.disconnect();
						elements.forEach((el: any) => delete el.dataset.hidden);
					}
				});
			});
		}
	});
</script>

<div>
	<slot {observe} />
</div>

<style>
	div :global([data-hidden]) {
		opacity: 0;
		/* transform: translateX(-50%); */
	}
</style>
