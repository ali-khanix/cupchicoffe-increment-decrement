import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        alt="لوگو کافه کاپ چی"
        width={180}
        height={180}
        src={"/logo-h-(green).svg"}
        className="mx-auto py-4"
      />
    </Link>
  );
};

export default Logo;
