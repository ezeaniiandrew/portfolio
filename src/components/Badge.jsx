function Badge({ badges }) {
  return (
    <>
      {badges.map((badge, index) => (
        <li
          key={index}
          className="flex items-center gap-2 px-3 py-1 border border-slate-400 rounded-full text-sm font-medium
                     transition-all duration-200 ease-out hover:shadow-md hover:-translate-y-1 hover:border-brand-secondary"
        >
          {badge.icon && <badge.icon color={badge.color} />}
          <p>{badge.name}</p>
        </li>
      ))}
    </>
  );
}

export default Badge;
