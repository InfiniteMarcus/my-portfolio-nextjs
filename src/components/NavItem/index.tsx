import style from "./styles.module.css";

type Props = {
  item: {
    href: string;
    text: string;
  };
};

const NavItem = ({ item }: Props) => {
  return (
    <li className={style.navItem}>
      <a className={style.navItemAnchor} href={`${item.href}`}>
        {item.text}
      </a>
    </li>
  );
};

export default NavItem;
