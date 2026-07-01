export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center">
      <p className="text-slate-600 text-xs font-mono">
        © {new Date().getFullYear()} Animesh Chaturvedi —{" "}
        <span className="text-accent-light">Designed & built from scratch</span>
      </p>
    </footer>
  );
}
