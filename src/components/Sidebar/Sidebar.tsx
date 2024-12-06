import Icon from "../Icon/Icon";

export default function Sidebar() {
  return (
    <section className="w-80 bg-[#18181B] m-2 my-3 rounded-l-lg rounded-r-2xl block max-md:hidden z-20">
      <div className="py-4 px-3">
        <div className="flex gap-6 items-center">
          <img
            className="rounded-full size-10"
            src={"foto-port.jpg"}
            alt="profile picture"
          />
          <span>Dhomini Pereira</span>
        </div>
        <div className="flex flex-col gap-1 mt-6">
          <a
            href="#home"
            className="box-border flex flex-row hover:bg-[#252528] hover:border-[#3E3E41] border-[1px] border-transparent cursor-pointer py-3 rounded-lg items-center gap-3 px-3 h-11 transition-all duration-200"
          >
            <Icon iconName="home" className="size-4" />
            <span className="text-sm">Home</span>
          </a>
          <a
            href="#about"
            className="box-border flex flex-row hover:bg-[#252528] hover:border-[#3E3E41] border-[1px] border-transparent cursor-pointer py-3 rounded-lg items-center gap-3 px-3 h-11 transition-all duration-200"
          >
            <Icon iconName="profile" className="size-4" />
            <span className="text-sm">Sobre mim</span>
          </a>
          <a
            href="#experience"
            className="box-border flex flex-row hover:bg-[#252528] hover:border-[#3E3E41] border-[1px] border-transparent cursor-pointer py-3 rounded-lg items-center gap-3 px-3 h-11 transition-all duration-200"
          >
            <Icon iconName="file" className="size-4" />
            <span className="text-sm">Experiência</span>
          </a>
          <a
            href="#projects"
            className="box-border flex flex-row hover:bg-[#252528] hover:border-[#3E3E41] border-[1px] border-transparent cursor-pointer py-3 rounded-lg items-center gap-3 px-3 h-11 transition-all duration-200"
          >
            <Icon iconName="briefcase" className="size-4" />
            <span className="text-sm">Projetos</span>
          </a>
          <div className="flex flex-col gap-1 mt-4">
            <span className="ml-3 text-sm">Contatos</span>
            <a
              href="https://github.com/dhomini-pereira"
              target="_blank"
              className="flex flex-row bg-[#252528] border-[#3E3E41] border-[1px] cursor-pointer py-3 rounded-lg items-center gap-3 px-3 h-9 hover:opacity-70 transition-all duration-300"
            >
              <Icon iconName="github" className="size-4" />
              <div className="flex flex-row items-center justify-between w-full">
                <span className="text-sm">GitHub</span>
                <Icon iconName="link" className="size-3 align-top" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/dh-pereira"
              target="_blank"
              className="flex flex-row bg-[#252528] border-[#3E3E41] border-[1px] cursor-pointer py-3 rounded-lg items-center gap-3 px-3 h-9 hover:opacity-70 transition-all duration-300"
            >
              <Icon iconName="linkedin" className="size-4" />
              <div className="flex flex-row items-center justify-between w-full">
                <span className="text-sm">LinkedIn</span>
                <Icon iconName="link" className="size-3 align-top" />
              </div>
            </a>
            <a
              href="mailto:dhomini-pereira@outlook.com"
              target="_blank"
              className="flex flex-row bg-[#252528] border-[#3E3E41] border-[1px] cursor-pointer py-3 rounded-lg items-center gap-3 px-3 h-9 hover:opacity-70 transition-all duration-300"
            >
              <Icon iconName="email" className="size-4" />
              <div className="flex flex-row items-center justify-between w-full">
                <span className="text-sm">E-Mail</span>
                <Icon iconName="link" className="size-3 align-top" />
              </div>
            </a>
            <a
              href="https://wa.me/21977404039"
              target="_blank"
              className="flex flex-row bg-[#252528] border-[#3E3E41] border-[1px] cursor-pointer py-3 rounded-lg items-center gap-3 px-3 h-9 hover:opacity-70 transition-all duration-300"
            >
              <Icon iconName="whatsapp" className="size-4" />
              <div className="flex flex-row items-center justify-between w-full">
                <span className="text-sm">WhatsApp</span>
                <Icon iconName="link" className="size-3 align-top" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
