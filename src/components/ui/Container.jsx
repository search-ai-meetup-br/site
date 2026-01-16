export default function Container({ className = "", children }) {
    return (
        <div className={`grid-design max-w-7xl mx-auto ${className}`}>
            {children}
        </div>
    );
}
