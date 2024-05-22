import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../public/redbull-logo-svgrepo-com.svg';
import defaultUserImage from '../../public/user.svg';
// TODO

const Header = () => {
  return (
    <header className="flex justify-between text-center">
      <Link href={'/'}>
        <Image src={logoImage} width={150} height={150} alt="Логотип" />
      </Link>
      <Avatar>
        <AvatarImage
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+"
          alt="Аватар пользователя"
          width={50}
          height={50}
          className="fill-white"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};
export default Header;
