function HeaderBanner({ children, className }) {
  return (
    <div
      className={`header-banner relative w-full min-h-[450px] md:min-h-[380px] lg:min-h-[550px] bg-black pt-[130px] ${className}`}
    >
      {children}
    </div>
  );
}

export default HeaderBanner;
