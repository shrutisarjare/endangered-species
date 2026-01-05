const Contact = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Contact Us
      </h2>

      <form className="flex flex-col gap-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="border p-2 rounded"
        />
        <button className="bg-green-700 text-white py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
