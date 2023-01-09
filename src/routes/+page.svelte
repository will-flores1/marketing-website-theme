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
	<div class="image-wrapper">
		<div
			class="background-img"
			style="transform: translateY({y * 0.4}px) scale3d({y * 0.00005 + 1}, {y * 0.00005 + 1}, {y *
				0.00005 +
				1}); filter: blur({y * 0.005 + 0.1}px);"
		/>
		<Hero />
	</div>
	<Section />
	<SectionTwo />
	<Services />
</section>

<style>
	/* .image-wrapper {
		max-width: 100vw;
		overflow: hidden;
	} */
	.background-img {
		height: 100vh;
		background-image: url(../lib/images/background-image.jpg);
		position: relative;
		z-index: -10;
		background-attachment: fixed;
		/* background-repeat: no-repeat; */
		background-size: cover;
	}
</style>
