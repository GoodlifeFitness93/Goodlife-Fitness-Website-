import logoMasterAssetImg from "@/assets/goodlife-logo-master-transparent.png";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <img src={logoMasterAssetImg} alt="Goodlife Fitness" className="w-7 h-7 object-contain" />
          <span className="tracking-wider">GOODLIFE FITNESS CLUB · SOLAPUR</span>
        </div>
        <div>© {new Date().getFullYear()} Goodlife Fitness Club. All rights reserved.</div>
      </div>
    </footer>
  );
}
