<script></script>

<div class="wrap">
	<div class="left-div" />
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
		height: 100%;
		border-right: 1px solid rgba(255, 255, 255, 0.362);
	}

	.right-div {
		float: left;
		width: 50%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.man-on-moon {
		max-width: 20rem;
		border-radius: 1px 0.7rem 1px 0;
		box-shadow: var(--text-shadow-1);
	}
</style>
