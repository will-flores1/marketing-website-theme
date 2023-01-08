<script>
	import Section from '../components/Section.svelte';
	import SectionTwo from '../components/SectionTwo.svelte';
	import Hero from '../components/Hero.svelte';
	import Services from '../components/Services.svelte';
</script>

<svelte:head>
	<title>Rocket Websites</title>
	<meta
		name="description"
		content="Rocket Websites, building creative websites in Montgomery County."
	/>
</svelte:head>

<section>
	<div class="background-img">
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
		background: url(../lib/images/background-image.jpg) top right no-repeat;
		background-attachment: fixed;
		/* background-size: 100%; */
		background-size: cover;
	}
</style>
