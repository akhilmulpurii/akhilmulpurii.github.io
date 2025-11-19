export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 bg-background text-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Akhil Mulpuri. All rights reserved.
      </p>
    </footer>
  );
}
