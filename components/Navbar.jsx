import Link from 'next/link';
import Image from 'next/image';

import Container from './ui/Container';
const routes = [
  {
    label: 'Collections',
    href: '#',
  },
  {
    label: 'Men',
    href: '#',
  },
  {
    label: 'Women',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
];

export default function Navbar() {
  return (
    <Container>
      <header>
        <nav className='h-28 flex justify-between items-center border-b'>
          {/* left side */}
          <div className='flex justify-between w-full max-w-[590px]'>
            {/* logo */}
            <Link href='#' className=''>
              <Image width={138} height={20} src='/logo.svg' alt='' />
            </Link>
            {/* nav links */}
            <ul className='hidden md:flex'>
              {routes.map((route) => (
                <li className='mx-3'>
                  <Link href={route.href} className=''>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* right side */}
          <div className='flex items-center justify-between w-full max-w-[120px]'>
            {/* cart */}
            <div className='cursor-pointer'>
              <Image
                width={22}
                height={20}
                src='/icon-cart.svg'
                alt=''
                className='w-full h-full'
              />
            </div>
            {/* profile */}
            <div className='cursor-pointer w-12'>
              <Image
                width={48}
                height={48}
                src='/image-avatar.png'
                alt=''
                className='w-full h-full'
              />
            </div>
          </div>
        </nav>
      </header>
    </Container>
  );
}
