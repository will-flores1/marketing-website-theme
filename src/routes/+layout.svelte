<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import './styles.css';

	let header: any;
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
</style>
