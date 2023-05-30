export async function GET({ request }) {
  const data = await request.formData();
  console.log('hi');
  console.log(data);
}

// export const actions = {
//   search: async ({ request }) => {
//     const data = await request.formData();
//     console.log(data);
//   }
// };
