<script lang="ts">
	import Header from './components/Header.svelte';
	import './styles.css';

	let header: any;
	$: console.log(header)
</script>

<svelte:body on:scroll={header} />

<div class="app">
	<Header/>

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>

	@media (min-width: 480px) {

	}
</style>
