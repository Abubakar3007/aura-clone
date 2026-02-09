import Layout from '@/app/components/layout/Layout'
import Link from 'next/link';
const Creative = () => {

  // dummy image link
  const images = [
        "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-9-682x1024.jpg",
        "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-11-682x1024.jpg",
        "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-3-682x1024.jpg",
        "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-10-682x1024.jpg",
        "https://www.bringitonline.in/uploads/2/2/4/5/22456530/bio-ank-16_orig.jpg",
        "https://www.bringitonline.in/uploads/2/2/4/5/22456530/bio-ank-21_orig.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBctKcK2zV42qYfMq_bIRik7sxfgFO1ZaBkEZ1qi0FXA&s",
        "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-1-682x1024.jpg",
        "https://praveenbhat.net/wp-content/uploads/2024/08/Screenshot-2024-08-10-191725.png",
  ];

  return (
    <Layout>
      {/* details */}
      <section className='pt-12 pb-20'>
        <div className='container xl:px-0 px-6 flex items-end gap-20 md:flex-row flex-col-reverse'>
          {/* left container */}
          <div className='flex-1'>
            <h1 className='text-[27px] leading-10 mb-3'>Meet Harshad</h1>
            <p className='font-semibold mb-4'>Creative consultant | Fashion Director | Stylist</p>
            <p className='mb-4'>Harshad an alumnus of the London College of Style, brings over a decade of expertise to the global fashion and advertising industry. Recognised internationally, he was honoured with the Fashion Stylist Award at the Fashion Asia Awards 2014 (China).</p>
            <p className='mb-4'>Over the years, Harshad has collaborated with celebrated designers including Tarun Tahiliani, Manish Malhotra, Aisha Rao, and Iqbal Hussain, along with executing high impact creative direction across New York and other international markets.</p>
            <p>His portfolio spans major campaigns for brands such as <strong>Lakme, Xiaomi, Pepsi, Tanishq, Titan, Airtel, Toyota, Kohler</strong>, and many more reflecting his signature blend of contemporary styling, cultural sensitivity, and editorial finesse.</p>
          </div>

          {/* right image */}
          <div className='flex-1'>
            <figure>
              <img src="https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-2-682x1024.jpg" alt="Creative image" />
            </figure>
          </div>
        </div>
      </section>

      {/* details card */}
      <section>
        <div className='container xl:px-0 px-6'>
          <div className="gap-4 md:columns-3 sm:columns-2">
            {images.map((img, i) => (
              <Link href="/creatives" key={i}>
                <img
                  src={img}
                  className="mb-4 w-full break-inside-avoid"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Creative