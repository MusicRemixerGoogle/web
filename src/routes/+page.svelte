<script>
  import Header from '../components/Header.svelte';
  import SongInput from '../components/SongInput.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<Header />

<main class="text-center p-4">
  <SongInput />

  <button
    class="center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Remix!
  </button>
</main>

<Footer />
