export default function ThankYouPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center px-6 py-12 max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p>Your message has been sent successfully. I will get back to you soon.</p>
        <a
          href="/"
          className="mt-6 inline-block text-cyan-400 hover:underline"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
