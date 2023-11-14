export default {
  name: 'product',
  type: 'document',
  title: 'Produto',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome do produto',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Imagens dos produtos',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descrição do produto',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug do produto',
      options:{
        source: "name"
      }
    },
    {
      name: 'price',
      type: 'number',
      title: 'Preço do produto',
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Categoria do produto',
      to:[
        {
          type: "category"
        }
      ]
    },
  ],
}
