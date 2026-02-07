import Layout from '@/components/layout/Layout'
import React from 'react'
import creativeDirector from "@/assets/creative-director.jpg";
import { Link } from 'react-router-dom';
const Creative = () => {

  const images = [
    "https://i.redd.it/x8aaxbjh8r6a1.jpg",
    "https://i.guim.co.uk/img/media/f76e2c99e1d0683752be0bc8708f37a09cb4c124/0_205_3072_1843/master/3072.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ed43e7e895c6008bf35ecfef497e7654",
    "https://townsquare.media/site/442/files/2012/04/Avengers19.jpg?w=780&q=75",
    "https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg",
    "https://i.pinimg.com/736x/e8/8d/00/e88d009ac7b4b64a2010a4ed70a5b5f8.jpg",
    "https://i.pinimg.com/736x/3d/0d/f6/3d0df620067c5626253d4ddea72e890a.jpg",
    "https://i.pinimg.com/originals/c9/6c/30/c96c308f905434c7e2f33fa81b9c2763.jpg",
    "https://i.pinimg.com/474x/b3/11/e0/b311e0534efb2363468c32a6a22da362.jpg",
    "https://i.pinimg.com/564x/66/ca/88/66ca888aadad4787e40810e984a53600.jpg",
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
              <img src={creativeDirector} alt="Creative image" />
            </figure>
          </div>
        </div>
      </section>

      {/* details card */}
      <section>
        <div className='container xl:px-0 px-6'>
          <div className="gap-4 md:columns-3 sm:columns-2">
            {images.map((img, i) => (
              <Link to="/creatives">
                <img
                  key={i}
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