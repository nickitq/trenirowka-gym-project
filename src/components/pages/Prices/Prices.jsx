import React from "react";
import "../../../App.css";
import "./Prices.css";
import "../../Button.css";
import { Link } from "react-router-dom";
import Footer from "../../Footer.jsx";

export const Prices = () => {
  return (
    <>
      <section class="pricing">
        <div class="container-sm">
          <h3 class="pricing-heading text-xl text-center">Prices</h3>
          <p class="pricing-subheading text-md text-center">
            Sign-up for one free training session
            <p>
              You can find our schedule {""}
              <a className="here--btn" href="/services">
                here
              </a>
              {/* <a href="/sign-up" class="here--btn">
                here
              </a> */}
            </p>
          </p>
          <div class="pricing-grid">
            {/* <!-- Pricing Card 1 --> */}
            <div class="card bg-light">
              <div class="pricing-card-header">
                <h4 class="pricing-heading text-xl">Simple</h4>
                <p class="pricing-card-subheading">
                  TRENIROWKA <i class="fa-solid fa-dumbbell"></i>
                </p>
                <p class="pricing-card-price">
                  <span class="text-xl">$19.99</span>/month
                </p>
              </div>
              <div class="pricing-card-body">
                <ul>
                  <li>
                    <i class="fas fa-check"></i> Use of cardio equipment
                    (treadmills, ellipticals, stationary bikes).
                  </li>
                  <li>
                    <i class="fas fa-check"></i> Use of strength training
                    equipment (free weights, resistance machines).
                  </li>
                  <li>
                    <i class="fas fa-check"></i> Access to locker rooms and
                    showers.
                  </li>
                  <li>
                    <i class="fas fa-check"></i> Invitations to member-exclusive
                    events and challenges.
                  </li>
                </ul>
                <a href="/sign-up" class="btn btn--white btn--large btn-block">
                  Get started
                </a>
              </div>
            </div>

            {/* <!-- Pricing Card 2 --> */}
            <div class="card bg-black">
              <div class="pricing-card-header">
                <h4 class="pricing-heading text-xl">Premium</h4>
                <p class="pricing-card-subheading">
                  TRENIROWKA <i class="fa-solid fa-dumbbell"></i>
                </p>
                <p class="pricing-card-price">
                  <span class="text-xl">$39.99</span>/month
                </p>
              </div>
              <div class="pricing-card-body">
                <p>Everything from the free plan plus:</p>
                <ul>
                  <li>
                    <i class="fas fa-check"></i> Complimentary introductory
                    personal training session.
                  </li>
                  <li>
                    <i class="fas fa-check"></i> Personalized workout plans and
                    nutritional advice.
                  </li>
                  <li>
                    <i class="fas fa-check"></i> Access to fitness tracking and
                    progress monitoring apps.
                  </li>
                  <li>
                    <i class="fas fa-check"></i> Access to specialty areas such
                    as a sauna, steam room, swimming pool, or hot tub.
                  </li>
                </ul>
                <a
                  href="/sign-up"
                  class="btn btn--outline btn--large btn-block"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
          <p class="pricing-footer text-center">
            All prices are in USD and charged per month with applicable taxes
            added at checkout
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};
