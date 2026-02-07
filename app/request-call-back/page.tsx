import Layout from "@/components/layout/Layout";
import CallbackForm from "@/components/forms/CallbackForm";
const RequestCallback = () => {
  return (
    <Layout>
      <section className="py-6 bg-[#d9d9d9] min-h-screen">
        <div className="container xl:px-0 px-4">
          <div className="max-w-[600px] mx-auto text-center mb-8">
            <h1 className="text-foreground mb-6 opacity-0 animate-fade-up animate-delay-100 text-[45px]">
              Request A Call Back
            </h1>
            <p className="opacity-0 animate-fade-up animate-delay-200 text-[13px] my-[12px]">
              Hey! Want to get in touch? We are looking forward to be in contact with you.
            </p>
            <p className="opacity-0 animate-fade-up animate-delay-200 text-[13px]">
              Our team of experts are always surfacing unheard ideas and encouraging our talents to drive meaningful
              business for you!
            </p>
          </div>

          <div className="opacity-0 animate-fade-up animate-delay-300">
            <CallbackForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default RequestCallback;