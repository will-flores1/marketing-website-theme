<script>
	import Counter from './components/Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import Hero from './components/Hero.svelte';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Rocket Websites</title>
	<meta
		name="description"
		content="Rocket Websites, building creative websites in Montgomery County."
	/>
</svelte:head>

<section>
	<Hero />

	<Counter />
	<Counter />
	<Counter />
	<Counter />
	<Counter />
	<Counter />
	<Counter />
	<Counter />
	<Counter />
	<Counter />
	<Counter />
	<Counter />
	<Counter />
	<Counter />
</section>

<style>
</style>
