import Icon from "../Icon/Icon";

export default function Navbar() {
  return (
    <div className="flex flex-col w-full bg-[#111114] px-4 top-0 z-50">
      <a
        href="#home"
        className="flex flex-row py-2 items-center gap-3 px-3 border-b-[1px] mt-8"
      >
        <Icon iconName="home" className="size-4" />
        <span className="text-sm">Home</span>
      </a>
      <a
        href="#about"
        className="flex flex-row py-2 items-center gap-3 px-3 border-b-[1px]"
      >
        <Icon iconName="profile" className="size-4" />
        <span className="text-sm">Sobre mim</span>
      </a>
      <a
        href="#experience"
        className="flex flex-row py-2 items-center gap-3 px-3 border-b-[1px]"
      >
        <Icon iconName="file" className="size-4" />
        <span className="text-sm">Experiência</span>
      </a>
      <a
        href="#projects"
        className="flex flex-row py-2 items-center gap-3 px-3"
      >
        <Icon iconName="briefcase" className="size-4" />
        <span className="text-sm">Projetos</span>
      </a>
    </div>
  );
}
