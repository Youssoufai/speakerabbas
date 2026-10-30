import ConstituencySection from "@/components/sections/ConstituencySection";
import PageBanner from "@/components/ui/PageBanner";
import { site } from "@/data/site";

export const metadata = {
  title: "Constituency",
  description: `Projects reported for Zaria Federal Constituency and for Kaduna North under ${site.name}.`,
};

export default function ConstituencyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Constituency"
        title="Serving Zaria"
      />
      <ConstituencySection />
    </>
  );
}
