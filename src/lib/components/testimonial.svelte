<script lang="ts">
	import clsx from 'clsx';

	import Avatar from './avatar.svelte';
	import Card from './card.svelte';

	let clz: string = '';
	export let src: string, name: string, rank: string, title: string, description: string;
	export { clz as class };
</script>

<Card class={clsx('text-neutral-light-grayish-blue', clz)}>
	<div class="flex items-center gap-4">
		<Avatar {src} alt={name} />
		<div>
			<p class="text-current md:text-sm">{name}</p>
			<p class="text-current opacity-50 text-sm md:text-xs">{rank}</p>
		</div>
	</div>
	<section>
		<p
			class="text-current font-semibold text-xl md:text-base tracking-widest md:leading-5 mt-5 md:mt-3"
		>
			{title}
		</p>
		<p class="text-current opacity-70 text-sm md:text-xs mt-5 md:mt-3">{description}</p>
	</section>
</Card>
