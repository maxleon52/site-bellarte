export default {
  name: 'heroImage',
  type: 'document',
  title: 'Imagens da seção hero',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome do produto',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagem',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Ordem de visualização',
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
