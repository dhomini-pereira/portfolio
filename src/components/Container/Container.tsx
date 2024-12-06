type Props = {
  section: string;
  children: React.ReactNode;
  className?: string;
};

export default function Container({ section, children, className }: Props) {
  return (
    <section
      id={section}
      className={`z-20 min-h-screen w-full mt-3 mr-3 flex flex-col justify-center ${className}`}
    >
      {children}
    </section>
  );
}
