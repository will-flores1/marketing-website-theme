<script></script>

<div class="wrap">
	<div class="left-div">
		<h1 class="tag-line">About you, not about us.</h1>
		<a href="/">Let's talk business &#8611;</a>
	</div>
	<div class="right-div">
		<img
			class="astronaut-img"
			src="src/lib/images/astronaut.png"
			alt="Astronaut riding on a horse in space."
		/>
	</div>
</div>

<style>
	.wrap {
		height: 50%;
		width: 100%;
		overflow: auto;
		background-color: black;
		overflow: hidden;
	}

	.left-div {
		float: left;
		width: 49.9%;
		height: 99.8%;
		color: white;
		border-right: 1px solid rgba(255, 255, 255, 0.362);
		border-bottom: 1px solid rgba(255, 255, 255, 0.362);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		/* padding: 0 4rem; */
	}
	.right-div {
		float: right;
		width: 50%;
		height: 99.8%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.astronaut-img {
		max-width: 20rem;
		border-radius: 1rem 0.7rem 1rem 1rem;
		box-shadow: var(--text-shadow-0);
	}

	.tag-line {
		width: fit-content;
		font-size: 3.2vw;
		font-weight: 600;
		padding: 0 3rem;
		/* margin: 0 auto; */
	}

	a {
		width: fit-content;
		font-size: 2vw;
		font-weight: 500;
		padding: 0 3rem;
		text-decoration: none;
		color: white;
		/* margin: 0 auto; */
	}
	a:hover {
		color: yellow;
		cursor: pointer;
	}
</style>
