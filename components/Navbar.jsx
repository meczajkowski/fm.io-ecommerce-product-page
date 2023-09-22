import Link from 'next/link';
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
            <div className=''>
              <img src='/logo.svg' alt='' />
            </div>
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
            <div className=''>
              <img src='/icon-cart.svg' alt='' className='w-full h-full' />
            </div>
            {/* profile */}
            <div className='w-12'>
              <img src='image-avatar.png' alt='' className='w-full h-full' />
            </div>
          </div>
        </nav>
      </header>
    </Container>
  );
}
