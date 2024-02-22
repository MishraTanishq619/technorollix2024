"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import LampContainer from "./ui/lamp";
import { Boxes } from "./ui/boxes";

export default function HeroParallaxDemo() {
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://lh3.googleusercontent.com/a/ACg8ocLr2gIRnN_luzrhBNC7_AmOVJYVpWb515iIiTPW9VrPXM0=s96-c",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://lh3.googleusercontent.com/a/ACg8ocLr2gIRnN_luzrhBNC7_AmOVJYVpWb515iIiTPW9VrPXM0=s96-c",
    },
    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/editorially.png",
      },
      {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/editrix.png",
      },
      {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
      },
     
      {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
      },
      {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
      },
      {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
      },
      {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
      },
      {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
      },
     
      {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
      },
      {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
      },
      {
        title: "Invoker Labs",
        link: "https://invoker.lol",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/invoker.png",
      },
      {
        title: "E Free Invoice",
        link: "https://efreeinvoice.com",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
      },
      
      {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
      },
      {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
      },
      {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
      },
     
      {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
      },
      {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
          "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
      },
  ];

  return <div><HeroParallax products={products} /></div>;
}
