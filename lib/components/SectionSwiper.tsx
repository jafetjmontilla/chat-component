import React, { FC, useContext, useEffect, useState } from "react";
import { StateChatContext } from "../context/ChatContext";
import { SectionChats } from "./SectionChats";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Scrollbar, Navigation, Pagination, Swiper as SwiperRef } from "swiper";
import { Button } from "./Button";
import 'swiper/css';
import "swiper/css/bundle";


interface slidetoProps {
  page: number
  setPage: any
}
interface swiperProps extends SwiperRef {
  enabled?: boolean
}
const SlideTo: FC<slidetoProps> = ({ page, setPage }) => {
  const swiper: swiperProps = useSwiper();
  swiper.on('slideChange', function (idx: any) {
    setPage(idx.activeIndex)
    // setResultsContact(contacts?.results)
  });
  useEffect(() => {
    if (swiper.enabled) {
      swiper.slideTo(page)
    }
  }, [page, swiper])
  return <></>
}

//-------------------------------------------------------------------------------------------------------
interface sectionSwiperProps {
  // active: boolean
  // setActive: any
  // setChat: any
  sectionChatShow: boolean
  setSectionChatShow: any
}
export const SectionSwiper: FC<sectionSwiperProps> = ({ sectionChatShow, setSectionChatShow }) => {
  const { contentWidth, contentHeight, topBarSizeY } = useContext(StateChatContext);
  const [page, setPage] = useState(0)
  const [chatId, setChatId] = useState(null)
  const [contactUid, setContactUid] = useState(null)


  const className = "block bg-primary text-white w-1/3 text-sm transition hover:opacity-90"

  return (
    <>
      <div className={`bg-blue-100 flex flex-col sizeSections${contentWidth} @md:!w-[280px]`}>
        <div className="flex h-[5%]">
          <Button className={className} onClick={() => { setPage(0) }} title="Chats" />
          <Button className={className} onClick={() => { setPage(1) }} title="Contactos" />
          <Button className={className} onClick={() => { setPage(2) }} title="Eventos" />
        </div>
        <Swiper key={1} className="bg-blue-900 w-[100%] h-[95%]"
          // pagination={{ dynamicBullets: true, type: 'bullets', clickable: true }}
          preloadImages={false}
          lazy={true}
          scrollbar={{
            hide: false, dragClass: 'swiper-scrollbar-drag-modified', horizontalClass: 'swiper-scrollbar-horizontal-modified'
          }}
          modules={[Pagination, Scrollbar]}
        >
          <SlideTo page={page} setPage={setPage} />
          <SwiperSlide className="bg-green-100 pb-3 overscroll-contain" onScroll={() => { }}>
            <div>
              <button onClick={() => { setSectionChatShow(true) }}>ir a chat</button>
              0
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-green-300 pb-3 overscroll-contain">
            <div>
              1
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-green-600 pb-3 overscroll-contain">
            <div>
              2
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <style >
        {`
          .swiper-scrollbar-horizontal-modified {
            left: 0% !important;
            height: 5px !important;
            width: 100% !important;
            top: 0;
            background: #f7628c;
            border-radius: 0px !important;
          }
          .swiper-scrollbar-drag-modified {
            height: 100%;
            width: 50%;
            position: relative;
            background: hwb(343deg 64% 2%);
            border-radius: 5px;
            left: 0;
            top: 0;
          }
          ::-webkit-scrollbar {
            display: none;
          }

        `}
      </style>
    </>
  );
};