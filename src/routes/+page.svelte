<script>
  import Header from '../components/Header.svelte';
  import SongInput from '../components/SongInput.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<Header />

<main class="text-center">
  <SongInput />

  <button type="button" class="btn btn-primary">Remix!</button>
</main>

<Footer />
