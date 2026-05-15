function SectionTitle({ title, highlight }) {
  return (
    <h2 className="text-4xl md:text-5xl font-black leading-tight">
      {title}{" "}
      <span className="text-[#023E8A]">
        {highlight}
      </span>
    </h2>
  );
}

export default SectionTitle;