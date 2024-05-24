'use client';

import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import NavItem from './NavItem';

export interface InavItem {
  url: string;
  name: string;
}

const navItemsList: InavItem[] = [
  {
    url: '/',
    name: 'Главная',
  },
  {
    url: '/articles',
    name: 'Статьи',
  },
];

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItemsList.map(({ url, name }) => {
          return <NavItem key={url} name={name} url={url} />;
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default Navigation;
