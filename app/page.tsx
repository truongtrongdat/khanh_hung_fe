import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khánh Hùng',
  description: 'Khánh Hùng',
}
import Image from 'next/image';
import './styles/home.css'
import Header from './components/Headers/Customer';
import BannerReceive from './components/HomPage/BannerReceive';
import Faqs from './components/HomPage/faqs'
import HallOfFrame from './components/HomPage/hall_of_frame';
import ComingSoon from './components/HomPage/ComingSoon';
import CourseList from './components/HomPage/CourseList';
import ScrollComponent from './components/Scroll/ScrollComponent'


export default async function Home() {

  return (
    <>
      <Header />
      <main className="min-h-screen">
        
        <BannerReceive/>
        <HallOfFrame/>
        <ComingSoon/>
        <iframe src='/back_up_home_page' className='w-full h-[1200px] overflow-hidden'/>
        <section id='chuong-trinh-hoc' className="bg-[#440873] py-30 hidden lg:block">
          <div className='w-full max-w-[1920px] m-auto px-4 flex flex-col items-center justify-center gap-20'>
            <div className='w-full text-center'>
              <h2 className='text-4xl md:text-5xl font-bold text-white inline-flex justify-center items-center gap-4 flex-wrap'>
                KHÓA HỌC NÀY
                <div className='flex gap-2 items-end'>
                  <span className='text-pink-500'>đã bao gồm</span>
                  <span className='text-pink-500 text-6xl md:text-7xl font-bold'>213</span>
                  <span className='text-pink-500'>bài học</span>
                  <span className='inline-block ml-2'>
                    <Image
                      src="/assets/images/ic-gal-vid.png"
                      width={40}
                      height={40}
                      alt="play icon"
                    />
                  </span>
                </div>
              </h2>
            </div>

            <div className='w-full lg:w-11/12 m-auto'>
              <ScrollComponent direction='horizontal' className='flex'>
                {Array.from({ length: 6 }, (_, index) => (
                  <CourseList key={index} />
                ))}
              </ScrollComponent>

            </div>
          </div>
        </section>
          <Faqs />
      </main>
      
    </>
  );
}
