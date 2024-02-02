import NavButton from "./NavButton";

export default function Header() {
  return (
    <>
      <header className="flex h-[100px] items-center w-full justify-between">
        <div className="flex gap-10">
          <img
            className="object-contain"
            src="./images/logo.svg"
            alt=""
            height={10}
            width={120}
          />

          <nav className="flex">
            <NavButton text={"Collections"} />
            <NavButton text={"Men"} />
            <NavButton text={"Women"} />
            <NavButton text={"About"} />
            <NavButton text={"Contact"} />
          </nav>
        </div>
        <div className="flex items-center gap-10">
          <img className="h-6 w-6" src="./images/icon-cart.svg" alt="" />
          <img src="./images/image-avatar.png" alt="" height={60} width={60} />
        </div>
      </header>
      <hr className="shadow" />
    </>
  );
}
