<script lang="ts">
	// import Footer from '../components/Footer.svelte';
	// import Header from '../components/Header.svelte';
	// import './styles.css';

	let header: any;
	// $: console.log(header);
</script>

<svelte:body on:scroll={header} />

<div>
	<!-- <Header /> -->

	<section>
		<slot />
	</section>
	<div>this is stupid</div>
</div>

<style>
	div {
		padding-top: 4rem;
	}
</style>
