<script>
	import * as config from '$lib/site/config'
</script>

<footer>
	<div class="follow">
		<p>FOLLOW</p>
		<ul>
			<li>
				<a href="/newsletter">Newsletter</a>
			</li>
			<li>
				<a href="/rss.xml" target="_blank">RSS</a>
			</li>
			<li>
				<a href={config.matrix} target="_blank" rel="noreferrer">Matrix</a>
			</li>
			<li>
				<a href={config.codeberg} target="_blank" rel="noreferrer">Codeberg</a>
			</li>
			<li>
				<a href={config.github} target="_blank" rel="noreferrer">GitHub</a>
			</li>
			<li>
				<a href={config.codechef} target="_blank" rel="noreferrer">CodeChef</a>
			</li>
			<li>
				<a href={config.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
			</li>
	 	</ul>
	</div>

	<div class="other">
		<p>OTHER</p>
		<ul>
			<li><a href="/about">About</a></li>
			<li><a href="https://codeberg.org/XADE/dotbin/wiki" target="_blank">I Use</a></li>
			<li><a href="https://joyofcode.xyz" target="_blank">Site From</a></li>
		</ul>
	</div>

	<figure>
		<div class="decorative" />
		<blockquote>
			<span>
				“No One Knows What The OutCome Will Be.
        So, Choose Whatever You'll Regret The Least.”
			</span>
		</blockquote>
		<figcaption>— Levi</figcaption>
	</figure>
</footer>

<style>
	footer {
		display: grid;
		grid-template-columns: repeat(12, [column-start] 1fr);
		column-gap: var(--spacing-24);
		row-gap: var(--spacing-32);
		margin-top: var(--spacing-64);
		padding: var(--spacing-32);
		background-color: var(--clr-footer-bg);
		border-top: 1px solid var(--clr-menu-border);
		border-left: 1px solid var(--clr-menu-border);
		border-radius: var(--rounded-20) var(--rounded-20) 0 0;
	}

	footer > * {
		grid-column: column-start 1 / span 12;
	}

	footer p {
		font-weight: 700;
	}

	footer ul {
		width: max-content;
		display: grid;
		grid-template-rows: repeat(5, 1fr);
		grid-auto-flow: column;
		column-gap: var(--spacing-32);
		row-gap: var(--spacing-16);
		margin-top: var(--spacing-16);
	}

	footer li a {
		font-weight: inherit;
		color: var(--clr-footer-txt);
	}

	footer li a:hover {
		color: var(--clr-primary);
	}

	footer figure {
		max-width: 400px;
		display: grid;
		align-items: center;
		justify-self: center;
	}

	footer figure > * {
		grid-column: 1 / 1;
		grid-row: 1 / 1;
	}

	footer figure .decorative {
		width: 240px;
		height: 240px;
		justify-self: center;
		background-image: linear-gradient(
			120deg,
			hsl(300 70% 60%),
			hsl(240 74% 58%)
		);
		border-radius: 100%;
	}

	footer blockquote {
		font-size: clamp(var(--font-23), 3vw, var(--font-32));
		font-family: var(--font-sans);
		text-shadow: 2px 2px 10px hsl(0 0% 0% / 10%);
	}

	html[data-font='dyslexic'] footer blockquote {
		font-family: var(--font-dyslexic);
		font-size: var(--font-23);
		line-height: 32px;
	}

	footer figcaption {
		align-self: end;
	}

	@media (min-width: 860px) {
		footer figure {
			grid-column: column-start 9 / -1;
		}

		footer .follow {
			grid-column: column-start 1 / span 4;
		}

		footer .categories {
			grid-column: column-start 5 / span 2;
		}

		footer .other {
			grid-column: column-start 7 / span 2;
		}
	}

	@media (min-width: 1240px) {
		footer ul {
			width: auto;
			column-gap: 0;
		}
	}
</style>
