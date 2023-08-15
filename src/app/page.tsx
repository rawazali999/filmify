import Link from 'next/link'

export default function Home() {
  return (
    <main> <div>Home</div>
      <Link href={'/about'}> go to about</Link>
    </main>
  )
}
