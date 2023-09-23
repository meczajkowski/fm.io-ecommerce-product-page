import Image from 'next/image';
import Container from '@/components/ui/Container';

export default function Home() {
  return (
    <main>
      <Container>
        <section className='grid grid-cols-2  items-center px-10 py-24'>
          <div className=''>
            <Image
              height={450}
              width={450}
              src={'/image-product-1.jpg'}
              alt='product image 1'
              className='rounded-2xl'
            />
          </div>
          <div className=''>
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
            <div className='mt-7'>
              <div className='flex items-center'>
                <h3 className='font-bold text-3xl'>$125.00</h3>
                <h4 className='ml-4 py-1 px-2 rounded-md text-primary font-bold bg-primary-muted leading-[1em]'>
                  50%
                </h4>
              </div>
            </div>
            <div className=''>
              <h5 className='line-through font-bold text-muted my-2'>
                $250.00
              </h5>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
