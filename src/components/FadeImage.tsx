"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type FadeImageProps = ImageProps & {
  duration?: number; // ms, default 400
};

export default function FadeImage({ duration = 400, className = "", style, ...props }: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      className={className}
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
        transition: `opacity ${duration}ms ease`,
      }}
      onLoad={() => setLoaded(true)}
    />
  );
}
