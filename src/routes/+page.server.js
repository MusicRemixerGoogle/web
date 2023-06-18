export const actions = {
  search: async ({ cookies, request }) => {
		// console.log(request);

    const data = await request.formData();

    console.log(data);
  }
};
