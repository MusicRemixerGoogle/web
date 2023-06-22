import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';

let token = '';

export async function load() {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  });

  const data = await res.json();
  token = data.access_token;
}

export const actions = {
  search: async ({ request }) => {
    const data = await request.formData();
    const song = data.get('song');

    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${song}&type=track&limit=5`,
      { headers: { Authorization: 'Bearer ' + token } }
    );
    const songs = await response.json();

    console.log(songs.tracks);
  }
};
