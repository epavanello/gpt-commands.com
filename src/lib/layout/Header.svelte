<script lang="ts">
	import classNames from 'classnames';

	export let menuOpen = false;
</script>

<nav class="relative bg-white shadow dark:bg-gray-800">
	<div class="container px-6 py-2 h-16 mx-auto md:flex md:justify-between md:items-center">
		<div class="flex items-center justify-between">
			<a href="#">
				<img class="md:hidden w-auto h-12 rounded-full shadow-sm shadow-slate-500" src="android-icon-48x48.png" alt="" />
			</a>

			<!-- Mobile menu button -->
			<div class="flex md:hidden">
				<button
					on:click={() => (menuOpen = !menuOpen)}
					type="button"
					class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
					aria-label="toggle menu"
				>
					{#if !menuOpen}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>
</nav>
