function Header({ heading, info }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-marineBlue text-4xl font-bold">{heading}</h1>
      <p className="text-coolGray">{info}</p>
    </div>
  );
}

export default Header;
