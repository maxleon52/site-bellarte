export default {
  name: 'category',
  type: 'document',
  title: 'Categoria',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome da categoria',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug do produto',
      options:{
        source: "name"
      }
    },
  ],
}
