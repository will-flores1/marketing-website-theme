<script lang="ts">
	import Section from '../components/Section.svelte';
	import Header from '../components/Header.svelte';
	import './styles.css';

	let header: any;
	$: console.log(header);
</script>

<svelte:body on:scroll={header} />

<div class="app">
	<div class="main">
		<Header />

		<section>
			<slot />
		</section>
	</div>
	<Section />

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		height: 100vh;
	}
	.main {
		height: 100%;
		background: url(../lib/images/background-image.jpg) top right no-repeat;
		background-attachment: fixed;
		/* background-size: 100%; */
		background-size: cover;
	}
	footer {
		background-color: black;
	}
	@media (min-width: 480px) {
	}
</style>
