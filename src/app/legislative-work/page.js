import LegislativeWorkSection from "@/components/sections/LegislativeWorkSection";
import PublicServiceRecord from "@/components/sections/PublicServiceRecord";
import PageBanner from "@/components/ui/PageBanner";
import { site } from "@/data/site";

export const metadata = {
  title: "Legislative Work",
  description: `Bills, laws and the legislative agenda associated with ${site.name}.`,
};

export default function LegislativeWorkPage() {
  return (
    <>
      <PageBanner
        eyebrow="Legislative Record"
        title="Legislative Work"
        image="/images/speaker/address.jpg"
        alt="Rt. Hon. Abbas Tajudeen addressing the House of Representatives."
      />
      <LegislativeWorkSection />
      <PublicServiceRecord />
    </>
  );
}
