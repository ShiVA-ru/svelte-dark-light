<div class="page container mx-auto">
	<h1>Welcome to SvelteKit</h1>
	<p>
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
	</p>

	<button
		class="rounded-2xl border-2 p-2 transition-all hover:rounded-4xl"
		onclick={window?.toggleTheme}
		>change theme
	</button>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;

		color: var(--primary-text-color);
	}
	button {
		color: var(--button-text-color);
		background-color: var(--button-background-color);

		cursor: pointer;
	}
</style>
