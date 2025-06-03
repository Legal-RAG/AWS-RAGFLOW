import { useTranslation } from 'react-i18next';

export function Banner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 h-28 rounded-2xl my-8 flex gap-8 justify-center items-center">
      <div className="h-full text-3xl font-bold text-white items-center flex">
        PatentAI, your A.I Paralegal
      </div>
    </section>
  );
}

export function NextBanner() {
  const { t } = useTranslation();
  return (
    <section className="text-5xl pt-10 pb-14 font-bold">
      <span className="text-text-title">Welcome to</span>
      <span className="pl-3 text-transparent bg-clip-text  bg-gradient-to-l from-[#40EBE3] to-[#4A51FF]">
        PatentAI
      </span>
    </section>
  );
}
