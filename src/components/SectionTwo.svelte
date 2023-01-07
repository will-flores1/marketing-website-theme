<script></script>

<div class="wrap">
	<div class="left-div">
		<h1 class="tag-line">
			Reach more people, drive more traffic, and skyrocket profits - all at the price of your
			dreams.
		</h1>
	</div>
	<div class="right-div">
		<img class="man-on-moon" src="src/lib/images/manOnMoon.png" alt="Man on the moon" />
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
		float: left;
		width: 49.8%;
		height: 100%;

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
</style>
