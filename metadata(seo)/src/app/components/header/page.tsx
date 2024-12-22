import Link from "next/link";

export default function Header() {
  return (
    <header className="flex px-2 py-4 bg-zinc-900 text-white mb-[12.5px]">
      <div className="flex items-center justify-between w-full mx-[2px]">
            <div className="text-2xl">
                  Next JS
            </div>

            <nav>
                  <ul className="flex items-center justify gap-2">
                        <li className="text-base">
                              <Link href="/">
                                    Home
                              </Link>
                        </li>
                        <li className="text-base">
                              <Link href="/posts">
                                    Posts
                              </Link>
                        </li>
                        <li className="text-base">
                              <Link href="/dashboard">
                                    Dashboard
                              </Link>
                        </li>
                  </ul>
            </nav>
      </div>
    </header>
  )
}