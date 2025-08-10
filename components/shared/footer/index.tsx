import { HeaderTop } from "components/shared/header/header-top";
import { FooterMain } from "./footer-main";

export function Footer() {
  return (
    <header className='w-full bg-white shadow-sm'>
      <HeaderTop />
      <FooterMain />
    </header>
  );
}
