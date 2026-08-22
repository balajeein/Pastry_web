interface PastryLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export const PastryLogo: React.FC<PastryLogoProps> = ({ 
  size = 32, 
  showText = true,
  className = ''
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      <img 
        src="/pastry-logo.png" 
        alt="Pastry Logo"
        width={size}
        height={size}
        style={{ 
          width: `${size}px`, 
          height: `${size}px`, 
          objectFit: 'contain',
          display: 'block',
          flexShrink: 0
        }}
      />
      
      {showText && (
        <span 
          style={{ 
            fontWeight: 800, 
            fontSize: '18px', 
            letterSpacing: '0.08em', 
            color: '#111111',
            textTransform: 'uppercase',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          PASTRY
        </span>
      )}
    </div>
  );
};
