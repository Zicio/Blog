import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../public/redbull-logo-svgrepo-com.svg';
import { Button } from '@/components/ui/button';
import Navigation from './Navigation';

const Header = () => {
  const isAuth = false;
  return (
    <header className="flex items-center justify-between border-b-2 border-border px-4 py-1">
      <Link href={'/'}>
        <Image src={logoImage} width={100} height={100} alt="Логотип" />
      </Link>
      <Navigation />
      {isAuth ? (
        <Avatar className="cursor-pointer">
          <AvatarImage src=",,," alt="@shadcn" width={30} height={30} />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
      ) : (
        <Button asChild>
          <Link href="/login" className="text-base font-bold">
            Login
          </Link>
        </Button>
      )}
    </header>
  );
};
export default Header;
