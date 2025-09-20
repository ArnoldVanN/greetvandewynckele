export default function Footer() {
  return (
    <>
      <div className="flex font-default text-sm justify-between gap-2 px-4">
        <p>{"\u00A9"} 2025</p>
        <a
          href="https://github.com/ArnoldVanN/greetvandewynckele"
          className="text-xs hover:text-blue-500 hover:underline"
        >
          By Aquila Hosting
        </a>
      </div>
    </>
  );
}
