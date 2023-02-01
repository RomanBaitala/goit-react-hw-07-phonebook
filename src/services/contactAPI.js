import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'phonebook',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63d918e774f386d4efe480a5.mockapi.io/api/v1/contacts',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchPhonebook: builder.query({
      query: () => '/contacts',
      providesTags: () => [{ type: 'Contacts' }],
    }),

    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: () => [{ type: 'Contacts' }],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [{ type: 'Contacts' }],
    }),
  }),
});

export const {
  useFetchPhonebookQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsAPI;
