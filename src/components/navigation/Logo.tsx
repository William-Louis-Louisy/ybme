import Link from "next/link";
import React from "react";
import LogoImg from "../../assets/ybme-logo.png";
import Image from "next/image";

function Logo() {
  return (
    <Link href={"/"}>
      <Image src={LogoImg} alt="logo" width={100} height={100} />
    </Link>
  );
}

export default Logo;
