
type GuestLayoutProps = {
    children: React.ReactNode;
};

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
    return (
        <div>
            <h1>Guest Layout</h1>
            {children}
        </div>
    );
};

export default GuestLayout;