import React from "react";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import Carousel from "react-simply-carousel";

const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

function Dogs() {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div>
      <Carousel
        autoplay={true}
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-around",
            userSelect: "none",
          },
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "none",
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          style: {
            width: 0,
            height: 0,
            minWidth: 0,
            display: "none",
            alignSelf: "center",
          },
          //   children: ">",
          //   style: {
          //     width: 60,
          //     height: 60,
          //     minWidth: 60,
          //     alignSelf: "center",
          //   },
        }}
        backwardBtnProps={{
          style: {
            width: 0,
            height: 0,
            minWidth: 0,
            display: "none",
            alignSelf: "center",
          },
        }}
        dotsNav={{
          show: false,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
            },
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black",
            },
          },
        }}
        itemsToShow={2}
        speed={7800}
        centerMode
      >
        {images.map((item, index) => (
          <div
            style={{
              background: "none",
              width: 400,
              height: 400,
              //   border: "30px solid white",
              textAlign: "center",
              lineHeight: "240px",
              maxWidth: "1000px",
              boxSizing: "border-box",
            }}
            key={index}
          >
            <img src={item}></img>
            {index}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Dogs;
