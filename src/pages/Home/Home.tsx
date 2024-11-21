import Icon from "../../components/Icon/Icon";
import Layout from "../../Layout";

export default function Home() {
  return (
    <Layout>
      <section className="overflow-y-auto z-20 h-screen max-md:w-full mt-3 mr-3 flex flex-col justify-center items-center">
        <p className="w-3/5 max-md:w-full text-4xl font-bold max-md:hidden">
          Olá, me chamo Dhomini Pereira. Sou um desenvolvedor Fullstack
        </p>
        <div className="w-3/5 max-md:w-full hidden max-md:flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center">Dhomini Pereira</h1>
          <p className="text-xl">Desenvolvedor Fullstack</p>
        </div>
        <div className="hidden max-md:flex w-full max-md:w-[250px] mt-3 flex-col gap-3">
          <a
            href="https://github.com/dhomini-pereira"
            target="_blank"
            className="flex flex-row bg-[#252528] border-[#3E3E41] border-[1px] cursor-pointer py-3 rounded-lg items-center gap-3 px-3 h-9"
          >
            <Icon iconName="github" className="size-4" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/dh-pereira"
            target="_blank"
            className="flex flex-row bg-[#252528] border-[#3E3E41] border-[1px] cursor-pointer py-3 rounded-lg items-center gap-3 px-3 h-9"
          >
            <Icon iconName="linkedin" className="size-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="mailto:dhomini-pereira@outlook.com"
            target="_blank"
            className="flex flex-row bg-[#252528] border-[#3E3E41] border-[1px] cursor-pointer py-3 rounded-lg items-center gap-3 px-3 h-9"
          >
            <Icon iconName="email" className="size-4" />
            <span className="text-sm">E-Mail</span>
          </a>
          <a
            href="https://wa.me/21977404039"
            target="_blank"
            className="flex flex-row bg-[#252528] border-[#3E3E41] border-[1px] cursor-pointer py-3 rounded-lg items-center gap-3 px-3 h-9"
          >
            <Icon iconName="whatsapp" className="size-4" />
            <span className="text-sm">WhatsApp</span>
          </a>
        </div>
      </section>
    </Layout>
  );
}
