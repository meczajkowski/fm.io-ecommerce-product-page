import Image from 'next/image';
import Container from '@/components/ui/Container';

export default function Home() {
  return (
    <main>
      <Container>
        <section className='grid grid-cols-2  w-full items-center justify-between px-10 py-24'>
          {/* left side */}
          <div className=''>
            <Image
              height={450}
              width={450}
              src={'/image-product-1.jpg'}
              alt='product image 1'
              className='rounded-2xl'
            />
          </div>

          {/* right side */}
          <div className='max-w-md ml-auto mr-0'>
            <h1 className='uppercase text-primary font-bold'>
              sneaker company
            </h1>
            <h2 className='text-5xl font-bold mt-4 mb-9 '>
              Fall Limited Edition Sneakers
            </h2>
            <p>
              These low-profile sneakers are your perfect casuale wear
              companion. Featuring a durable rubber outer sole, they'll
              withstand everything the weather can offer.
            </p>

            {/* price section */}
            <div className='mt-7'>
              <div className='flex items-center'>
                <h3 className='font-bold text-3xl'>$125.00</h3>
                <h4 className='ml-4 py-1 px-2 rounded-md text-primary font-bold bg-primary-muted leading-[1em]'>
                  50%
                </h4>
              </div>
              <div className=''>
                <h5 className='line-through font-bold text-muted my-2'>
                  $250.00
                </h5>
              </div>
            </div>

            {/* buttons */}
            <div className='grid grid-cols-3 justify-between w-full gap-5 mt-8'>
              {/* counter */}
              <div className='flex items-center justify-between bg-secondary py-4 px-2 rounded-lg '>
                <img className='cursor-pointer p-2' src='icon-minus.svg'></img>
                <div className='font-bold'>0</div>
                <img className='cursor-pointer p-2' src='icon-plus.svg'></img>
              </div>

              {/* add to cart */}
              <div className='col-span-2'>
                <button className='flex gap-3 items-center justify-center bg-primary text-white w-full py-4 rounded-lg font-bold'>
                  <img src='icon-cart.svg' alt='' className='' /> Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
