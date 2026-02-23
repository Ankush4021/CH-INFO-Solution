import ContactFormCard from "./ContactFormCard";
import ContactSidePanel from "./ContactSidePanel";

const ContactWrapper = () => {
  return (
    <section className="py-14 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl">

          <ContactSidePanel />
          <ContactFormCard />

        </div>
      </div>
    </section>
  );
};

export default ContactWrapper;