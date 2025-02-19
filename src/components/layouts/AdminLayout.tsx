type AdminLayoutProps = {
    children: React.ReactNode;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <div>
            <h1>Admin Layout</h1>
            {children}
        </div>
    );
};

export default AdminLayout;