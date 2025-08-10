import { HeaderTop } from "./header-top";
import { HeaderMain } from "./header-main";

export function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <HeaderTop />
      <HeaderMain />
    </header>
  );
}
