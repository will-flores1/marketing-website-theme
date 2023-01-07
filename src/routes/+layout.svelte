<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import './styles.css';

	let header: any;
	$: console.log(header);
</script>

<svelte:body on:scroll={header} />

<div class="app">
	<Header />

	<section>
		<slot />
	</section>

	<Footer />
</div>

<style>
	footer {
		background-color: white;
	}
	@media (min-width: 480px) {
	}
</style>
