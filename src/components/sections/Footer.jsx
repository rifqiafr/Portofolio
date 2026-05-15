function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        {/* LOGO */}
        <h1 className="text-3xl font-black text-[#023E8A]">
          KIAF
        </h1>

        {/* TEXT */}
        <p className="text-gray-600 text-center">
          © 2026 Muhamad Rifqi Afriansyah.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;