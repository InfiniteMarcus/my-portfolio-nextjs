type Props = {
  item: {
    href: string;
    text: string;
  };
};

const NavItem = ({ item }: Props) => {
  return (
    <li className="my-2.5 mx-2 inline-block px-2.5 text-lg sm:text-[22px] border-l-2 border-brand-primary">
      <a
        className="block w-full h-full text-white no-underline hover:underline hover:decoration-brand-primary transition-colors duration-200"
        href={item.href}
      >
        {item.text}
      </a>
    </li>
  );
};

export default NavItem;
