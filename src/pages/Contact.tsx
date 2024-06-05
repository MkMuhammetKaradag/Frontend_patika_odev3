const Contact = () => {
  return (
    <div className="w-full   flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-semibold">
              Adınız
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold">
              E-posta Adresiniz
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold">
              Mesajınız
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
