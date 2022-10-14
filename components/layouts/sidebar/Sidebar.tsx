import NavBar from '../../ui/navbar/NavBar';
export interface ISidebar {
  sampleTextProp?: string;
}

const Sidebar: React.FC<ISidebar> = () => {
  return (
    <aside className="flex flex-col border-2">
      <NavBar />
    </aside>
  );
};

export default Sidebar;
