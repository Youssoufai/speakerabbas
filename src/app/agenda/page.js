import AgendaSection from "@/components/sections/AgendaSection";
import PageBanner from "@/components/ui/PageBanner";
import { site } from "@/data/site";

export const metadata = {
  title: "The Legislative Agenda",
  description: `The eight priorities of the 10th House of Representatives under ${site.name}.`,
};

export default function AgendaPage() {
  return (
    <>
      <PageBanner
        eyebrow="Priorities"
        title="The Legislative Agenda"
        image="/images/speaker/presiding.jpg"
        alt="Rt. Hon. Abbas Tajudeen speaking from the Chair of the House."
      />
      <AgendaSection />
    </>
  );
}
