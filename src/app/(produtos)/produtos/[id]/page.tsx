export default function Product({ params }: { params: { id: string } }) {
  return <div>Meu Produto: {params.id}</div>;
}
