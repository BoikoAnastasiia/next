import Link from 'next/link'
const Characters = () => {
  return (
    <ul className='grid grid-cols-3 gap-4'>
        <li className='bg-gray-100 p-4 rounded-md'><Link href='/categories/characters/1'>Character 1</Link></li>
        <li className='bg-gray-100 p-4 rounded-md'><Link href='/categories/characters/2'>Character 2</Link></li>
        <li className='bg-gray-100 p-4 rounded-md'><Link href='/categories/characters/3'>Character 3</Link></li>
    </ul>
  )
}

export default Characters