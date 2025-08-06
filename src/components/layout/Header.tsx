import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/site/logo.png" 
            alt="Corporate Innovation Series" 
            className="h-8 w-auto"
          />
        </Link>
        
        <nav className="flex items-center space-x-8 ml-8">
          <Link
            to="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/about") ? "text-primary" : "text-muted-foreground"
            )}
          >
            About
          </Link>
          <Link
            to="/roundtables"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/roundtables") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Roundtables
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(
              "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
              isActive("/summit") ? "text-primary" : "text-muted-foreground"
            )}>
              Summit
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-background border shadow-lg">
              <DropdownMenuItem asChild>
                <Link to="/summit" className="w-full">
                  Summit Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/summit/2024" className="w-full">
                  2024 Summit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/summit/2025" className="w-full">
                  2025 Summit
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};

export default Header;