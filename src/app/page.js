import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className='text-6xl font-extrabold'>PRODUKTIF APP</h1>
      <Link href="/todo">TODO list</Link>
    </div>
  )
}
