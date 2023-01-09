<script>
	import astronaut from '../lib/images/astronaut.png';
</script>

<div class="wrap">
	<div class="left-div">
		<h1 class="tag-line">About you, not about us.</h1>
		<a href="/">Let's talk business <span style="color: yellow;">&#8611;</span></a>
	</div>
	<div class="right-div">
		<img class="astronaut-img" src={astronaut} alt="Astronaut riding on a horse in space." />
	</div>
</div>

<style>
	.wrap {
		height: 50vh;
		width: 100%;
		background-color: black;
		overflow: auto;
		display: flex;
	}

	.left-div {
		width: 49.9%;
		height: 99.8%;
		color: white;
		border-right: 1px solid rgba(255, 255, 255, 0.362);
		border-bottom: 1px solid rgba(255, 255, 255, 0.362);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.right-div {
		width: 49.8%;
		height: 99.8%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.astronaut-img {
		width: clamp(10rem, 20vw, 25rem);
		border-radius: 1rem 0.7rem 1rem 1rem;
		box-shadow: var(--text-shadow-0);
	}

	.tag-line {
		width: fit-content;
		font-size: clamp(2rem, 3.2vw, 10rem);
		font-weight: 600;
		padding: 0 3rem;
		/* margin: 0 auto; */
	}

	a {
		width: fit-content;
		font-size: clamp(1.3rem, 2.5vw, 8rem);
		font-weight: 500;
		padding: 0 3rem;
		text-decoration: none;
		color: white;
		transition: all 0.2s ease;
		/* margin: 0 auto; */
	}
	a:hover {
		/* text-decoration: underline; */
		color: yellow;
		cursor: pointer;
	}

	@media screen and (max-width: 992px) {
	}
</style>
