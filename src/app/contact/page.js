import PageBanner from "@/components/ui/PageBanner";
import ContactForm from "@/components/forms/ContactForm";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact the Office",
  description: `Published contact details for ${site.name} and the National Assembly.`,
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Contact the Office"
        image="/images/speaker/courtesy.jpg"
        alt="Rt. Hon. Abbas Tajudeen receiving a guest in the Office of the Speaker."
        imageClassName="object-cover object-top"
        className="h-[45vh] min-h-[320px]"
      />

      <section className="bg-paper px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
