<script lang="ts">
	import { onMount } from 'svelte';

	let observer: any = null;

	onMount(() => {
		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(entry);
				if (entry.isIntersecting) {
					entry.target.classList.add('shown');

					// observer.disconnect();
				}
				// else {
				// 	entry.target.classList.remove('shown');
				// }
			});
		});

		const hiddenElements = document.querySelectorAll('.hidden');
		hiddenElements.forEach((el) => {
			observer.observe(el);
		});
	});
</script>

<div>
	<slot />
</div>
