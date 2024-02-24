"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import LampContainer from "./ui/lamp";
import { Boxes } from "./ui/boxes";

export default function HeroParallaxDemo() {
  const products = [
    {
      title: "Moonbeam",
      link: "/events",
      thumbnail:
        "https://lh3.googleusercontent.com/a/ACg8ocLr2gIRnN_luzrhBNC7_AmOVJYVpWb515iIiTPW9VrPXM0=s96-c",
    },
    {
      title: "Cursor",
      link: "/events",
      thumbnail:
        "https://lh3.googleusercontent.com/a/ACg8ocLr2gIRnN_luzrhBNC7_AmOVJYVpWb515iIiTPW9VrPXM0=s96-c",
    },
    {
        title: "Editorially",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/editorially.png",
      },
      {
        title: "Editrix AI",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/editrix.png",
      },
      {
        title: "Pixel Perfect",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
      },
     
      {
        title: "Algochurn",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
      },
      {
        title: "Aceternity UI",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
      },
      {
        title: "Tailwind Master Kit",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
      },
      {
        title: "SmartBridge",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
      },
      {
        title: "Renderwork Studio",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
      },
     
      {
        title: "Creme Digital",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
      },
      {
        title: "Golden Bells Academy",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
      },
      {
        title: "Invoker Labs",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/invoker.png",
      },
      {
        title: "E Free Invoice",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
      },
      
      {
        title: "Tailwind Master Kit",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
      },
      {
        title: "SmartBridge",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
      },
      {
        title: "Renderwork Studio",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
      },
     
      {
        title: "Creme Digital",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
      },
      {
        title: "Golden Bells Academy",
        link: "/events",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
      },
  ];

  return <div><HeroParallax products={products} /></div>;
}
