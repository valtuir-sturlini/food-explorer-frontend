import { Container, Content, Slogan } from "./styles";
import { useState, useEffect, useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useLocation } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Dish } from "../../components/Dish";

import foodImage from "../../assets/pngegg.png";

export function Home() {
  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);
  const frameWrapperRefs = [useRef(null), useRef(null), useRef(null)];
  const frameContainerRefs = [useRef(null), useRef(null), useRef(null)];

  const location = useLocation();
  const searchTermFromLocation = location.state?.search;

  useEffect(() => {
    async function fetchDishes() {
      let response;

      if (search.trim() !== "") {
        response = await api.get(`/dishes?search=${search}`);
      } else if (searchTermFromLocation) {
        response = await api.get(`/dishes?search=${searchTermFromLocation}`);
      } else {
        response = await api.get("/dishes");
      }

      setDishes(response.data);
    }

    fetchDishes();
  }, [search, searchTermFromLocation]);

  function scrollToLeft(sectionNumber) {
    const frameWrapper = frameWrapperRefs[sectionNumber]?.current;
    if (frameWrapper) {
      frameWrapper.scrollBy({ left: -300, behavior: "smooth" });
    }
    updateScrollButtonsVisibility(sectionNumber);
  }

  function scrollToRight(sectionNumber) {
    const frameWrapper = frameWrapperRefs[sectionNumber]?.current;
    if (frameWrapper) {
      frameWrapper.scrollBy({ left: 300, behavior: "smooth" });
    }
    updateScrollButtonsVisibility(sectionNumber);
  }

  function updateScrollButtonsVisibility(sectionNumber) {
    const frameWrapper = frameWrapperRefs[sectionNumber]?.current;
    const scrollButtonLeft = document.querySelector(
      `.frame-wrapper-${sectionNumber} .scroll-button-left`
    );
    const scrollButtonRight = document.querySelector(
      `.frame-wrapper-${sectionNumber} .scroll-button-right`
    );

    if (frameWrapper && scrollButtonLeft && scrollButtonRight) {
      if (frameWrapper.scrollLeft > 0) {
        scrollButtonLeft.style.visibility = "visible";
        scrollButtonLeft.style.display = "inline-block";
      } else {
        scrollButtonLeft.style.visibility = "hidden";
        scrollButtonLeft.style.display = "none";
      }

      if (
        frameWrapper.scrollLeft + frameWrapper.clientWidth <
        frameWrapper.scrollWidth
      ) {
        scrollButtonRight.style.visibility = "visible";
        scrollButtonRight.style.display = "inline-block";
      } else {
        scrollButtonRight.style.visibility = "hidden";
        scrollButtonRight.style.display = "none";
      }
    }
  }

  useEffect(() => {
    updateScrollButtonsVisibility(0);
    updateScrollButtonsVisibility(1);
    updateScrollButtonsVisibility(2);
  }, [dishes]);

  return (
    <Container>
      <Header setSearchTerm={setSearch} setDishes={setDishes} />
      <main>
        <Content>
          <Slogan>
            <div className="sloganImg">
              <img src={foodImage} alt="" />
            </div>
            <div className="sloganText">
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </Slogan>

          <Section title="Refeições" />
          <div className="frame-container" ref={frameContainerRefs[0]}>
            <div
              className="frame-wrapper frame-wrapper-0"
              ref={frameWrapperRefs[0]}
            >
              <div
                className="scroll-button scroll-button-left"
                onClick={() => scrollToLeft(0)}
              >
                <MdArrowBackIos id="arrowBack" />
              </div>
              {dishes
                .filter((dish) => dish.category === "meals")
                .map((dish) => (
                  <Dish key={String(dish.id)} data={dish} />
                ))}
              <div
                className="scroll-button scroll-button-right"
                onClick={() => scrollToRight(0)}
              >
                <MdArrowForwardIos id="arrowForward" />
              </div>
            </div>
          </div>

          <Section title="Sobremesas" />
          <div className="frame-container" ref={frameContainerRefs[1]}>
            <div
              className="frame-wrapper frame-wrapper-1"
              ref={frameWrapperRefs[1]}
            >
              <div
                className="scroll-button scroll-button-left"
                onClick={() => scrollToLeft(1)}
              >
                <MdArrowBackIos id="arrowBack" />
              </div>
              {dishes
                .filter((dish) => dish.category === "desserts")
                .map((dish) => (
                  <Dish key={String(dish.id)} data={dish} />
                ))}
              <div
                className="scroll-button scroll-button-right"
                onClick={() => scrollToRight(1)}
              >
                <MdArrowForwardIos id="arrowForward" />
              </div>
            </div>
          </div>

          <Section title="Bebidas" />
          <div className="frame-container" ref={frameContainerRefs[2]}>
            <div
              className="frame-wrapper frame-wrapper-2"
              ref={frameWrapperRefs[2]}
            >
              <div
                className="scroll-button scroll-button-left"
                onClick={() => scrollToLeft(2)}
              >
                <MdArrowBackIos id="arrowBack" />
              </div>
              {dishes
                .filter((dish) => dish.category === "drinks")
                .map((dish) => (
                  <Dish key={String(dish.id)} data={dish} />
                ))}
              <div
                className="scroll-button scroll-button-right"
                onClick={() => scrollToRight(2)}
              >
                <MdArrowForwardIos id="arrowForward" />
              </div>
            </div>
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
