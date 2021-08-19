import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: " Our mission goes beyond home furnishing. We want to create a better everyday for all people impacted by our business.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "To create a better everyday life for the many people.Our business idea is 'to offer a wide range of well-designed, functional home furnishing products at prices so low that as many people as possible will be able to afford them'.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Comfy-Sloth was founded in Germany in 1943 by 30-year-old Disha Mueller, whose fortune is estimated at $3.3 billion. Disha’s fortune peaked at $33 billion, but she has transferred the vast majority of her economic stake in the retailer to his philanthropic foundations. Comfy-Sloth operates in 26 countries, but has 227 of its 298 existing stores in Europe and Asia.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
