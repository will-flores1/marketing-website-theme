<script>
	import manOnMoon from '../lib/images/manOnMoon.png';
</script>

<div class="wrap">
	<div class="left-div">
		<h1 class="tag-line">
			Reach more people, drive more traffic, and skyrocket profits - all at the price of your
			dreams.
		</h1>
	</div>
	<div class="right-div">
		<img class="man-on-moon" src={manOnMoon} alt="Man on the moon" />
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
		/* float: left; */
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
		/* float: left; */
		width: 49.8%;
		height: 99.8%;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.man-on-moon {
		width: clamp(10rem, 20vw, 25rem);
		border-radius: 1px 0.7rem 1px 0;
		box-shadow: var(--text-shadow-1);
	}

	.tag-line {
		width: fit-content;
		font-size: clamp(2rem, 3.2vw, 10rem);
		font-weight: 600;
		padding: 0 3rem;
		/* margin: 0 auto; */
	}

	@media screen and (max-width: 992px) {
		.tag-line {
			padding: 1rem;
			font-size: 2rem;
		}

		.man-on-moon {
			width: clamp(6.5rem, 20vw, 25rem);
			border-radius: 1px 0.7rem 1px 0;
			box-shadow: var(--text-shadow-1);
		}
	}
	@media screen and (max-width: 500px) {
		.tag-line {
			font-size: 1.5rem;
			padding: 1rem;
		}
	}
</style>
