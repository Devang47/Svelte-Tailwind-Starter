<script>
  import '$styles/style.scss';
  import Button from '$components/button.svelte';
</script>

<h1 class="bg-red-600">Welcome to SvelteKit</h1>
<h1 class="bg-red-600">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button />

<style lang="postcss">
  h1 {
    @apply bg-green-600;
  }
</style>
