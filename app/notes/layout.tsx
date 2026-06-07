interface NotesLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

function NotesLayout({ children, modal }: NotesLayoutProps) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}

export default NotesLayout;