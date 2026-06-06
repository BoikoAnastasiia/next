const Character = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
  return (
    <div>Character details page {id}</div>
  )
}

export default Character