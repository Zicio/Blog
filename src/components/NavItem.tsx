'use client';

import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@radix-ui/react-navigation-menu';
import { navigationMenuTriggerStyle } from './ui/navigation-menu';
import Link from 'next/link';
import { InavItem } from './Navigation';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NavItem = ({ name, url }: InavItem) => {
  const pathname = usePathname();
  return (
    <NavigationMenuItem>
      <Link href={url} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            pathname === url
              ? 'cursor-default opacity-50'
              : navigationMenuTriggerStyle(),
            'text-base',
          )}
        >
          {name}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
export default NavItem;
