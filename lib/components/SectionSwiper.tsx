import React, { FC, useContext, useEffect, useState } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Scrollbar, Pagination, Swiper as SwiperRef } from "swiper";
import { Button } from "./Button";
import 'swiper/css';
import "swiper/css/bundle";
import { SectionChats } from "./SectionChats";
import { SectionContacs } from "./SectionContacts";
import { SectionPortals } from "./SectionPortals";

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
}
export const SectionSwiper: FC<sectionSwiperProps> = () => {
  const { contentWidth, SectionChatShow, dispatch, chats, contacts, portals } = useContext(StateChatContext);
  const [page, setPage] = useState(0)
  const [chatId, setChatId] = useState(null)
  const [contactUid, setContactUid] = useState(null)

  ////para probar con contactos y portales
  useEffect(() => {
    console.log(446, contacts)
    if (contacts?.total !== 2) {
      dispatch({ set: typeSetChatContext.contacts, value: { ...contacts, total: 2 } })
      dispatch({ set: typeSetChatContext.portals, value: { ...portals, total: 2 } })

    }
  }, [contacts])

  const handleChatShow = () => {
    dispatch({ set: typeSetChatContext.SectionChatShow, value: true })
  }

  const classNameButton = `asd-flex asd-bg-primary asd-text-white asd-text-sm asd-transition asd-justify-center asd-items-center hover:asd-opacity-70 ${portals?.total > 0 ? "asd-w-1/3 " : "asd-w-1/2"}`

  const transitionLeftclose = {
    transition: `left 0.8s 0.1s`,
    left: `-100%`
  }
  const transitionLeftOpen = {
    transition: "left 0.2s",
    left: `0%`,
  }

  return (
    <>
      <div style={contentWidth < 769 ?
        SectionChatShow ? transitionLeftclose : transitionLeftOpen
        : {}} className={`asd-bg-blue-100 asd-relative asd-flex asd-flex-col sizeSections${contentWidth} @md:!asd-w-[280px]`}>
        {contacts?.total > 0 && <div className="asd-flex asd-h-[5%]">
          <Button className={`${classNameButton} ${page == 0 && "asd-opacity-80"}`} onClick={() => { setPage(0) }} title="Chats" />
          <Button className={`${classNameButton} ${page == 1 && "asd-opacity-80"}`} onClick={() => { setPage(1) }} title="Contactos" />
          {portals?.total > 0 && <Button className={`${classNameButton} ${page == 2 && "asd-opacity-80"}`} onClick={() => { setPage(2) }} title="Portales" />}
        </div>}
        <Swiper key={1} className="asd-bg-blue-900 asd-w-[100%] asd-h-[95%]"
          preloadImages={false}
          lazy={true}
          scrollbar={{
            hide: false, dragClass: 'swiper-scrollbar-drag-modified', horizontalClass: 'swiper-scrollbar-horizontal-modified'
          }}
          modules={[Pagination, Scrollbar]}
        >
          <SlideTo page={page} setPage={setPage} />
          <SwiperSlide className="asd-bg-green-100 asd-pb-3 asd-overscroll-contain" onScroll={() => { }}>
            <div>
              {contentWidth < 769 && <button onClick={handleChatShow}>ir a chat</button>}
              <SectionChats />
            </div>
          </SwiperSlide>
          {contacts?.total > 0 && <SwiperSlide className="asd-bg-green-300 asd-pb-3 asd-overscroll-contain">
            <div>
              <SectionContacs />
            </div>
          </SwiperSlide>}
          {portals?.total > 0 && <SwiperSlide className="asd-bg-green-600 asd-pb-3 asd-overscroll-contain">
            <div>
              <SectionPortals />
            </div>
          </SwiperSlide>}
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
        `}
      </style>
    </>
  );
};