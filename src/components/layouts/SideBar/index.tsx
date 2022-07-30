import Link from 'next/link'

export const Sidebar = () =>{
  return <>
       <nav >
      <Link href="/about">
        <a>Home</a>
      </Link>
      <Link href="/project">
        <a>project</a>
      </Link>
      <Link href="/stack">
        <a>stack</a>
      </Link>
    </nav>
  </>
}