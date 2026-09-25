import NavItem from "../NavItem";
import Hamburger from "../Hamburger";
import LanguageSwitcher from "../LanguageSwitcher";

type Props = {
  items: {
    href: string;
    text: string;
  }[];
};

const Navbar = ({ items }: Props) => {
  const navItems = items.map((item, index) => (
    <NavItem key={`navbar-${index}`} item={item} />
  ));

  return (
    <nav
      aria-label="Navegação principal"
      className="flex flex-row-reverse min-[1050px]:flex-row items-center justify-start"
    >
      {/* Desktop navigation */}
      <ul className="hidden min-[1050px]:flex flex-row items-center list-none">
        {navItems}
      </ul>

      {/* Mobile hamburger navigation */}
      <Hamburger navItems={navItems} />

      {/* Language Switcher */}
      <div className="mr-14 min-[1050px]:mr-0 min-[1050px]:ml-14">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
