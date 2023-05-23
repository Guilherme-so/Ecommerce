import React, { useEffect, useRef } from "react";
import Center from "../center";
import { Container } from "./styled";
import Cardbox from "../newestCard";
import { useRouter } from "next/router";

export default function NewestProducts({ newest }) {
  const myRef = useRef(null);
  const router = useRouter();
  const { asPath } = router;

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  useEffect(() => {
    if (asPath === "/#products") {
      executeScroll();
    }
  }, [asPath]);

  return (
    <Center>
      <Container ref={myRef}>
        {newest?.map((product) => (
          <Cardbox key={product._id} product={product} />
        ))}
      </Container>
    </Center>
  );
}
