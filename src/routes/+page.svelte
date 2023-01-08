<script>
	import Section from '../components/Section.svelte';
	import SectionTwo from '../components/SectionTwo.svelte';
	import Hero from '../components/Hero.svelte';
	import Services from '../components/Services.svelte';

	let y = 0;
	$: console.log(y * 0.005);
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	<title>Rocket Websites</title>
	<meta
		name="description"
		content="Rocket Websites, building creative websites in Montgomery County."
	/>
</svelte:head>

<section>
	<div>
		<div
			class="background-img"
			style="transform: translateY({y * 0.4}px) scale3d({y * 0.0001 + 1}, {y * 0.0001 + 1}, {y *
				0.0001 +
				1}); filter: blur({y * 0.005 + 0.1}px);"
		/>
		<Hero />
	</div>
	<Section />
	<SectionTwo />
	<Services />
</section>

<style>
	.background-img {
		height: 100vh;
		/* height: 100%; */
		background-image: url(../lib/images/background-image.jpg);
		position: relative;
		z-index: -10;
		background-attachment: fixed;
		/* background-size: 100%; */
		background-size: cover;
	}
</style>
