<div>
	<div class="cell-container">
		<div class="cell">
			<h1>Web Design</h1>
			<p>sfljk sflkjsfklsdfl slkfjsdlfjsk k ljdsfl js klsj slfk jdsf lkf sdflk</p>
			<p />
		</div>
		<div class="cell">
			<h1>Consulting</h1>
			<p>sfljk sflkjsfklsdfl slkfjsdlfjsk k ljdsfl js klsj slfk jdsf lkf sdflk</p>
		</div>
		<div class="cell">
			<h1>SEO</h1>
			<p>sfljk sflkjsfklsdfl slkfjsdlfjsk k ljdsfl js klsj slfk jdsf lkf sdflk</p>
		</div>
	</div>
</div>

<style>
	.cell-container {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		flex: 1;
		gap: 1rem;
		padding: 4rem 0;
	}

	.cell {
		width: 20rem;
		height: fit-content;
	}

	h1 {
		text-align: center;
		font-size: clamp(2rem, 3.2vw, 10rem);
	}

	p {
		text-align: center;
	}
</style>
