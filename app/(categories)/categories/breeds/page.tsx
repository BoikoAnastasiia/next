const Breeds = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  if (!response.ok) throw new Error('Failed to fetch data');
  const albums = await response.json();
  return (
    <ul className="flex flex-wrap gap-4">
      {albums.map((album: any) => (
        <li className="bg-gray-100 p-4 rounded-md" key={album.id}>
          {album.title}
        </li>
      ))}
    </ul>
  );
};

export default Breeds;
