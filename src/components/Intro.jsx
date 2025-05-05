import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

import { useRouter } from "next/navigation";

const Intro = () => {
  const router = useRouter();
  return (
    <div className="relative min-h-dvh overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          fill
          src={"/bg.png"}
          alt="قهوه اسپرسو"
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Button */}
      <div className="absolute bottom-5 left-0 right-0 px-5">
        <div className="container mx-auto">
          <div className="w-full max-w-md mx-auto">
            <Image
              priority
              src={"/logo-h-(cream).svg"}
              alt="لوگو کافه کاپ چی"
              width={240}
              height={240}
              className="mb-5 mx-auto object-contain w-full h-auto"
            />
          </div>
          <Link href={"/products"}>
            <Button
              variant={"secondaryy"}
              onClick={() => router.push("/products")}
              className="font-medium text-xl w-full py-7"
            >
              مشاهده منو
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
