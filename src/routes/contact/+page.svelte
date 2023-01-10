<script lang="ts">
	const valueDefaults = {
		name: '',
		email: '',
		companyname: '',
		contact: '',
		inquirytype: 'Website creation',
		numberofpages: '1',
		budget: '$500-$2000',
		timeline: 'Need to do it right',
		message: ''
	};
	let values = { ...valueDefaults };

	$: console.log(values);

	async function reset(event: any) {
		const formData = new FormData(event.target);
		// console.log([...formData]);
		setTimeout(() => {
			values = { ...valueDefaults };
		}, 1000);
		// alert("Thank you for your submission! We'll get back to you soon.");
	}
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact this company" />
</svelte:head>

<div class="form-column">
	<form class="contact-form" action="https://formsubmit.co/wilfloresjr@gmail.com" method="POST">
		<input type="hidden" name="_next" value="https://rocket-websites.vercel.app/thank-you" />
		<input type="hidden" name="_subject" value="New submission!" />
		<h1>Contact Us</h1>
		<div class="form-row">
			<div class="col">
				<label for="name">Name<span style="color: red;">*</span></label>
				<input
					type="text"
					name="name"
					class="form-control"
					placeholder="Full Name"
					bind:value={values.name}
					required
				/>
			</div>
			<div class="col">
				<label for="email">Email<span style="color: red;">*</span></label>
				<input
					type="email"
					name="email"
					class="form-control"
					placeholder="Email Address"
					bind:value={values.email}
					required
				/>
			</div>
		</div>

		<div class="form-row">
			<div class="col">
				<label for="companyname">Company Name<span style="color: red;">*</span></label>
				<input
					type="text"
					name="companyname"
					placeholder="Name"
					bind:value={values.companyname}
					required
				/>
			</div>
			<div class="col">
				<label for="phoneNumber">Phone Number (optional)</label>
				<input
					type="tel"
					name="contact"
					class="form-control"
					placeholder="ex. 301-324-0234"
					bind:value={values.contact}
					pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
				/>
			</div>
		</div>

		<div class="form-row">
			<div class="col">
				<label for="inquirytype">Inquiry type<span style="color: red;">*</span></label>
				<select name="inquirytype" class="inquirytype" bind:value={values.inquirytype} required>
					<option value="Website creation">Website creation</option>
				</select>
			</div>
			<div class="col">
				<label for="numberofpages">Number of Pages<span style="color: red;">*</span></label>
				<select
					name="numberofpages"
					class="numberofpages"
					bind:value={values.numberofpages}
					required
				>
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
				<select name="budget" class="budget" bind:value={values.budget} required>
					<option value="$500-$2000">$500-$2000</option>
					<option value="$2000-$4000">$2000-$4000</option>
					<option value="$4000-$7000">$4000-$7000</option>
					<option value="$7000+">$7000+</option>
				</select>
			</div>
			<div class="col">
				<label for="timeline">Timeline <span style="color: red;">*</span></label>
				<select name="timeline" class="timeline" bind:value={values.timeline} required>
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
				bind:value={values.message}
				required
			/>
		</div>
		<button type="submit">Submit</button>
	</form>
</div>

<style>
	h1 {
		font-weight: 300;
		font-size: clamp(4rem, 4vw, 8rem);
		font-family: 'Sofia Sans Condensed', sans-serif;
		font-weight: 400;
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
		font-family: sans-serif;
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

	@media screen and (max-width: 992px) {
		.contact-form {
			padding: 5rem 1.5rem 1.5rem 1.5rem;
		}
	}
</style>
