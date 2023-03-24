<script>
	import Logo from '$lib/components/Logo.svelte;

	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import '../app.css';
</script>

<main class="w-full h-3/4 min-h-[600px] flex flex-col justify-center items-center">
	<div class="container flex flex-col items-center px-4 py-8 mx-auto text-center">
		<header class="flex flex-row items-center gap-4">
			<img
				src="favicon-96x96.png"
				alt="MyBrain"
				class="rounded-md shadow shadow-slate-300 dark:shadow-slate-900"
			/>
			<Logo />
		</header>
	</div>

	<div class="container mx-auto px-4 my-8">
		<h2 class="text-center text-5xl font-semibold mb-8">Control the web with the power of AI</h2>

		<p class="text-center max-w-2xl mx-auto">
			Boost your online experience with GPT-Commands, a GPT-4 Chrome extension for rapid, precise
			responses. Enter your OpenAI API key to get started.
		</p>
	</div>

	<Button link="https://buy.stripe.com/6oEbLM0RQ2yV4iQ8wx" animated>$39 Preorder now</Button>
	<p class="text-center text-xs max-w-xl mx-auto italic text-gray-500 dark:text-gray-300 my-4">
		You'll be notified of the launch via email
	</p>

	<!-- <div class="flex flex-col lg:flex-row justify-center items-center gap-8">
		<div>
			<div
				class="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0"
			>
				<div class="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
					<div class="p-6">
						<h1 class="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">
							Pre-launch
						</h1>

						<p class="mt-4 text-gray-500 dark:text-gray-300">
							Obtain a lifetime GPT Commands license without a subscription.<br />
							Simply input your OpenAI API key to harness the full potential of OpenAI models.
						</p>

						<h2
							class="mt-4 text-2xl text-center font-semibold text-gray-700 sm:text-3xl dark:text-gray-300"
						>
							$39.00
						</h2>

						<p class="mt-1 text-gray-500 text-center dark:text-gray-300">Lifetime license</p>

						<a
							class="block text-center w-full px-4 py-2 mt-6 tracking-wide text-white transition-colors duration-300 transform bg-cyan-600 rounded-md hover:bg-cyan-500 focus:outline-none focus:bg-cyan-500 focus:ring focus:ring-cyan-300 focus:ring-opacity-80"
							href="https://buy.stripe.com/6oEbLM0RQ2yV4iQ8wx">Preorder a license</a
						>
					</div>
				</div>
			</div>
		</div> -->
</main>
<div class="flex flex-col gap-16 xl:gap-32">
	<section
		class="w-full container mx-auto flex flex-col lg:flex-row justify-center items-center gap-16 px-4"
	>
		<div class="max-w-lg">
			<h2 class="text-4xl font-bold text-gray-800 dark:text-gray-100 xl:text-3xl mb-8">
				<Icon name="verified" class="text-yellow-300 text-xl" /> Influencer Mode
			</h2>
			<p>
				GPT Commands allows users to become notable Twitter influencers, effectively boosting their
				engagement, reach, and impact on the platform.
			</p>
		</div>
		<img src="twitter-post.gif" alt="" class="max-w-xl w-full rounded-2xl" />
	</section>
	<section
		class="w-full container mx-auto flex flex-col-reverse lg:flex-row justify-center items-center gap-16 px-4"
	>
		<img src="devto-article.gif" alt="" class="max-w-xl w-full rounded-2xl" />
		<div class="max-w-lg">
			<h2 class="text-4xl font-bold text-gray-800 dark:text-gray-100 xl:text-3xl mb-8">
				<Icon name="border_color" class="text-green-500 text-xl" /> Writer Mode
			</h2>
			<p>
				The Writer Mode in GPT-Commands allows you to delegate your writing tasks to GPT-4. Whether
				it's composing a Twitter post or any other content, simply input your requirements, and
				GPT-4 will generate the desired text, saving you time and effort.
			</p>
		</div>
	</section>
	<section
		class="w-full container mx-auto flex flex-col lg:flex-row justify-center items-center gap-16 px-4"
	>
		<div class="max-w-lg">
			<h2 class="text-4xl font-bold text-gray-800 dark:text-gray-100 xl:text-3xl mb-8">
				<Icon name="translate" class="text-sky-500 text-xl" /> Translator Mode
			</h2>
			<p>
				Translator mode in GPT Commands swiftly and accurately converts text between languages,
				enabling seamless global communication.
			</p>
		</div>
		<img src="twitter-transalte.gif" alt="" class="max-w-xl w-full rounded-2xl" />
	</section>
	<section
		class="w-full container mx-auto flex flex-col-reverse lg:flex-row justify-center items-center gap-16 px-4"
	>
		<img src="github-fixgrammar.gif" alt="" class="max-w-xl w-full rounded-2xl" />
		<div class="max-w-lg">
			<h2 class="text-4xl font-bold text-gray-800 dark:text-gray-100 xl:text-3xl mb-8">
				<Icon name="menu_book" class="text-pink-500 text-xl" /> Fix grammar
			</h2>
			<p>
				Fix grammar feature efficiently detects and corrects grammatical errors, enhancing text
				clarity and ensuring polished communication.
			</p>
		</div>
	</section>
</div>

<div class="flex flex-col items-center justify-center py-16 xl:py-32">
	<Button link="https://buy.stripe.com/6oEbLM0RQ2yV4iQ8wx" animated>$39 Preorder now</Button>
	<p class="text-center text-xs max-w-xl mx-auto italic text-gray-500 dark:text-gray-300 my-4">
		You'll be notified of the launch via email
	</p>
</div>

<footer class="flex flex-row justify-center pb-16">
	<p>
		Updates on twitter <a
			href="https://twitter.com/e_pavanello"
			class="font-semibold hover:underline"
			target="_blank">EmaGPT✨</a
		>
	</p>
</footer>
