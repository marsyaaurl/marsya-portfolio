function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t bg-white/60 rounded-t-3xl text-center text-sm text-muted-foreground/80 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-semibold">
          &copy; {currentYear} Marsya Aurelia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
