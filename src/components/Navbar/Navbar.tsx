import Icon from "../Icon/Icon";

export default function Navbar() {
  return (
    <div className="flex flex-col w-full bg-[#111114] px-4">
      <a href="#home" className="flex flex-row py-2 items-center gap-3 px-3 border-b-[1px]">
        <Icon iconName="home" className="size-4" />
        <span className="text-sm">Home</span>
      </a>
      <a href="#sobre" className="flex flex-row py-2 items-center gap-3 px-3 border-b-[1px]">
        <Icon iconName="profile" className="size-4" />
        <span className="text-sm">Sobre mim</span>
      </a>
      <a href="#projetos" className="flex flex-row py-2 items-center gap-3 px-3 border-b-[1px]">
        <Icon iconName="briefcase" className="size-4" />
        <span className="text-sm">Projetos</span>
      </a>
      <a href="#curriculo" className="flex flex-row py-2 items-center gap-3 px-3">
        <Icon iconName="file" className="size-4" />
        <span className="text-sm">Currículo</span>
      </a>
    </div>
  );
}
