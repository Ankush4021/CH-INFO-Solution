import ReusableContactForm from "../../../components/ReusableContactForm";
import servicesData from "../../HomePage/ServicesSection/servicesData";
import ContactSidePanel from "./ContactSidePanel";

const ContactWrapper = () => {
  return (
    <section className="py-14 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl">

          <ContactSidePanel />
          <ReusableContactForm variant="contact" services={servicesData} />

        </div>
      </div>
    </section>
  );
};

export default ContactWrapper;