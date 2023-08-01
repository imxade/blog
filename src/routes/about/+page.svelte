<script lang="ts">
	import Heading from '$lib/ui/heading.svelte'
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<Heading>About</Heading>

<main>
	<p>
    Hi,<br><br>
    I'm Someone Who: <br><br>
    .. is always urging for something new. <br>
    .. likes Anime and Games. <br>
    .. is "too lazy to even exist".<br>
    .. shamelessly copied <a href="https://joyofcode.xyz">Joy of Code.</a>
	</p>
	<p>
		Apart from that, I'm an Open Source enthusiast, who enjoys <strong>Freedom.</strong> <br>
		I created this site as an organized catalog for my experience and knowledge. <br><br>
    One can find more about me <a href="https://portfolio.x4de.repl.co/">here</a>.
	</p>
</main>

<style>
	main {
		max-width: 60ch;
		margin-inline: auto;
		display: grid;
		row-gap: var(--spacing-32);
		margin-bottom: var(--spacing-64);
    font-weight: 500;
	}
</style>
