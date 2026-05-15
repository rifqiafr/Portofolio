import { motion } from "framer-motion";

function CertificateCard({ certificate, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="cursor-pointer group bg-white dark:bg-[#1e293b] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">
        <div className="inline-block px-4 py-1 rounded-full bg-[#023E8A] text-white text-sm">
          {certificate.year}
        </div>

        <h3 className="text-2xl font-bold mt-5">
          {certificate.title}
        </h3>

        <p className="text-[#023E8A] font-medium mt-2">
          {certificate.issuer}
        </p>

        <p className="text-xs text-gray-400 mt-3 opacity-0 group-hover:opacity-100 transition">
          Click to view
        </p>
      </div>
    </motion.div>
  );
}

export default CertificateCard;