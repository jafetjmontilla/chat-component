import React, { FC, useContext, useEffect, useState } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Scrollbar, Pagination, Swiper as SwiperRef } from "swiper";
import { Button } from "./Button";
import 'swiper/css';
import "swiper/css/bundle";
import { SectionChats } from "./SectionChats";
import { SectionContacs } from "./SectionContacts";
import { SectionEvents } from "./SectionEvents";
import { SearchChat } from "./SearchChat";
import { SectionResultSearch } from "./SectionResultSearch";

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
    if (swiper) {
      swiper.slideTo(page)
    }
  }, [page, swiper])
  return <></>
}

//-------------------------------------------------------------------------------------------------------
interface sectionSwiperProps {
}
export const SectionSwiper: FC<sectionSwiperProps> = () => {
  const { contentWidth, SectionChatShow, dispatch, chats, contacts, events, activeSearch, theme } = useContext(StateChatContext);
  const [page, setPage] = useState(0)
  const [title, setTitle] = useState<string>("Chats")
  const [chatId, setChatId] = useState(null)
  const [contactUid, setContactUid] = useState(null)
  const handleChatShow = () => {
    dispatch({ set: typeSetChatContext.SectionChatShow, value: true })
  }
  const classNameButton = `asd-flex asd-bg-primary asd-text-white asd-text-sm asd-transition asd-justify-center asd-items-center hover:asd-opacity-70 ${events?.total && events?.total > 0 ? "asd-w-1/3 " : "asd-w-1/2"}`

  const transitionLeftclose = {
    transition: `width 0.8s 0.1s`,
    width: `30%`
  }
  const transitionLeftOpen = {
    transition: "width 0.2s",
    width: `100%`,
  }

  return (
    <>
      <div style={contentWidth < 769 ? SectionChatShow ? transitionLeftclose : transitionLeftOpen : {}}

        className={`asd-bg-gray-200 asd-relative asd-flex asd-flex-col sizeSections${contentWidth} asd-h-full @md:!asd-w-[340px] asd-border-r-4 asd-border-gray-100 TextSizeAdjustNone`}>
        <SearchChat title={title} />
        <div className="asd-w-full asd-h-full asd-flex asd-flex-col asd-relative">
          {activeSearch && <SectionResultSearch />}
          {contacts?.total && contacts?.total > 0 ? <div className="asd-flex asd-h-9 @md:asd-h-6">
            <Button className={`${classNameButton} ${page == 0 && "asd-opacity-80"}`} onClick={() => {
              setPage(0)
              setTitle("Chats")
            }} title="Chats" />
            <Button className={`${classNameButton} ${page == 1 && "asd-opacity-80"}`} onClick={() => {
              setPage(1)
              setTitle("Contactos")
            }} title="Contactos" />
            {events?.total && events?.total > 0 && <Button className={`${classNameButton} ${page == 2 && "asd-opacity-80"}`} onClick={() => {
              setPage(2)
              setTitle("Eventos")
            }} title="Eventos" />}
          </div> : <></>}
          <div className="asd-h-[100%]">
            <Swiper key={1} className={``}
              preloadImages={false}
              lazy={true}
              scrollbar={{
                hide: false, dragClass: 'swiper-scrollbar-drag-modified', horizontalClass: 'swiper-scrollbar-horizontal-modified'
              }}
              modules={[Pagination, Scrollbar]}
              style={{ width: "100%", height: "100%" }}
            >
              <SlideTo page={page} setPage={setPage} />
              <SwiperSlide className="asd-pb-3 asd-h-full" onScroll={() => { }}>
                <SectionChats />
              </SwiperSlide>
              {contacts?.total && contacts?.total > 0 && <SwiperSlide className="asd-pb-3 asd-h-full">
                <SectionContacs setPage={setPage} />
              </SwiperSlide>}
              {events?.total && events?.total > 0 && <SwiperSlide className="asd-pb-3 asd-h-full">
                <SectionEvents />
              </SwiperSlide>}
            </Swiper>
          </div>
        </div>
      </div>
      <style >
        {`
        .TextSizeAdjustNone {
          text-size-adjust: none;
        }
          .swiper-scrollbar-horizontal-modified {
            left: 0% !important;
            height: 5px !important;
            width: 100% !important;
            top: 0;
            background: ${theme.primaryColor};
            border-radius: 0px !important;
          }
          .swiper-scrollbar-drag-modified {
            height: 100%;
            width: 50%;
            position: relative;
            background: #f7628c;
            border-radius: 5px;
            left: 0;
            top: 0;
          }
        `}
      </style>
    </>
  );
};