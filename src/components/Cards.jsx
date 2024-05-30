import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>OUR PRODUCTS</h1>
      <h3 className="cards__h3">
        All of those products you can find and buy in our gym
      </h3>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="./products/product-img-1.jpg"
              text="
              Adjustable hand flexor, Gym training, Yoga, Pilates, for forearm training, hand recovery exercises, Physical Therapy"
              label="Sport"
              path="/products"
            />

            <CardItem
              src="./products/product-img-2.jpg"
              text="Resistance band for fitness, elastic band, training in the gym, recovery gymnastics"
              label="Sport"
              path="/products"
            />

            <CardItem
              src="./products/product-img-3.jpg"
              text="
              Set of 2 fitness straps, JeiibrZui, Polyester/Cotton,Black
              "
              label="Sport"
              path="/products"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="./products/product-img-4.jpg"
              text="Leather belt for gym lifts, Power System Basic,Black, Size M
              "
              label="Sport"
              path="/products"
            />

            <CardItem
              src="./products/product-img-5.jpg"
              text="Whey proteins, Optimum Nutrition protein powder, ON 100% Whey Gold Standard,chocolate, 908g"
              label="Sport"
              path="/products"
            />

            <CardItem
              src="./products/product-img-6.jpg"
              text="Micronized creatine monohydrate Optimum Nutrition, ON Creatine Powder, 317g"
              label="Sport"
              path="/products"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="./products/product-img-7.jpg"
              text="Crossfit Gym Armageddon Sports Training Rope, Battle Rope, 3.8 cm 9 m"
              label="Sport"
              path="/products"
            />

            <CardItem
              src="./products/product-img-8.jpg"
              text="Fitness wheel for abdominals, LiveUp, orange"
              label="Sport"
              path="/products"
            />

            <CardItem
              src="./products/product-img-9.jpg"
              text="Mat For Yoga, Fitness, Pilates, Gymnastics and Aerobics, Non-slip,Green, Dimensions 1800 x 600 mm"
              label="Sport"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
