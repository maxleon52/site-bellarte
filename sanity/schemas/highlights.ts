export default {
  name: 'highlightsImages',
  type: 'document',
  title: 'Imagens da seção Destaques',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome do produto',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Pequena descrição do produto',
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
