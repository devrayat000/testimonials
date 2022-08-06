<script lang="ts">
	import clsx from 'clsx';

	let clz: string = '';

	export { clz as class };
</script>

<article class={clsx('p-10 md:p-6 rounded-lg shadow-2xl', clz)} {...$$restProps}>
	<slot />
</article>
