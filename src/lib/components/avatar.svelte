<script lang="ts">
	import clsx from 'clsx';

	export let src: string, alt: string;
</script>

<section class={clsx('w-9 h-9 md:w-8 md:h-8 rounded-full border border-white overflow-hidden')}>
	<img {src} {alt} {...$$restProps} />
</section>
