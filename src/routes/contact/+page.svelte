<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact this company" />
</svelte:head>

<div class="form-column">
	<form
		class="contact-form"
		target="_blank"
		action="https://formsubmit.co/your@email.com"
		method="POST"
	>
		<h1>Contact Us</h1>
		<div class="form-row">
			<div class="col">
				<label for="name">Name<span style="color: red;">*</span></label>
				<input type="text" name="name" class="form-control" placeholder="Full Name" required />
			</div>
			<div class="col">
				<label for="email">Email<span style="color: red;">*</span></label>
				<input
					type="email"
					name="email"
					class="form-control"
					placeholder="Email Address"
					required
				/>
			</div>
		</div>

		<div class="form-row">
			<div class="col">
				<label for="company-name">Company Name<span style="color: red;">*</span></label>
				<input type="text" name="company-name" placeholder="Name" required />
			</div>
			<div class="col">
				<label for="phoneNumber">Phone Number (optional)</label>
				<input
					type="tel"
					name="contact"
					class="form-control"
					placeholder="ex. 301-324-0234"
					pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
				/>
			</div>
		</div>

		<div class="form-row">
			<div class="col">
				<label for="inquiry-type">Inquiry type<span style="color: red;">*</span></label>
				<select name="inquiry-type" class="inquiry-type" required>
					<option value="Website creation">Website creation</option>
				</select>
			</div>
			<div class="col">
				<label for="number-of-pages">Number of Pages<span style="color: red;">*</span></label>
				<select name="number-of-pages" class="number-of-pages" required>
					<option value="1">1</option>
					<option value="2-5">1-5</option>
					<option value="5+">5-10</option>
					<option value="10+">10+</option>
				</select>
			</div>
		</div>

		<div class="form-row">
			<div class="col">
				<label for="budget">Budget<span style="color: red;">*</span></label>
				<select name="budget" class="budget" required>
					<option value="$500-$2000">$500-$2000</option>
					<option value="$2000-$4000">$2000-$4000</option>
					<option value="$4000-$7000">$4000-$7000</option>
					<option value="$7000+">$7000+</option>
				</select>
			</div>
			<div class="col">
				<label for="timeline">Timeline <span style="color: red;">*</span></label>
				<select name="timeline" class="timeline" required>
					<option value="Need to do it right">Need to do it right</option>
					<option value="1-2 weeks">1-4 weeks</option>
					<option value="1-2 months">1-3 months</option>
					<option value="2-4 months">3-5 months</option>
				</select>
			</div>
		</div>
		<div>
			<label for="message">Message or Project Description</label>
			<textarea
				placeholder="If it helps, some examples mention target launch date, your top goals of the project, and examples of websites you admire."
				class="form-text"
				name="message"
				rows="10"
				required
			/>
		</div>
		<button type="submit">Submit Form</button>
	</form>
</div>

<style>
	h1 {
		font-weight: 300;
		font-size: clamp(4rem, 4vw, 8rem);
	}

	form {
		/* padding: clamp(4rem, 10vw, 10rem); */
		padding: 5rem 10vw;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.form-column {
		padding-top: 6rem;
	}

	.form-row {
		display: flex;
		flex-wrap: wrap;
		flex: 1;
		gap: 2rem;
	}

	.col {
		display: flex;
		flex-direction: column;
		flex: 1;
		flex-grow: 1;
	}

	label {
		font-family: sans-serif;
		font-size: 17px;
		line-height: 1.65em;
		font-weight: 400;
		color: #3d3d3d;
		-webkit-font-smoothing: antialiased;
		hyphens: manual;
		margin: 0;
		padding: 0;
		background: 0 0;
		border: 0;
		outline: 0;
		display: block;
		margin-bottom: 0.5em;
		box-sizing: border-box;
		padding-bottom: 0px;
	}

	select,
	input {
		min-height: 40px;
		position: relative;
		display: inline-block;
		margin: 0 0 0;
		padding: 22px 20px;
		font-family: inherit;
		font-size: 16px;
		line-height: 24px;
		font-weight: inherit;
		border-radius: 0;
		outline: 0;
		transition: color 0.2s ease-out, background-color 0.2s ease-out, border-color 0.2s ease-out;
		min-width: 20rem;
		border: 1px solid #818a91;
		color: #373a3c;
		vertical-align: middle;
		flex-grow: 1;
		flex-basis: 100%;
		max-width: 100%;
		background-color: #ffffff;
	}

	.form-text {
		line-height: 24px;
		font-size: 1rem;
		font-weight: inherit;
		border: 1px solid #818a91;
		color: #373a3c;
		margin: 0 0 0;
		padding: 22px 20px;
		font-family: sans-serif;
		min-width: 100%;
	}
	.form-text::placeholder {
		color: rgba(0, 0, 0, 0.472);
	}
	input::placeholder {
		color: rgba(0, 0, 0, 0.472);
	}

	button {
		font-family: sans-serif;
		background-color: black;
		color: white;
		border-radius: 1px;
		padding: 1.9rem 0;
		font-size: 1rem;
	}
	button:hover {
		cursor: pointer;
	}
</style>
