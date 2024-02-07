const client = require('./client');

const booksSchema = {
  name: 'companies',
  fields: [
    {
      name: 'company_name',
      type: 'string',
      facet: false,
    },
    {
      name: 'num_employees',
      type: 'int32',
      facet: false,
    },
    {
      name: 'country',
      type: 'string',
      facet: true,
    },
  ],
  default_sorting_field: 'num_employees',
};
client
  .collections()
  .create(booksSchema)
  .then(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.log('book schema error', err);
    }
  );
