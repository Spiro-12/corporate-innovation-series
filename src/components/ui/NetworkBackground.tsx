const NetworkBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="w-full h-full opacity-10"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="network-pattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Network nodes */}
            <circle cx="20" cy="20" r="2" fill="hsl(var(--primary))" />
            <circle cx="60" cy="40" r="1.5" fill="hsl(var(--primary-glow))" />
            <circle cx="100" cy="20" r="1" fill="hsl(var(--accent))" />
            <circle cx="40" cy="80" r="1.5" fill="hsl(var(--primary))" />
            <circle cx="80" cy="100" r="2" fill="hsl(var(--primary-glow))" />
            <circle cx="20" cy="60" r="1" fill="hsl(var(--accent))" />
            
            {/* Network connections */}
            <line x1="20" y1="20" x2="60" y2="40" stroke="hsl(var(--primary))" strokeWidth="0.5" />
            <line x1="60" y1="40" x2="100" y2="20" stroke="hsl(var(--primary-glow))" strokeWidth="0.5" />
            <line x1="20" y1="20" x2="40" y2="80" stroke="hsl(var(--accent))" strokeWidth="0.3" />
            <line x1="40" y1="80" x2="80" y2="100" stroke="hsl(var(--primary))" strokeWidth="0.5" />
            <line x1="20" y1="60" x2="60" y2="40" stroke="hsl(var(--primary-glow))" strokeWidth="0.3" />
            <line x1="80" y1="100" x2="100" y2="20" stroke="hsl(var(--accent))" strokeWidth="0.3" />
          </pattern>
        </defs>
        
        {/* Apply the pattern */}
        <rect width="100%" height="100%" fill="url(#network-pattern)" />
        
        {/* Additional floating elements for visual interest */}
        <circle cx="200" cy="150" r="3" fill="hsl(var(--primary))" opacity="0.3" />
        <circle cx="800" cy="300" r="2" fill="hsl(var(--primary-glow))" opacity="0.4" />
        <circle cx="1000" cy="500" r="2.5" fill="hsl(var(--accent))" opacity="0.3" />
        <circle cx="300" cy="600" r="1.5" fill="hsl(var(--primary))" opacity="0.5" />
        <circle cx="600" cy="200" r="2" fill="hsl(var(--primary-glow))" opacity="0.3" />
        
        {/* Subtle connecting lines */}
        <line x1="200" y1="150" x2="600" y2="200" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.2" />
        <line x1="800" y1="300" x2="1000" y2="500" stroke="hsl(var(--primary-glow))" strokeWidth="0.5" opacity="0.2" />
      </svg>
    </div>
  );
};

export default NetworkBackground;