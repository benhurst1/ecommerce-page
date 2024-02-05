export default function NavButton({ text }) {
  return <a href={`#${text}`} className="sm:p-4 text-sm cursor-pointer max-sm:font-bold max-sm:text-lg hover:underline underline-offset-[43px]">{text}</a>;
}
