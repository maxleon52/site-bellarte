export default {
  name: 'product',
  type: 'document',
  title: 'Produto',
  fields: [
    {
      name: 'heroImage',
      type: 'boolean',
      title: 'Deve aparecer na seção inicial?',
    },
    {
      name: 'highlight',
      type: 'boolean',
      title: 'Deve aparecer na seção de Destaques?',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Ordem de exibição no carrosel (Só preencher se for exibir!)',
    },
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
